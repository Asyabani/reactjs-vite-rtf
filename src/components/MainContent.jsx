import MyScene from "./three";

function MainContent() {
  return (
    <>
      <div className="bg-home">
        <div className="container text-light border-bottom border-secondary pb-5">
          <div className="row text-center">
            <div className="col">
              <h1>Bringing Ideas to Life</h1>
              <h1>One Dimension at a Time</h1>
              <p className="my-4 pb-3">Digital Agency Based on Tasikmalaya, Indonesia</p>
              <MyScene />
              {/* <img src="./public/assets/img/eg.png" className="my-5" alt="" /> */}
              <p className="text-secondary my-0 my-4 py-4 w-75 mx-auto ">
                Exempli Gratia: We are the architects of your dreams, transforming vision into reality with elegance and expertise,setting industry standars and exceeding client expectations!
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Our service */}
      <div id="services" className="container text-light pb-5 mt-5">
        <div className="row py-3 mb-5 ">
          <div className="col-2">
            <h5>Our Services</h5>
          </div>
          <div className="col-6">
            <img src="./public/assets/img/Vector 21.png" className="w-100 mb-2 mb-md-0" alt="" />
          </div>
          <div className="col-4 ">
            <h5>Turning Bits and Bytes into Business.</h5>
          </div>
        </div>
        <div className="row text-center g-4 py-md-3">
          <div className=" col-lg-2"></div>
          <div className="col-12 col-md-6 col-lg-4">
            <button className="btn btn-outline-light rounded-5 px-5 high-z-index">Security Services</button>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <button className="btn btn-outline-light rounded-5 px-5">Branding Design</button>
          </div>
        </div>
        <div className="row text-center g-4 py-md-3">
          <div className="col-lg-3"></div>
          <div className="col-12 col-md-6 col-lg-4">
            <button className="btn btn-outline-light rounded-5 px-5">UI/UX Design</button>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <button className="btn btn-outline-light rounded-5 px-5">App Development</button>
          </div>
        </div>
        <div className="row text-center g-4 py-md-3">
          <div className="col-lg-1"></div>
          <div className="col-12 col-md-6 col-lg-4">
            <button className="btn btn-outline-light rounded-5 px-5">Web Development </button>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <button className="btn btn-outline-light rounded-5 px-5">Project Management</button>
          </div>
        </div>
        <div className="row text-center g-4 py-md-3">
          <div className="col-lg-3"></div>
          <div className="col-12 col-md-6 col-lg-4">
            <button className="btn btn-outline-light rounded-5 px-5">Digital Marketing </button>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <button className="btn btn-outline-light rounded-5 px-5">Business Collaboration</button>
          </div>
          <p className="text-secondary text-center mt-5 pt-5 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate nulla cupiditate error repellat numquam odio laboriosam nostrum, qui fugit culpa dolorem? Facilis, ratione molestias quidem vero perspiciatis velit amet
            distinctio aspernatur odit! Cupiditate, dolores quidem.
          </p>
        </div>
        <div className="row d-none d-md-flex justify-content-center ">
          <div className="text-center col-lg-3">
            <img src="./public/assets/img/item1.svg" className="item-our position-relative" height={400} alt="" />
            <img src="./public/assets/img/bg-our.png" className="bg-our position-relative" height={400} alt="" />
          </div>
        </div>
      </div>
      {/* why us */}
      <div id="why" className="container text-light pb-5">
        <div className="row">
          <div className="col-2 col-md-2 col-lg-1 ">
            <h5>Why Us</h5>
          </div>
          <div className="col-6 col-md-6 col-lg-8 ">
            <img src="./public/assets/img/Vector 21.png" className="w-100 mb-2 mb-md-0" alt="" />
          </div>
          <div className="col-4 col-md-4 col-lg-3 ">
            <h5>
              31 Words <span className="ms-4">189 Characters</span>
            </h5>
          </div>
          <div className="col-12 col-2 mt-md-5 pt-5 mb-3">
            <h1 className="d-inline why-text">We understand</h1>
            <p className=" d-inline ms-1 ms-md-2 why-text">that the digital landscape is ever-evolving, and your success hinges on staying ahead of the curve __</p>
          </div>
          <div className="col-3 col-md-3">
            <img src="./public/assets/img/item.png" className="w-100" alt="" />
          </div>
          <div className="col-9 col-md-7 my-auto">
            <h1 className="d-inline why-text">We are dynamic team </h1>
            <p className="d-inline ms-1 ms-md-2 why-text">of experts committed to taking your brand to new heights. __</p>
          </div>
          <div className="col-2 my-auto">
            <img src="./public/assets/img/item2.png" className="w-100" alt="" />
          </div>
        </div>
      </div>
      {/* our work */}
      <div id="our" className="container-fluid bg-white py-5">
        <div className="container">
          <div className="row">
            <div className="col-2 col-md-2">
              <h5>Our Work</h5>
            </div>

            <div className="col-5 col-md-6">
              <img src="./public/assets/img/Vector 21.png" className="w-100 mb-2 mb-md-0" alt="" />
            </div>
            <div className="col-5 col-md-4 ">
              <h5>Where Vision Meets Innovation</h5>
            </div>
          </div>
          <div className="row gap-4 justify-content-between py-5">
            <div className="col-md-5">
              <img src="./public/assets/img/1.png" className="w-100" alt="" />
              <p className="mt-3 mb-0">UI/UX Design</p>
              <h4>Landing Page 3D Design Studio</h4>
            </div>
            <div className="col-md-5">
              <img src="./public/assets/img/2.png" className="w-100" alt="" />
              <p className="mt-3 mb-0">Branding Design</p>
              <h4>Branding For Design Studio</h4>
            </div>
            <div className="col-md-5">
              <img src="./public/assets/img/3.png" className="w-100" alt="" />
              <p className="mt-3 mb-0">Business Collaboration</p>
              <h4>Hidaze x Ventour Travel</h4>
            </div>
            <div className="col-md-5">
              <img src="./public/assets/img/4.png" className="w-100" alt="" />
              <p className="mt-3 mb-0">Project Management</p>
              <h4>Project POS System Restaurant</h4>
            </div>
            <div className="col-4 col-md-4">
              <h5>Discover Our Portfolio here</h5>
            </div>
            <div className="col-4 col-md-5">
              <img src="./public/assets/img/Vector 21.png" className="w-100" alt="" />
            </div>
            <div className="col-2 col-md-2 ">
              <p>Dribble</p>
            </div>
          </div>
        </div>
      </div>
      {/* FAQ */}
      <div id="faq" className="container py-5 text-light text-center">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <img src="./public/assets/img/eg-content.svg" className="" height={40} alt="" />
            <h2 className="my-4">Frequently Asked Questions</h2>
            <p className="text-secondary pb-5">we've compiled a list of frequently asked questions to provide you with clarity and insight into our agency's processes, services, and capabilities.</p>
            <button className="btn btn-outline-light rounded-5 py-2 my-2 w-100 fw-semibold">What services does your digital agency offer?</button>
            <button className="btn btn-outline-light rounded-5 py-2 my-2 w-100 fw-semibold">How do I request a quote or estimate for my project?</button>
            <button className="btn btn-outline-light rounded-5 py-2 my-2 w-100 fw-semibold">How do you handle project communication and updates?</button>
            <p className="text-secondary py-4">
              We maintain open communication throughout the project. We'll designate a project manager who will keep you updated on project progress, and we can use various communication tools as per your preference.
            </p>
            <button className="btn btn-outline-light rounded-5 py-2 my-2 w-100 fw-semibold"> Do you offer ongoing maintenance and support for websites and applications?</button>
            <button className="btn btn-outline-light rounded-5 py-2 my-2 w-100 fw-semibold"> How can I get started with your agency for my project?</button>
          </div>
        </div>
      </div>
      <div className="container-fluid text-light">
        <div className="row d-flex justify-content-center position-relative my-5 ">
          <img src="./public/assets/img/bg.png " className="w-100 h-100 position-absolute px-0" alt="" />
          <div className="col-12 col-md-6 my-5 text-center position-relative ">
            <h4>Let’s bring your ideas to life</h4>
            <button className="btn btn-light mx-5 rounded-5 px-3 my-3 fw-semibold"> Talk With Us</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default MainContent;
