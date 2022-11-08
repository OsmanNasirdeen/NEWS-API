import cardPic from "./demo-picture.jpg";
const Article = ({ cardText }) => {
  return (
    <div
      className="atricle-container
    container my-4">
      <div className="card d-flex flex-lg-column">
        <img
          className="card-img-top"
          src="https://picsum.photos/300/200"
          alt="Card image cap"
        />
        <div className="card-body">
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <h5 className="card-title">Card title</h5>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

export default Article;
