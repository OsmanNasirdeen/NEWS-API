import axios from "axios";
import { useState, useEffect } from "react";

import Navbar from "./components/navbar/navbar";
import Articles from "./components/articles/articles";

function App() {
  const [posts, setPosts] = useState([]);

  const getSearchData = () => {
    const userInput = document.querySelector(".user-input").value;
    if (!userInput) {
      alert("please input text to be search");
    } else {
      axios
        .get(`http://localhost:7000/top-headlines/${userInput}`)
        .then((response) => {
          setPosts(response.data.articles);
        })
        .catch((response) => {
          console.log(response);
        });
    }
  };

  const getCategoryData = (e) => {
    const target = e.target.innerText;
    if (target !== "Sports") {
      axios
        .get(`http://localhost:7000/top-headlines?category=${target}`)
        .then((response) => {
          setPosts(response.data.articles);
        })
        .catch((response) => {
          console.log(response);
        });
    }
  };

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
      <Navbar getCategoryData={getCategoryData} getSearchData={getSearchData} />
      <Articles posts={posts} />
    </div>
  );
}

export default App;
