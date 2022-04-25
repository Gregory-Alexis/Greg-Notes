import React, { useEffect, useRef } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  setIsActive,
  setNote,
  setTitle,
} from "../../../redux/features/noteInputSlice";

const Note = () => {
  const note = useSelector((state) => state.noteInputSlice.note);
  const title = useSelector((state) => state.noteInputSlice.title);
  const isActive = useSelector((state) => state.noteInputSlice.isActive);

  const dispatch = useDispatch();
  const ref = useRef();

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (isActive && ref.current && !ref.current.contains(e.target)) {
        dispatch(setIsActive(false));
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [isActive, dispatch]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (title || note) {
      axios.post("http://localhost:5000/api/note", { title, note });
      dispatch(setTitle(""));
      dispatch(setNote(""));
    }
  };

  return (
    <div className="flex items-center rounded-md w-2/6">
      <form
        className="flex flex-col items-center w-full bg-white p-5 rounded-lg relative"
        ref={ref}
      >
        {isActive && (
          <input
            placeholder="Titre"
            name="title"
            type="text"
            value={title}
            onChange={(e) => dispatch(setTitle(e.target.value))}
            className="outline-none w-full mb-2 placeholder:text-gray-500 font-semibold"
          />
        )}

        <textarea
          placeholder="Ajoutez une note..."
          type="text"
          name="note"
          value={note}
          className="outline-none w-full h-24 cursor-auto font-light placeholder:text-gray-500 placeholder:font-semibold"
          onFocus={() => dispatch(setIsActive(true))}
          onChange={(e) => dispatch(setNote(e.target.value))}
          style={{ resize: "none" }}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-full absolute bottom-2 right-2"
          onClick={submitHandler}
        >
          Ajouter
        </button>
      </form>
    </div>
  );
};

export default Note;
