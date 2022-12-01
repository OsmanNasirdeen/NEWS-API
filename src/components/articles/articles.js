import Article from "./article";

const Articles = ({ posts }) => {
  return (
    <div className="container articles-container my-4">
      <div className="row g-4 g-lg-1 g-md-3 ">
        {posts.length === 0 ? (
          <h2 className="text-center">"Loading... "</h2>
        ) : (
          posts.map((post, index) => {
            const { url, urlToImage, content, publishedAt, description } = post;
            return (
              <div className="col-12 col-lg-3 col-md-6">
                <Article
                  key={index}
                  url={url}
                  urlToImage={urlToImage}
                  content={content}
                  publishedAt={publishedAt}
                  description={description}
                />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Articles;
