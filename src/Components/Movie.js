import React from "react";
import axios from "axios";
import Actors from "./Actors";
import Crew from "./Crew";
import Genres from "./Genres";
const img_base = "https://image.tmdb.org/t/p/";
const img_size = "w400/";

class Movie extends React.Component {
  state = {
    activeMovie: [],
    actors: [],
    info: [],
    crew: [],
    genres: []
  };
  componentDidMount() {
    const title = this.props.location.state.movieData;
    const vote = this.props.location.state.movieData.vote_average;
    const movieInfo = `https://api.themoviedb.org/3/movie/${
      title.id
    }?api_key=a876e7500012d962d40cf6ba7bd19019&language=en-US&append_to_response=video`;
    const actorURL = `https://api.themoviedb.org/3/movie/${
      title.id
    }/credits?api_key=a876e7500012d962d40cf6ba7bd19019`;

    axios
      .all([axios.get(actorURL), axios.get(movieInfo)])

      .then(
        axios.spread((res, info) => {
          this.setState({
            actors: res.data.cast,
            crew: res.data.crew,
            activeMovie: title,
            info: info.data,
            genres: info.data.genres,
            result: res.data,
            release_date: this.props.location.state.movieData.release_date.slice(
              0,
              4
            ),
            vote: vote
          });
        })
      );
  }
  render() {
    const movieInfo = this.state.info;
    const movie = this.state.activeMovie;
    const { runtime } = this.state.info;
    const imgUrl = `${img_base}${img_size}${movieInfo.backdrop_path}`;
    return (
      <div
        className='page-container'
        style={{
          maxWidth: "414px",
          width: "100%",
          margin: "auto",
          border: "1px solid #efefef"
        }}>
        <div style={{ display: "flex", flexDirection: "column", margin: "0" }}>
          <div
            style={{
              width: "100%",
              marginTop: "-20px",
              height: "18px",
              background: "red"
            }}
          />
          {/* Background img and style  */}
          <img src={imgUrl} alt={movie.name || movie.title} />
          {/* Movie poster img and relevent styles  */}
          <div>
            <img
              style={{
                position: "absolute",
                top: "170px",
                width: "120px",
                border: "3px solid #fff",

                marginLeft: "5px"
              }}
              alt={movie.name || movie.title}
              src={`${img_base}${img_size}${movie.poster_path}`}
            />
          </div>
          <div
            style={{
              background: "#2f4f4f",
              padding: "0px",
              color: "#fff"
            }}>
            <p style={{ marginLeft: "140px" }}>
              {this.state.release_date} {runtime} Mins {this.state.vote}
            </p>
            <h4
              style={{
                fontSize: "1.4em",
                marginLeft: "140px",
                marginTop: "-10px"
              }}>
              {movie.title || movie.name}
            </h4>
            {/* Genres this is still hard coded  */}
            <p style={{ marginLeft: "140px", marginTop: "-20px" }}>
              <Genres genres={this.state.genres} />
            </p>
          </div>
        </div>
        <div
          style={{
            background: "rgba(47, 79, 79, 0.8)",
            borderTop: "2px solid #444",
            marginTop: "0",

            padding: "5px",
            color: "#fff"
          }}>
          <p>{this.state.info.overview}</p>
          <Crew crew={this.state.crew} />
        </div>
        {/* Actors component  */}
        <div className='actor-container'>
          <Actors actors={this.state.actors} />
        </div>
      </div>
    );
  }
}
export default Movie;
