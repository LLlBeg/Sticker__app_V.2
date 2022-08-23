import { addSticker } from "../services/api";
import { BiMessageSquareAdd } from "react-icons/bi";

const AddButton = ({ data, setData }) => {
  const addNewSticker = () => {
    addSticker({ description: "Add Your Note" }).then((res) =>
      setData([...data, res.data])
    );
  };

  return (
    <div className="add__btn">
      <span onClick={addNewSticker}>
        Add New Note
        <BiMessageSquareAdd />
      </span>
    </div>
  );
};

export default AddButton;
