import React, { useEffect, useRef } from "react";
import DeleteButton from "../Buttons/DeleteButton";

const OpenModal = ({
  id,
  updatedDataBase,
  idToUpdate,
  updatedTitle,
  updatedNote,
  setUpdatedNote,
  setUpdatedTitle,
  isModalOpen,
  setIsModalOpen,
}) => {
  const ref = useRef();

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (isModalOpen && ref.current && !ref.current.contains(e.target)) {
        setIsModalOpen(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [isModalOpen, setIsModalOpen]);

  return (
    <form className="formModal">
      <li className="liForm" ref={ref} data-aos="zoom-in">
        <input
          className="inputModal"
          name="title"
          type="text"
          value={updatedTitle}
          onChange={(e) => setUpdatedTitle(e.target.value)}
          data-testid="update-input"
        />
        <textarea
          className="outline-none w-full h-32 rounded-lg"
          type="text"
          name="note"
          style={{ resize: "none" }}
          value={updatedNote}
          onChange={(e) => setUpdatedNote(e.target.value)}
          data-testid="update-textarea"
        />
        <DeleteButton id={id} setIsModalOpen={setIsModalOpen} />
        <button
          type="submit"
          alt="update"
          aria-label="confirmer mis à jour note"
          className="buttonModal"
          onClick={(e) => {
            updatedDataBase(idToUpdate, updatedTitle, updatedNote);
            e.preventDefault();
            setIsModalOpen(false);
          }}
        >
          Modifier
        </button>
      </li>
    </form>
  );
};

export default OpenModal;
