// App.js
import { useState, useEffect } from 'react';
import axios from 'axios';
import '@radix-ui/themes/styles.css';
import NewEntryForm from './components/NewEntryForm';
import { Table, Checkbox, rem } from '@mantine/core';
const App = () => {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    hobbies: '',
  });

  useEffect(() => {
    // Fetch data from server on component mount
    axios.get('http://localhost:5000/api/data')
      .then(response => setData(response.data))
      .catch(error => console.error(error));
  }, [data]);

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = () => {
    // Send data to server on form submission
    axios.post('http://localhost:5000/api/data', formData)
      .then(response => setData([...data, response.data]))
      .catch(error => console.error(error));
  };

  // const handleDelete = (id) => {
  //   // Delete data on button click
  //   axios.delete(`http://localhost:5000/api/data/${id}`)
  //     .then(() => setData(data.filter(item => item._id !== id)))
  //     .catch(error => console.error(error));
  // };

  return (
    <div>

      <div className='flex flex-row gap-5'>
        <button className='px-5 py-2 bg-amber-300' onClick={() => {
          console.log('clicked');
        }}>Add New Entry</button>
        <button className='px-5 py-2 bg-amber-300'>2</button>

        <NewEntryForm setFormData={setFormData} formData={formData} />
      </div>

      <div>
        <h1>Table Selection</h1>
        <div className="w-full p-3 bg-pink-400 rounded-xl">
          <Table className='bg-green-400 rounded-xl p-2'>
            <Table.Thead>
              <Table.Tr>
                <Table.Th style={{ width: rem(40) }}>
                  <Checkbox />
                </Table.Th>
                <Table.Th>Name</Table.Th>
                <Table.Th>Phone Number</Table.Th>
                <Table.Th>Email</Table.Th>
                <Table.Th>Hobbies</Table.Th>
              </Table.Tr>
            </Table.Thead>

            <Table.Tbody>
              {data.map((item) => (
                <Table.Tr key={item._id}>
                  <Table.Td style={{ width: rem(40) }}>
                    <Checkbox />
                  </Table.Td>
                  <Table.Td>{item.name}</Table.Td>
                  <Table.Td>{item.phoneNumber}</Table.Td>
                  <Table.Td>{item.email}</Table.Td>
                  <Table.Td>{item.hobbies}</Table.Td>
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>
        </div>
      </div>

    </div>
  );
};

export default App;
