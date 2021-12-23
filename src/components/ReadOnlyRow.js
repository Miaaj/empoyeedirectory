import React from "react";

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
       <td key="contact.fullName">{contact.fullName}</td>
      <td key="contact.address">{contact.address}</td>
      <td key="contact.phoneNumber">{contact.phoneNumber}</td>
      <td key="contact.email">{contact.email}</td>
      <td key="contact.department">{contact.department}</td>
      <td key="contact.title">{contact.title}</td>
      <td key="contact.location">{contact.location}</td>
      <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, contact)}
        >
          Edit
        </button>
        <button type="button" onClick={() => handleDeleteClick(contact.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
