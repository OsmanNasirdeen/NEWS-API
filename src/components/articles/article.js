// import cardPic from "./demo-picture.jpg";
const Article = ({ url, urlToImage, content, publishedAt, description }) => {
  return (
    <div
      className="article-container
    container my-1">
      <div className="card d-flex flex-lg-column">
        <img
          className="card-img-top"
          src={urlToImage}
          alt="post_image"
          width="300"
          height="200"
        />
        <div className="card-body">
          <p className="card-text">{`${description.slice(0, 79)}...`}</p>
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
