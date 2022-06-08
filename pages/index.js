import NavbarWithLogo from '../components/NavbarWithLogo';
import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <NavbarWithLogo></NavbarWithLogo>

      <Hero></Hero>
      <div className="container" id="custom-cards">
        <h2 className="pb-2 border-bottom" id="projects">Projects</h2>

        <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">

          <ProjectCard></ProjectCard>

          <div className="col">
            <div className="card card-cover h-100 overflow-hidden bg-primary bg-gradient rounded-4 shadow-lg">
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h2 className="pt-5 mt-5 mb-4 display-9 lh-1 fw-bold">
                  Gradient descent for deep neural network learning
                </h2>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="d-flex me-auto align-items-center">
                    <p className="lead fw-bold">
                      <i className="bi-hash" style={{ "color": "white" }}></i>
                      A1
                    </p>
                  </li>
                  <li className="d-flex align-items-center me-3">
                    <small>Rauhut</small>
                  </li>
                  <li className="d-flex align-items-center">
                    <small>Holger</small>
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
