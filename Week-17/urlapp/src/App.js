import "./App.css";
import { useState } from "react";

function App() {
  const [url, setUrl] = useState();
  const [data, setData] = useState("");
  const fetchShortenUrl = (url) => {
    fetch(`https://api.shrtco.de/v2/shorten?url=${url}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
      });
  };

  // console.log();
  return (
    <div className="App">
      <input type="text" onChange={(e) => setUrl(() => e.target.value)} />
      <button className="short" onClick={() => fetchShortenUrl(url)}>
        Shorten
      </button>
      <br />
      {data && <p>{data.result.full_short_link}</p>}
      {/* <p>{url}</p> */}
    </div>
  );
}

export default App;
