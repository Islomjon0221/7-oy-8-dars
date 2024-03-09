import "./index.css"
import found from "../../assets/Без названия.png"

function Error() {
  return (<div className="err">
    <img width={900}  src={found} alt="Not Found" />
  </div>)
}

export default Error