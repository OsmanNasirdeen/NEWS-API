const Article = ({ url, urlToImage, title, publishedAt }) => {
  return (
    <div
      className="container article-container
     my-1">
      <div className="card container-card d-flex flex-lg-column">
        <div className="card-image-container">
          <img
            className="card-img-top img-fluid"
            src={urlToImage}
            alt="post_image"
            width="300"
            height="200"
          />
        </div>
        <div className="card-body">
          <p className="card-text">{title} </p>
          <a href={url} className="btn btn-primary mb-3 mb-lg-1">
            ReadMore
          </a>
          <h5 className="card-date">{publishedAt}</h5>
        </div>
      </div>
    </div>
  );
};

export default Article;
