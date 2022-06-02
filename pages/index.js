import NavbarWithLogo from '../components/NavbarWithLogo';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <div>
      <NavbarWithLogo></NavbarWithLogo>
      <Hero></Hero>



      <div className="container px-4 py-5" id="custom-cards">
        <h2 className="pb-2 border-bottom">Projects</h2>

        <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
          <div className="col">
            <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-4 shadow-lg" style={{ backgroundImage: "url('unsplash-photo-1.jpg')" }}>
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h4 className="pt-5 mt-0 mb-4">
                Gradient descent for deep neural network learning
                </h4>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="me-auto">
                    <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32" className="rounded-circle border border-white" />
                  </li>
                  <li className="d-flex align-items-center me-3">
                    <small>Earth</small>
                  </li>
                  <li className="d-flex align-items-center">
                    <small>3d</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-4 shadow-lg" style={{ backgroundImage: "url('unsplash-photo-2.jpg')" }}>
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Much longer title that wraps to multiple lines</h2>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="me-auto">
                    <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32" className="rounded-circle border border-white" />
                  </li>
                  <li className="d-flex align-items-center me-3">
                    <small>Pakistan</small>
                  </li>
                  <li className="d-flex align-items-center">
                    <small>4d</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-4 shadow-lg" style={{ backgroundImage: "url('unsplash-photo-3.jpg')" }}>
              <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Another longer title belongs here</h2>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="me-auto">
                    <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32" className="rounded-circle border border-white" />
                  </li>
                  <li className="d-flex align-items-center me-3">
                    <small>California</small>
                  </li>
                  <li className="d-flex align-items-center">
                    <small>5d</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>




    </div>
  )
}
