import React from "react";
import "./App.css";
import axios from "axios";
import NowShowing from "./Components/NowShowing";
import Header from "./Components/Header";
const URL =
  // "https://api.themoviedb.org/3/trending/movie/day?api_key=a876e7500012d962d40cf6ba7bd19019";
  // "https://api.themoviedb.org/3/search/movie?api_key=a876e7500012d962d40cf6ba7bd19019&language=en-US&query=superman&page=1&include_adult=false";
  "https://api.themoviedb.org/3/movie/now_playing?api_key=a876e7500012d962d40cf6ba7bd19019&language=en-US&page=1&region=gb";
class App extends React.Component {
  state = {
    loading: true,
    trends: null,
    movieInfo: []
  };

  componentDidMount() {
    axios.get(URL).then(res => {
      this.setState({ trends: res.data.results, loading: false });
    });
  }

  render() {
    return (
      <div
        style={{
          margin: "auto",
          maxWidth: "414px",
          width: "100%",
          padding: "0",
          height: "100vh"
        }}>
        <Header />

        {this.state.loading || !this.state.trends ? (
          <div
            style={{
              textAlign: "center",
              height: "100%",
              fontSize: "4em",
              color: "#ccc",
              background: "rgb(47, 79, 79)",
              maxWidth: "414px",
              margin: "auto"
              // marginTop: "200px"
            }}>
            Loading...
          </div>
        ) : (
          <NowShowing trends={this.state.trends} />
        )}
      </div>
    );
  }
}

export default App;
