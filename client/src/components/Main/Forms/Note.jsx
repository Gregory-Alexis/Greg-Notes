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
      axios.post("/api/note", {
        title,
        note,
      });
      dispatch(setTitle(""));
      dispatch(setNote(""));
    }
  };

  return (
    <form className="formNote">
      <div className="noteStyle" ref={ref}>
        {isActive && (
          <input
            placeholder="Titre"
            name="title"
            type="text"
            value={title}
            onChange={(e) => dispatch(setTitle(e.target.value))}
            className="inputFormNote"
          />
        )}

        <textarea
          placeholder="Ajoutez une note..."
          type="text"
          name="note"
          value={note}
          className="textAreaFormNote"
          onFocus={() => dispatch(setIsActive(true))}
          onChange={(e) => dispatch(setNote(e.target.value))}
          style={{ resize: "none" }}
        />
        <button
          type="submit"
          className="buttonFormNote"
          onClick={submitHandler}
        >
          Ajouter
        </button>
      </div>
    </form>
  );
};

export default Note;
