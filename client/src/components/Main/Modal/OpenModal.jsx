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
    <form className="flex justify-center absolute top-48 left-0 right-0">
      <li
        className="bg-white mx-2 p-4 rounded-lg break-words relative h-64 w-128"
        ref={ref}
        data-aos="zoom-in"
      >
        <input
          className="font-semibold mb-4 mt-2 flex outline-none w-full"
          name="title"
          type="text"
          value={updatedTitle}
          onChange={(e) => setUpdatedTitle(e.target.value)}
          data-testid="update-input"
        />
        <textarea
          className="outline-none w-full h-36"
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
          className="absolute right-0 bottom-0 px-4 py-1 m-2 bg-gray-200 rounded-md hover:bg-gray-500 hover:text-gray-200 transition-all duration-200 ease-in-out"
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
