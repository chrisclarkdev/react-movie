import React from "react";
const Header = props => {
  return (
    <div
      style={{
        background: "rgb(47, 79, 79)",
        color: "#fff",
        marginTop: "0",
        padding: "5px",
        position: "fixed",
        width: "100%"
      }}>
      <ul
        style={{
          display: "flex",
          listStyle: "none",
          justifyContent: "space-between",
          flex: "flex-start",
          marginLeft: "-30px",
          marginRight: "15px"
        }}>
        <li>Now Showing</li>
        <li>Trending</li>
        <li>Voted Hot</li>
      </ul>
    </div>
  );
};

export default Header;
