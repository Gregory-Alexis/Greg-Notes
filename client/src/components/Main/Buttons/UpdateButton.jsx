import Edit from "../../../images/edit.svg";

const UpdateButton = ({ setIsModalOpen }) => {
  return (
    <button
      type="button"
      aria-label="modifier la note"
      onClick={() => setIsModalOpen(true)}
    >
      <img
        src={Edit}
        alt="edit"
        className="absolute top-0 right-0 p-5 opacity-0 transition-all duration-200 ease-in-out group-hover:opacity-100"
      />
    </button>
  );
};

export default UpdateButton;
