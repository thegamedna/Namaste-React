import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
      },

      count: 1,
      state: "Arunachal",
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/thegamedna");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
  }
  render() {
    // const { name, location } = this.props;
    const { count, state } = this.state;
    const { name, location } = this.state.userInfo;
    console.log(this.state.userInfo);
    return (
      <div className="user-card">
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Update Count
        </button>
        <h2>name: {name}</h2>
        <h2>count: {count}</h2>
        <h3>location: {location}</h3>
        <h3>state: {state}</h3>
        <h4>contact: 909908778</h4>
      </div>
    );
  }
}

export default UserClass;
