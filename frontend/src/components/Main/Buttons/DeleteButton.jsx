import axios from "axios";
import Trash from "../../../images/trash.svg";

const DeleteButton = ({ id, setIsModalOpen }) => {
  const deleteNote = (id) => {
    axios.delete(`http://localhost:5000/api/note/${id}`);
    setIsModalOpen(false);
  };

  return (
    <button type="button" aria-label="supprimer la note">
      <img
        src={Trash}
        alt="supprimer"
        className="absolute bottom-0 left-0 m-2 pt-5"
        onClick={() => deleteNote(id)}
      />
    </button>
  );
};

export default DeleteButton;
