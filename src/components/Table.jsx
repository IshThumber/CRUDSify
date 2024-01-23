import { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input
} from '@chakra-ui/react'

export function TableSelection({ data, handleDelete, handleUpdate, handleCheckboxChange, handleSelectAllChange, selectAll, selectedCheckboxes, isEditOpen, onEditOpen, onEditClose }) {
  const [editMode, setEditMode] = useState(false);
  const [editedItem, setEditedItem] = useState({});

  const handleEdit = (item) => {
    setEditMode(true);
    setEditedItem({ ...item });
    onEditOpen();
  };

  const handleUpdateFormChange = (e) => {
    setEditedItem({ ...editedItem, [e.target.name]: e.target.value });
  };

  const handleUpdateSubmit = () => {
    // Call the handleUpdate function from the parent component
    handleUpdate(editedItem);
    setEditMode(false);
  };

  const UpdateForm = () => {
    return (
      <>
        <div className="flex flex-col gap-6 p-4">
          <Input
            name="name"
            type="text"
            pr="4.5rem"
            variant="outline"
            placeholder="Enter Name"
            value={editedItem.name}
            onChange={handleUpdateFormChange}
          />
          <Input
            name="phoneNumber"
            type="number"
            pr="4.5rem"
            variant="outline"
            placeholder="Enter Phone Number"
            value={editedItem.phoneNumber}
            onChange={handleUpdateFormChange}
          />
          <Input
            name="email"
            type="text"
            pr="4.5rem"
            variant="outline"
            placeholder="Enter Email"
            value={editedItem.email}
            onChange={handleUpdateFormChange}
          />
          <Input
            name="hobbies"
            type="text"
            pr="4.5rem"
            variant="outline"
            placeholder="Enter Hobbies"
            value={editedItem.hobbies}
            onChange={handleUpdateFormChange}
          />
          <Button variant='ghost' className="px-4 py-2 font-bold text-white bg-green-500 rounded-full hover:bg-green-700" onClick={handleUpdateSubmit}>Update</Button>
        </div>
      </>
    )
  }

  return (
    <>
      {/* <div className="bg-green-700 p-3 flex flex-col w-fit rounded-xl">
        {editMode && <UpdateForm />}
      </div> */}

      <>
        <Modal isOpen={isEditOpen} onClose={onEditClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>New Entry Form</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <UpdateForm />
            </ModalBody>

            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onEditClose}>
                Close
              </Button>
              <Button variant='ghost' className="px-4 py-2 font-bold text-white bg-green-500 rounded-full hover:bg-green-700" onClick={() => { }}>Submit</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>


      <div className="w-full p-3 border-2 border-blue-gray-900  rounded-xl text-black">

        <table className="w-full">
          <thead>
            <tr>
              <th className="border px-4 py-2">
                <input
                  type="checkbox"
                  onChange={handleSelectAllChange}
                  checked={selectAll}
                />
              </th>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Phone Number</th>
              <th className="border px-4 py-2">Email</th>
              <th className="border px-4 py-2">Hobbies</th>
              <th className="border px-4 py-2" colSpan={2}>Actions</th>
            </tr>
          </thead>
          {data.length === 0 ? (
            <tbody>
              <tr>
                <td colSpan="7" className="border text-center p-5">
                  No data available
                </td>
              </tr>
            </tbody>
          ) : (
            <tbody>
              {data.map((item) => (
                <tr key={item._id}>
                  <td className="border px-4 py-2">
                    <input
                      type="checkbox"
                      onChange={() => handleCheckboxChange(item._id)}
                      checked={selectedCheckboxes.includes(item._id)}
                    />
                  </td>
                  <td className="border px-4 py-2">{item.name}</td>
                  <td className="border px-4 py-2">{item.phoneNumber}</td>
                  <td className="border px-4 py-2">{item.email}</td>
                  <td className="border px-4 py-2">{item.hobbies}</td>
                  <td className="border px-4 py-2">
                    <button
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg"
                      onClick={() => handleDelete(item._id)}
                    >
                      Delete
                    </button>
                  </td>
                  <td className="border px-4 py-2">
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
                      onClick={() => handleEdit(item)}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>
    </>
  );
}
