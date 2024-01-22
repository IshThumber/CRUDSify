// import cx from 'clsx';
// import { useState } from 'react';
import { Table, Checkbox, rem } from '@mantine/core';
// import classes from './TableSelection.module.css';

const dataaa = [
  {
    "_id": "65adda97976296675c797f7b",
    "name": "John Doe",
    "phoneNumber": "123-456-7890",
    "email": "john.doe@example.com",
    "hobbies": "Reading, Traveling",
    "__v": 0
  },
  {
    "_id": "65adda9d976296675c797f7e",
    "name": "John Doe",
    "phoneNumber": "123-456-7890",
    "email": "john.doe@example.com",
    "hobbies": "Reading, Traveling",
    "__v": 0
  },
  {
    "_id": "65adda9d976296675c797f83",
    "name": "John Doe",
    "phoneNumber": "123-456-7890",
    "email": "john.doe@example.com",
    "hobbies": "Reading, Traveling",
    "__v": 0
  },
  {
    "_id": "65adda9d976296675c797f81",
    "name": "John Doe",
    "phoneNumber": "123-456-7890",
    "email": "john.doe@example.com",
    "hobbies": "Reading, Traveling",
    "__v": 0
  },
  {
    "_id": "65adda9e976296675c797f89",
    "name": "John Doe",
    "phoneNumber": "123-456-7890",
    "email": "john.doe@example.com",
    "hobbies": "Reading, Traveling",
    "__v": 0
  },
  {
    "_id": "65adda9e976296675c797f86",
    "name": "John Doe",
    "phoneNumber": "123-456-7890",
    "email": "john.doe@example.com",
    "hobbies": "Reading, Traveling",
    "__v": 0
  },
  {
    "_id": "65adda9e976296675c797f8c",
    "name": "John Doe",
    "phoneNumber": "123-456-7890",
    "email": "john.doe@example.com",
    "hobbies": "Reading, Traveling",
    "__v": 0
  },
  {
    "_id": "65adda9f976296675c797f90",
    "name": "John Doe",
    "phoneNumber": "123-456-7890",
    "email": "john.doe@example.com",
    "hobbies": "Reading, Traveling",
    "__v": 0
  },
  {
    "_id": "65adda9f976296675c797f93",
    "name": "John Doe",
    "phoneNumber": "123-456-7890",
    "email": "john.doe@example.com",
    "hobbies": "Reading, Traveling",
    "__v": 0
  },
  {
    "_id": "65addf0c09c664a4197f4d7d",
    "name": "Emily Smith",
    "phoneNumber": "987-654-3210",
    "email": "emily.smith@example.com",
    "hobbies": "Painting, Hiking",
    "__v": 0
  },
  {
    "_id": "65addf2b09c664a4197f4e5d",
    "name": "Emily Smith",
    "phoneNumber": "987-654-3210",
    "email": "emily.smith@example.com",
    "hobbies": "Painting, Hiking",
    "__v": 0
  },
  {
    "_id": "65ade13f09c664a4197f6e73",
    "name": "Emily Smith",
    "phoneNumber": "987-654-3210",
    "email": "emily.smith@example.com",
    "hobbies": "Painting, Hiking",
    "__v": 0
  },
  {
    "_id": "65ade14209c664a4197f6e96",
    "name": "Emily Smith",
    "phoneNumber": "987-654-3210",
    "email": "emily.smith@example.com",
    "hobbies": "Painting, Hiking",
    "__v": 0
  }
]
export function TableSelection() {
  // const [selection, setSelection] = useState(['1']);
  // const toggleRow = (id) =>
  //   setSelection((current) =>
  //     current.includes(id) ? current.filter((item) => item !== id) : [...current, id]
  //   );
  // const toggleAll = () =>
  //   setSelection((current) => (current.length === data.length ? [] : data.map((item) => item.id)));



  return (
    <>
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
            {dataaa.map((item) => (
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
    </>
  );
}