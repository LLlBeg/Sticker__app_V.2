import { removeSticker } from "../services/api";
import { Link } from "react-router-dom";
import { TiDelete } from "react-icons/ti";

// import { TiDelete } from "react-icons/ti";

const StickerItem = ({ id, description, setData, data }) => {
  const deleteSticker = () => {
    removeSticker(id).then((resp) => {
      const filteredStickers = data.filter((item) => item.id !== id);
      setData(filteredStickers);
    });
  };

  const delButton = () => {
    return (
      <div className="st-btn " onClick={deleteSticker}>
        <TiDelete />
      </div>
    );
  };

  return (
    <div className={`sticker__item`}>
      <div className="sticker__buttons">{delButton()}</div>
      <Link to={`stickers/${id}`}>
        <p>{description}</p>
      </Link>
    </div>
  );
};

export default StickerItem;
