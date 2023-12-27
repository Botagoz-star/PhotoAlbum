import { Button } from "./Button";
export const Header = ({
  numOfAlbums,
  numOfPics,
  renderAlbums,
  isShowAlbums,
}) => {
  return (
    <div className="header">
      <p>
        {" "}
        Welcome to my profile. I have {numOfAlbums} albums and {numOfPics}{" "}
        pictures
      </p>
      <button onClick={renderAlbums} className="button">
        {isShowAlbums ? "Hide Albums" : "Show Albums"}
      </button>
      {/* <Button
        btnName={isShowAlbums ? "Hide Albums" : "Show Albums"}
        handleClick={renderAlbums}
      /> */}
    </div>
  );
};
