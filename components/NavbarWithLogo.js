import Link from 'next/link'

export default function NavbarWithLogo() {
  return (
    <nav className="navbar navbar-expand-md bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src="/logo_text_rwth.png" alt="" height="60" className="d-inline-block align-text-top"></img>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link aria-current="page" href="/">
                <a className="nav-link active" >Home</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/projects">
                <a className="nav-link" >Projects</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#">
                <a className="nav-link" >People</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#">
                <a className="nav-link" >Publications</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#">
                <a className="nav-link" >Contact</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
