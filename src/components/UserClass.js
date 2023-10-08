import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      state: "Arunachal",
    };
  }
  render() {
    const { name, location } = this.props;
    const { count, state } = this.state;
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
