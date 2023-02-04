import axios from "axios";
import { useState, useEffect } from "react";

import Navbar from "./components/navbar/navbar";
import Articles from "./components/articles/articles";

function App() {
  const [posts, setPosts] = useState([]);

  const getSearchData = () => {
    const userInput = document.querySelector(".user-input").value;
    const inputField = document.querySelector(".user-input");
    if (!userInput) {
      inputField.classList.add("search-field-validation");
      setTimeout(() => {
        inputField.classList.remove("search-field-validation");
      }, 4000);
    } else {
      axios
        .get(`https://newsapp-242j.onrender.com/top-headlines/${userInput}`)
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
    if (target === "Home") {
      getData();
    }
    if (target !== "Sports") {
      axios
        .get(
          `https://newsapp-242j.onrender.com/top-headlines?category=${target}`
        )
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
