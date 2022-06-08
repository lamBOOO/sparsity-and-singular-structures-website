export default function Hero() {
  return (
    <div>
      <div className="px-4 py-5 my-1 text-center">
        <img className="d-block mx-auto mb-4" src="/logo.svg" alt="" width="100" height="100" />
        {/* <img className="d-block mx-auto mb-4 img-fluid" src="/dfg_logo_schriftzug_blau_foerderung_4c.jpg" alt="" width="200" height="100" /> */}
        <h1 className="display-5 fw-bold">Sparsity and Singular Structures</h1>
        <div className="col-lg-6 mx-auto">
          <p className="fs-5">
          Despite vast gains in computing in the past decades, the deluge of data and complexity of models in current applications pose fundamental challenges that cannot be surmounted by computational power alone. Two critical fronts are (1) machine learning and signal processing with high dimensional data and (2) partial differential equations (PDEs) with singularities.
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" className="btn btn-primary btn-lg px-4 gap-3">Apply now</button>
          </div>
        </div>
      </div>
    </div>
  )
}
