export default function Hero() {
  return (
    <div>
      <div className="px-4 py-5 my-1 text-center">
        <img className="d-block mx-auto mb-4" src="/logo.svg" alt="" width="100" height="100" />
        {/* <img className="d-block mx-auto mb-4 img-fluid" src="/dfg_logo_schriftzug_blau_foerderung_4c.jpg" alt="" width="200" height="100" /> */}
        <h1 className="display-5 fw-bold">Sparsity and Singular Structures</h1>
        <div className="col-lg-6 mx-auto">
          <p className="">
          Despite vast gains in computing in the past decades, the deluge of data and complexity of models in current applications pose fundamental challenges that cannot be surmounted by computational power alone. Two critical fronts are (1) machine learning and signal processing with high dimensional data and (2) partial differential equations (PDEs) with singularities. Significantly expanding the frontier in these areas requires new insight into the underlying mathematical structure of the problems. While the two mentioned challenges may appear to have little in common, we will illustrate in this proposal that their analysis will benefit from closely related ideas and algorithms, in particular, from those based on sparsity: The crucial challenge is to control low complexity structures in high, potentially infinite dimensions. In a variety of relevant and carefully chosen examples, we will explore ways in which a predictor in machine learning, a signal, or the solution of a (singular) PDE can be described and efficiently computed based on a small number of parameters. The difficulty of these tasks should not be underestimated; for instance, often the relevant low complexity structure will be nonlinear. Concrete examples from the proposal include sparsity in the sense of a few non-zero coefficients in a suitable basis representation, low rank matrices and tensors, neural networks representing complicated functions with relatively few parameters, and finite element methods utilizing specially chosen, singular ansatz functions. The proposed CRC aims at a coordinated research effort on the mathematical foundations and algorithms related to sparsity and partial differential equations with singularities. The main research tasks can be summarized as follows.
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" className="btn btn-primary btn-lg px-4 gap-3">Apply now</button>
          </div>
        </div>
      </div>
    </div>
  )
}
