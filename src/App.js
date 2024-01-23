import { useState, useEffect } from 'react';
import { useDisclosure } from '@chakra-ui/react';
import axios from 'axios';
import NewEntryForm from './components/NewEntryForm';
import { TableSelection } from './components/Table';

const hostURL = process.env.REACT_APP_HOST_URL
const App = () => {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    hobbies: '',
  });

  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  const [formErrors, setFormErrors] = useState({});
  // const [flag, setFlag] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [updateData, setUpdateData] = useState(formData);

  useEffect(() => {
    axios.get(`${hostURL}/api/alldata`)
      .then(response => setData(response.data))
      .catch(error => console.error(error));
  }, []);

  const validationForm = () => {
    let error = {};
    // setFlag(true);
    let flag = true;

    if (!formData.name) {
      // setFlag(false);
      flag = false;
      error.name = "Please enter your name";
    }
    else if (!/^[A-Za-z ]+$/.test(formData.name.toLowerCase().trim())) {
      error.name = "Please enter valid name";
      // setFlag(false);
      flag = false;
    }
    else {
      error.name = "";
    }

    if (!formData.phoneNumber?.trim()) {
      error.phoneNumber = "Mobile number is require";
      // setFlag(false);
      flag = false;
    } else if (formData.phoneNumber.length > 10 || formData.phoneNumber.length < 10) {
      error.phoneNumber = "Length must be of 10 digits";
      // setFlag(false);
      flag = false;
    } else if (
      !/^[6-9][0-9]{9}$/.test(formData.phoneNumber) ||
      formData.phoneNumber === "6666666666" ||
      formData.phoneNumber === "7777777777" ||
      formData.phoneNumber === "8888888888" ||
      formData.phoneNumber === "9999999999"
    ) {
      error.phoneNumber = "Invalid mobile number";
      // setFlag(false);
      flag = false;
    } else {
      error.phoneNumber = "";
    }

    if (!formData.email) {
      error.email = "Please enter your email";
      // setFlag(false);
      flag = false;
    }
    else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i.test(formData.email)) {
      error.email = "Please enter valid email";
      // setFlag(false);
      flag = false;
    }
    else {
      error.email = "";
    }

    if (!formData.hobbies) {
      error.hobbies = "Please enter your hobbies";
      // setFlag(false);
      flag = false;
    }
    else {
      error.hobbies = "";
    }
    setFormErrors(error);
  }

  const handleFormChange = (e) => {
    validationForm()
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    if (formData.name === '' || formData.phoneNumber === '' || formData.email === '' || formData.hobbies === '')
      return false;
    e.preventDefault();

    validationForm();
    if (formData)
      axios.post(`${hostURL}/api/newdata`, formData)
        .then(response => setData([...data, response.data]))
        .catch(error => console.error(error));
    else {
      alert("Please fill the form")
    }
    onClose();

    setFormData({
      name: '',
      phoneNumber: '',
      email: '',
      hobbies: '',
    });
  };


  console.log(hostURL);
  const handleDelete = (id) => {
    // Delete data on button click
    axios.post(`${hostURL}/delete/data/${id}`, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(() => setData(data.filter(item => item._id !== id)))
      .catch(error => console.error(error));

    // console.log("sdf");
  };

  const handleCheckboxChange = (e, id) => {
    if (e.target.checked) {
      setSelectedCheckboxes([...selectedCheckboxes, id]);
      console.log('Selected checkbox IDs:', [...selectedCheckboxes, id]);
    } else {
      setSelectedCheckboxes(selectedCheckboxes.filter((checkboxId) => checkboxId !== id));
    }
  };

  const handleSelectAllChange = (e) => {
    setSelectAll(e.target.checked);
    if (e.target.checked) {
      const allIds = data.map((item) => item._id);
      setSelectedCheckboxes(allIds);
      console.log('Selected checkbox IDs:', allIds);
    } else {
      setSelectedCheckboxes([]);
    }
  };

  const handleUpdate = (itemId) => {
    const selectedItem = data.find(item => item._id === itemId);

    const newName = prompt('Enter new name:', selectedItem.name);
    const newPhoneNumber = prompt('Enter new phone number:', selectedItem.phoneNumber);
    const newEmail = prompt('Enter new email:', selectedItem.email);
    const newHobbies = prompt('Enter new hobbies:', selectedItem.hobbies);

    selectedItem.name = newName;
    selectedItem.phoneNumber = newPhoneNumber;
    selectedItem.email = newEmail;
    selectedItem.hobbies = newHobbies;

    axios.post(`${hostURL}/update/data/${itemId}`, selectedItem)
      .then(response => setUpdateData(response.data))
      .catch(error => console.error(error));
  }


  const handleMail = (e) => {

    let ids = selectedCheckboxes;

    for (let i = 0; i < ids.length; i++) {
      axios.post(`${hostURL}sendmail/${ids[i]}`)
        .then(response => console.log(response))
        .catch(error => console.error(error));
      console.log(ids[i]);

    }

    console.log("Mail sent");
  }

  return (
    <div className='bg-white text-black'>
      <div>
        <h1 className='text-3xl'>Form</h1>
        <NewEntryForm setFormData={setFormData} formData={formData} handleFormSubmit={handleFormSubmit} open={open} setOpen={setOpen} handleFormChange={handleFormChange} formErrors={formErrors} isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
      </div>

      <div>
        <h1>Table Selection</h1>
        <TableSelection data={data} handleDelete={handleDelete} handleUpdate={handleUpdate} handleCheckboxChange={handleCheckboxChange} handleSelectAllChange={handleSelectAllChange} selectAll={selectAll} selectedCheckboxes={selectedCheckboxes} />
      </div>


      <div >

        <button className='bg-green-200 px-5 py-2' onClick={handleMail}>Send Mail</button>
      </div>
    </div>
  );
};

export default App;
