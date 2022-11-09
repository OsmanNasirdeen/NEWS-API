import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Article from "./article";

const Articles = () => {
  let currentDate = new Date().toJSON().slice(0, 10);

  const endPoint = `https://newsapi.org/v2/everything?q=real madrid&from=${currentDate}&sortBy=popularity&apiKey=${process.env.REACT_APP_key}`;
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get(endPoint)
      .then((response) => {
        setPosts(response.data.articles);
      })
      .catch((response) => {
        console.log(response);
      });
  }, [endPoint]);

  return (
    <div className="container my-4">
      <div className="row g-4">
        {posts.map((post) => {
          const { url, urlToImage, content, publishedAt, description } = post;
          return (
            <div className="col col-lg-3">
              <Article
                url={url}
                urlToImage={urlToImage}
                content={content}
                publishedAt={publishedAt}
                description={description}
                key={url}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Articles;

{
  /* <div class="row">
  <div class="col col-lg-3">
    <Article />
  </div>
  <div class="col col-lg-3">
    <Article />
  </div>
  <div class="col col-lg-3">
    <Article />
  </div>
  <div class="col col-lg-3">
    <Article />
  </div>
  <div class="col col-lg-3">
    <Article />
  </div>
  <div class="col col-lg-3">
    <Article />
  </div>
</div> */
}
