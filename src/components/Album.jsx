import "./Album.style.css";
import { Picture } from "./Picture";
import { Button } from "./Button";
import { Search } from "./Search";
export const Album = ({
  albumName,
  description,
  pictures,
  deleteAlbum,
  id,
}) => {
  return (
    <div className="album">
      <h2 className="album-name">{albumName}</h2>
      <p className="album-description">{description}</p>
      <div className="pictures-container">
        {pictures.map((pic) => {
          return <Picture {...pic} key={pic.id} />;
        })}
      </div>
      <Button handleClick={deleteAlbum} id={id} btnName="Delete Album" />
    </div>
  );
};
// map through pictures array, call Picture component for each picture object
