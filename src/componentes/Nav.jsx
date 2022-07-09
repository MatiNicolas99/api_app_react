import { SearchComponents } from "./SearchComponents"
export const Nav = ({texto, setTexto}) => {

  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand text-uppercase" href="">Rick and Morty App</a>
        <SearchComponents texto={texto} setTexto={setTexto} />
      </div>
    </nav>
  )
}




