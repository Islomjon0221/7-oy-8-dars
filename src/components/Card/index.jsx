import "./index.css"
import movie from "../../assets/movies.svg"
import mark from "../../assets/mark.svg"
import thumb from "../../assets/thumb.png"

function Card() {
  return (
    <div className="card-wrapper">
        <div className="img">
        <img className="thumb" src={thumb} alt="mountain" />
            <div className="book">
            <img src={mark} alt="bookmark" />
            </div>
        </div>
        <p className="movie-info">
            <span>2019</span>
            <span>&#x2022;</span>
            <span className="movie-icon">
                <img src={movie} alt="movie icon" />
                <span>Movie</span></span>
            <span>&#x2022;</span>
            <span>PG</span>
        </p>

        <h3 className="movie-name">The Great Lands</h3>
    </div>
  )
}

export default Card