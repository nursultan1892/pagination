import { Component } from "react";
import "../App.css";
import { BsFillHandThumbsUpFill } from "react-icons/bs";

export default class Display extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="container">
        {data.map(({ user, likes, urls, alt_description }, index) => {
          return (
            <div className="flex" key={likes}>
              <div className="pic">
                <img
                  style={{ width: "100%", height: "250px" }}
                  src={urls.small}
                  alt=""
                />
              </div>

              <p>{alt_description}</p>
              <p>Name: {user.first_name}</p>
              <p>
                <BsFillHandThumbsUpFill /> {likes}
              </p>
            </div>
          );
        })}
      </div>
    );
  }
}
