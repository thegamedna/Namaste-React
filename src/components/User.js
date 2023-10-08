import React from "react";
import { useState } from "react";

const User = ({ name }) => {
  const [count, setCount] = useState(0);
  return (
    <div className="user-card">
      <h2>name: {name}</h2>
      <h5>Count : {count}</h5>
      <h3>location: PKD</h3>
      <h4>contact: 909908778</h4>
    </div>
  );
};

export default User;
