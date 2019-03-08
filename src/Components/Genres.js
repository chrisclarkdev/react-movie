import React from "react";

const Genres = props => {
  return (
    <React.Fragment>
      {" "}
      {props.genres.map((genre, id) => (
        <span key={id} style={{ fontSize: "0.9em" }}>
          {genre.name}{" "}
        </span>
      ))}{" "}
    </React.Fragment>
  );
};
export default Genres;
