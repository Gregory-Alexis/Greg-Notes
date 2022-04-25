import axios from "axios";
import React, { useState } from "react";
import UpdateButton from "../Buttons/UpdateButton";
import OpenModal from "../Modal/OpenModal";
import AOS from "aos";

AOS.init();

AOS.init({
  duration: "200",
});

const DisplayNoteItem = ({ title, note, id }) => {
  const [updatedTitle, setUpdatedTitle] = useState(title);
  const [updatedNote, setUpdatedNote] = useState(note);
  const [idToUpdate] = useState(id);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const updatedDataBase = (idToUpdate, updateTitle, updateNote) => {
    axios.put(`http://localhost:5000/api/note/${id}`, {
      id: parseInt(idToUpdate),
      title: updateTitle,
      note: updateNote,
    });
  };

  return (
    <>
      {!isModalOpen ? (
        <li className="listNote group">
          {!title && !note && (
            <h1 className="text-xl text-gray-500 ">Empty Note</h1>
          )}
          <h1 className="font-semibold mb-2 mt-2" data-testid="heading">
            {title}
          </h1>
          <p data-testid="paragraph">{note}</p>
          <UpdateButton setIsModalOpen={setIsModalOpen} />
        </li>
      ) : (
        <li className="openModal">
          <OpenModal
            id={id}
            updatedDataBase={updatedDataBase}
            idToUpdate={idToUpdate}
            updatedTitle={updatedTitle}
            updatedNote={updatedNote}
            setUpdatedNote={setUpdatedNote}
            setUpdatedTitle={setUpdatedTitle}
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
          />
        </li>
      )}
    </>
  );
};

export default DisplayNoteItem;
