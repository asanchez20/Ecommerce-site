import { Link } from "react-router-dom"
function NavBar({searchText, setSearchText}){

    const updateSearchText = (e) => {
  
      setSearchText(e.target.value)
    }

    const onSearch = (e) => {
      e.preventDefault()
      searchText = (e.target.value)
    }
    return(
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Prime Products</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/saved-items">Cart</Link>
        </li>
        {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href=".." role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="..">Action</a></li>
            <li><a className="dropdown-item" href="..">Another action</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="..">Something else here</a></li>
          </ul>
        </li> */}
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={searchText} onChange={updateSearchText} />
        <button className="btn btn-outline-success" type="submit" value={searchText} onClick={onSearch}>Search</button>
      </form>
    </div>
  </div>
</nav>
        </>
    )
}

export default NavBar