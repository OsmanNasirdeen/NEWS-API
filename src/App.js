import axios from "axios";
import { useState, useEffect } from "react";

import Navbar from "./components/navbar/navbar";
import Articles from "./components/articles/articles";
import Footer from "./components/footer/footer";

function App() {
  const [posts, setPosts] = useState([]);

  const displayLoaderSpin = (status) => {
    const loader = document.querySelector(".loader");
    const articlesContainer = document.querySelector(
      ".articles-container-main"
    );
    if (status === "block") {
      articlesContainer.classList.add("fade-in");
    } else {
      articlesContainer.classList.remove("fade-in");
    }
    loader.style.display = status;
  };

  const getSearchData = () => {
    const userInput = document.querySelector(".user-input").value;
    const inputField = document.querySelector(".user-input");
    if (!userInput) {
      inputField.classList.add("search-field-validation");
      setTimeout(() => {
        inputField.classList.remove("search-field-validation");
      }, 4000);
    } else {
      displayLoaderSpin("block");
      axios
        .get(`https://newsapp-242j.onrender.com/top-headlines/${userInput}`)
        .then((response) => {
          setPosts(response.data.articles);
          displayLoaderSpin("none");
        })
        .catch((response) => {
          console.log(response);
        });
    }
  };

  const getCategoryData = (e) => {
    displayLoaderSpin("block");
    const target = e.target.innerText;
    if (target === "Home") {
      getData();
    } else {
      axios
        .get(
          `https://newsapp-242j.onrender.com/top-headlines?category=${target}`
        )
        .then((response) => {
          setPosts(response.data.articles);
          displayLoaderSpin("none");
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
        displayLoaderSpin("none");
      })
      .catch((response) => {
        console.log(response);
      });
  };
  const getSearchTerm = (e) => {
    const target = e.target.innerText;
    displayLoaderSpin("block");
    axios
      .get(`https://newsapp-242j.onrender.com/top-headlines/${target}`)
      .then((response) => {
        setPosts(response.data.articles);
        window.scrollTo({ top: 0, behavior: "smooth" });
        displayLoaderSpin("none");
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
      <Footer getSearchTerm={getSearchTerm} />
    </div>
  );
}

export default App;
