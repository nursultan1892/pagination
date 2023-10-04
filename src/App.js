//https://api.unsplash.com/photos/?client_id=67dzJ6HsOJ0oE9moFGN9_AGJ-de6jwkL-CAULtu3QWg&page=77
import { Component } from "react";
import axios from "axios";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavbarBrand, Spinner } from "reactstrap";
import Display from "./components/display";
import { DebounceInput } from "react-debounce-input";
export default class App extends Component {
  state = {
    data: [],
    input: "",
  };
  handleInput = (event) => {
    this.setState({ input: event.target.value });
  };
  fetchData = () => {
    axios
      .get(
        "https://api.unsplash.com/photos/?client_id=67dzJ6HsOJ0oE9moFGN9_AGJ-de6jwkL-CAULtu3QWg&page=77"
      )
      .then((response) => {
        this.setState({ data: response.data });
      });
  };
  componentDidMount() {
    this.fetchData();
  }
  render() {
    const { data, input } = this.state;
    console.log(input);
    const filtered = data.filter((pic) =>
      pic.alt_description.toLowerCase().includes(input.toLowerCase())
    );
    console.log(filtered);

    return (
      <div className="main-card">
        <div className="nav-bar">
          <NavbarBrand href="/">
            <img
              alt="logo"
              src="https://th.bing.com/th/id/OIP.5RGkzGyKARZB8FUoOaNEawHaNK?pid=ImgDet&rs=1"
              style={{
                height: 80,
                width: 80,
              }}
            />
            Splash Pictures
          </NavbarBrand>
        </div>
        <div className="input">
          <DebounceInput
            debounceTimeout={3000}
            placeholder="Search by description..."
            alt=""
            value={input}
            onChange={this.handleInput}
          />
        </div>
        {(
          <div className="spinner">
            <Spinner color="danger" type="grow">
              Loading...
            </Spinner>
          </div>
        ) && (
          <div className="container">
            <Display data={filtered} />
          </div>
        )}
      </div>
    );
  }
}
