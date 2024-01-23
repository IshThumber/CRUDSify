export function TableSelection({ data, handleDelete, handleUpdate, handleCheckboxChange, handleSelectAllChange, selectAll, selectedCheckboxes }) {
  return (
    <>
      <div className="w-full p-3 border-2 border-blue-gray-900  rounded-xl text-black">
        <table className="w-full">
          <thead>
            <tr>
              <th className="border px-4 py-2">
                <input
                  type="checkbox"
                  onChange={handleSelectAllChange}
                  checked={selectAll}
                /> {/* Add a checkbox input for select all */}
              </th>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Phone Number</th>
              <th className="border px-4 py-2">Email</th>
              <th className="border px-4 py-2">Hobbies</th>
              <th className="border px-4 py-2">Delete</th>
              <th className="border px-4 py-2">Update</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item._id}>
                <td className="border px-4 py-2">
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxChange(e, item._id)}
                    checked={selectedCheckboxes.includes(item._id)}
                  /> {/* Add a checkbox input */}
                </td>
                <td className="border px-4 py-2">{item.name}</td>
                <td className="border px-4 py-2">{item.phoneNumber}</td>
                <td className="border px-4 py-2">{item.email}</td>
                <td className="border px-4 py-2">{item.hobbies}</td>
                <td className="border px-4 py-2">
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-2xl"
                    onClick={handleDelete(item._id)}
                  >
                    Delete
                  </button>
                </td>
                <td className="border px-4 py-2">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl"
                    onClick={handleUpdate(item._id)}
                  >
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}