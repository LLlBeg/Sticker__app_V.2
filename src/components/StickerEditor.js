import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getStickers, updateSticker } from "./../services/api";

const StickerEditor = () => {
  const [desc, setDesc] = useState(undefined);
  const { id } = useParams();
  const redirect = useNavigate();

  useEffect(() => {
    getStickers(id).then((res) => {
      setDesc(res.data.description);
    });
  }, [id]);

  const saveSticker = (e) => {
    e.preventDefault();
    updateSticker(id, desc).then((res) => {
      redirect("/");
    });
  };

  return (
    <div className="edit__container">
      <form className="edit__form" onSubmit={saveSticker}>
        <input
          placeholder="Add your note here"
          type="text"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <input type="submit" value="Apply" />
      </form>
    </div>
  );
};

export default StickerEditor;
