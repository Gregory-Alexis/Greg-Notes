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
        const result = await axios.get(
          "https://greg-keep-note.herokuapp.com/api"
        );
        dispatch(setNotes(result.data));
      } catch (error) {
        throw new Error(error);
      }
    };
    fetchData();
  }, [notes, dispatch]);

  return (
    <ul className="flex flex-wrap justify-center pb-5 xl:justify-start xl:px-28">
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
