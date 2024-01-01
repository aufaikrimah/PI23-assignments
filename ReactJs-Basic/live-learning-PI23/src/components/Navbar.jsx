function Navbar() {

  return (
    <>
      <nav className="navbar">
        <div className="logo">Logo</div>
        <ul className="nav-list">
          <li className="nav-item">
            <a href="/">Home</a>
          </li>
          <li className="nav-item">
            <a href="/about">About</a>
          </li>
          {/* Tambahkan lebih banyak item navbar sesuai kebutuhan */}
        </ul>
      </nav>
    </>
  )
}

export default Navbar