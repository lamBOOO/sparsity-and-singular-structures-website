export default function Hero() {
  return (
    <div>
      <div className="px-4 py-5 my-5 text-center">
        <img className="d-block mx-auto mb-4" src="/logo.svg" alt="" width="100" height="100" />
        <img className="d-block mx-auto mb-4 img-fluid" src="/dfg_logo_schriftzug_blau_foerderung_4c.jpg" alt="" width="200" height="100" />
        <h1 className="display-5 fw-bold">Sparsity and Singular Structures</h1>
        <div className="col-lg-6 mx-auto">
          <p className="placeholder-wave">
            <container>
              <span className="placeholder col-4"></span>
              <span className="placeholder col-4 m-1"></span>
              <span className="placeholder col-2"></span>
            </container>
          </p>
          <p className="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" className="btn btn-primary btn-lg px-4 gap-3">Primary button</button>
            <button type="button" className="btn btn-outline-secondary btn-lg px-4">Secondary</button>
          </div>
        </div>
      </div>
    </div>
  )
}
