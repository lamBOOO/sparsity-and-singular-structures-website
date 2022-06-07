import Link from 'next/link'
import { useRouter } from "next/router";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "People", href: "/people" },
  { name: "Publications", href: "/publications" },
  { name: "Contact", href: "/contact" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavbarWithLogo() {
  const router = useRouter();

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none" href="#">
          <img src="/logo_text_rwth.png" alt="" height="60" className="d-inline-block align-text-top"></img>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          {navigation.map((item) => (
            <li className="nav-item">
              <Link aria-current="page" href={item.href} key={item.name}>
                <a className={classNames("nav-link", router.route === item.href ? "active" : "")} >{item.name}</a>
              </Link>
            </li>
          ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}
