import "./index.css"
import Card from "../../components/Card"
import { useEffect } from "react"
import { useState } from "react"

function Home() {
  const [movie, setMovie] = useState()
  const apiKey = import.meta.env.VITE_MOVIE_KE
  const apiUrl = import.meta.env.VITE_MOVIE_API

  useEffect(() => {
    fetch(`${apiUrl}/1.4/movie?type=top250`, {
      method: "GET",
      headers: {
        'X-API-KEY': apiKey
      }
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setMovie(data)
    })
    .catch(error => {
      console.error("Error fetching data:", error);
      // Handle the error here, e.g., display an error message to the user.
    })
  }, [])

  return (
    <div className="home">
      <div className="recomended">
        <h3>Recommended for you</h3>
        <div className="home-movie-wrapper">
          {movie?.items?.map((item) => (  // Assuming data structure
            <Card key={item.id} data={item} />  // Pass data to Card component
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home