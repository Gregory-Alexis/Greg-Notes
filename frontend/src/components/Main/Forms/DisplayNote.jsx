import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNotes } from "../../../redux/features/displayNoteSlice";
import DisplayNoteItem from "./DisplayNoteItem";

const DisplayNote = () => {
  const notes = useSelector((state) => state.displayNoteSlice.notes);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get("http://localhost:5000/api/note");
        dispatch(setNotes(result.data));
      } catch (error) {
        throw new Error(error);
      }
    };
    fetchData();
  }, [notes, dispatch]);

  return (
    <ul className="flex flex-wrap px-28">
      {notes.map((el) => (
        <DisplayNoteItem
          title={el.title}
          note={el.note}
          id={el._id}
          key={el._id}
        />
      ))}
    </ul>
  );
};

export default DisplayNote;
