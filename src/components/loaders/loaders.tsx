import Logo from "../../../public/Shopopia.png"
import './style.scss'

export function Loader() {
  return (
    <div className="loader">
        <img src={Logo} alt="loading..." />
    </div>
  )
}
