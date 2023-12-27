import "./styles.css";
import React from "react";
import { Album } from "./components/Album";
import { Header } from "./components/Header";
import { data } from "./data";
import { Search } from "./components/Search";
import { Dropdown } from "./components/Dropdown";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: data,
      isShowAlbums: true,
      inputVal: "",
      renderedData: data,
      isChecked: false,
      selectedOption: "",
    };
  }
  deleteAlbum = (id) => {
    const filteredAlbums = this.state.data.filter((album) => album.id !== id);
    this.setState({ data: filteredAlbums });
  };
  renderAlbums = () => {
    this.setState({ isShowAlbums: !this.state.isShowAlbums });
  };
  handleChange = (e) => {
    this.setState({ inputVal: e.target.value }, () => {
      this.searchAlbum();
    });
  };
  searchAlbum = () => {
    const searchedAlbums = this.state.data.filter((album) =>
      album.albumName.toLowerCase().includes(this.state.inputVal.toLowerCase())
    );
    this.setState({ renderedData: searchedAlbums });
  };
  handleReset = () => {
    this.setState({ inputVal: "", renderedData: this.state.data });
  };
  handleCheck = () => {
    this.setState({ isChecked: !this.state.isChecked });
  };
  handleSelect = (e) => {
    this.setState({ selectedOption: e.target.value });
  };
  render() {
    const { data, isShowAlbums, inputVal, renderedData, isChecked } =
      this.state;
    const numOfPics = data.reduce((accum, current) => {
      return (accum += current.pictures.length);
    }, 0);
    return (
      // <div className={`App ${isChecked && "darkmode"}`}>
      <div className={`App ${isChecked ? "darkmode" : ""}`}>
        <Header
          numOfAlbums={data.length}
          numOfPics={numOfPics}
          renderAlbums={this.renderAlbums}
          isShowAlbums={isShowAlbums}
        />
        {isShowAlbums ? (
          <div>
            <Search
              inputVal={inputVal}
              handleChange={this.handleChange}
              searchAlbum={this.searchAlbum}
              handleReset={this.handleReset}
            />
            <div>
              {" "}
              <label htmlFor="">{isChecked ? "Light Mode" : "Dark Mode"}</label>
              <input
                type="checkbox"
                checked={isChecked}
                onChange={this.handleCheck}
              />
            </div>
            <Dropdown data={data} handleSelect={this.handleSelect} />
            {renderedData.map((singleAlbum) => {
              return (
                <Album
                  {...singleAlbum}
                  deleteAlbum={this.deleteAlbum}
                  key={singleAlbum.id}
                  // name={singleAlbum.albumName}
                  // description={singleAlbum.description}
                />
              );
            })}
          </div>
        ) : null}
        {/* {
            isShowAlbums && data.map((singleAlbum) => {
              return (
                <Album
                  {...singleAlbum}
                  deleteAlbum={this.deleteAlbum}
                  key={singleAlbum.id}
                  // name={singleAlbum.albumName}
                  // description={singleAlbum.description}
                />
              );
            })
          } */}
      </div>
    );
  }
}
export default App;
