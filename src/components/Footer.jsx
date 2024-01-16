function Footer() {
  return (
    <footer className="text-light py-2 position-relative overflow-hidden ">
      <div className="container ">
        <div className="row g-3">
          <div className="col-md-5">
            <img src="./public/assets/img/EG.svg" className="mx-2" alt="" />
            Exempli Gratia
          </div>
          <div className="col-md-2 col-6">
            <p className="text-secondary">Menus</p>
            <p>Services</p>
            <p>Why Us</p>
            <p>Our Work</p>
            <p>FAQs</p>
          </div>
          <div className="col-md-2 col-6">
            <p className="text-secondary">Other</p>
            <p>Collaboration</p>
            <p>Careers</p>
          </div>
          <div className="col-md-2 col-6">
            <p className="text-secondary">Social Media</p>
            <p>Instagram</p>
            <p>Medium</p>
            <p>Dribble</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-10">
            <div className="d-none d-md-flex justify-content-between">
              <p className="text-secondary">Digital Agency Based on Tasikmalaya, Indonesia </p>
              <p className="text-secondary">© 2023 Exempli Gratia</p>
            </div>
            <div className="d-md-none d-block justify-content-between">
              <p className="text-secondary">Digital Agency Based on Tasikmalaya, Indonesia </p>
              <p className="text-secondary">© 2023 Exempli Gratia</p>
            </div>
          </div>
        </div>
      </div>
      <img src="./public/assets/img/eg.png" className="eg-footer " height={200} alt="EG" />
    </footer>
  );
}
export default Footer;
