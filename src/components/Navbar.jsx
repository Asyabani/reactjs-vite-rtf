function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark py-4">
      <div className="container border-bottom border-secondary pb-4">
        <a className="navbar-brand d-lg-none" href="#">
          <img src="./public/assets/img/EG.svg" className="mx-2 " alt="" />
          Exempli Gratia
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="row w-100 text-center">
            <div className="col-4 d-none d-lg-flex">
              <a className="navbar-brand " href="#">
                <img src="./public/assets/img/EG.svg" className="mx-2 " alt="" />
                Exempli Gratia
              </a>
            </div>
            <div className="col-12 col-md-4 col-xl-4 d-flex justify-content-center">
              <ul className="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#home">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#services">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#why">
                    Why us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#our">
                    Our Work
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#faq">
                    FAQs
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-4 col-xl-4 d-none d-md-block text-end">
              <button className="btn btn-secondary rounded-5 px-4">Contact Us</button>
            </div>
            <div className="col-md-4 col-xl-4 d-block d-md-none ">
              <button className="btn btn-secondary rounded-5 px-4">Contact Us</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
