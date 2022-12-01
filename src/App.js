import axios from "axios";
import { useState, useEffect } from "react";

import Navbar from "./components/navbar/navbar";
import Articles from "./components/articles/articles";

function App() {
  let currentDate = new Date().toJSON().slice(0, 10);
  const [posts, setPosts] = useState([]);

  const getData = () => {
    axios
      .get("https://newsapp-242j.onrender.com/")
      .then((response) => {
        setPosts(response.data.articles);
      })
      .catch((response) => {
        console.log(response);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Articles posts={posts} />
    </div>
  );
}

export default App;
