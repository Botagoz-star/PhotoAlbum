export const Picture = ({ title, thumbnailUrl }) => {
    return (
      <div className="picture">
        <h4>{title}</h4>
        <div>
          <a
            href="https://i.pinimg.com/736x/8c/10/de/8c10de28a4fe7f3e16fc3040e9c0fca1.jpg"
            target="_blank"
          >
            <img src={thumbnailUrl} alt="" />
          </a>
        </div>
      </div>
    );
  };
  