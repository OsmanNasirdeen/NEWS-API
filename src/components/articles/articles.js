import Article from "./article";

const Articles = ({ posts }) => {
  return (
    <div className="container articles-container my-4 ">
      {/*  loader spin  */}
      <div className="loader"></div>

      <div className="row articles-container-main g-4 g-lg-1 g-md-3 ">
        {posts.map((post, index) => {
          const { url, urlToImage, publishedAt, title } = post;
          return (
            <div className="col-12 col-lg-3 col-md-6">
              <Article
                key={index}
                url={url}
                urlToImage={urlToImage}
                publishedAt={publishedAt}
                // slice the title if lengths of contents > 78
                title={
                  typeof title === "string" && title.length > 78
                    ? title.slice(0, 78)
                    : title
                }
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Articles;
