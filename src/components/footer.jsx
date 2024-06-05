import React from "react";

const footer = () => {
  return (
    <section className="footer-section">
      <footer
        className="text-center text-lg-start text-white"
        // style={{ backgroundColor: "#929fba" }}
      >
        <div className="container p-4 pb-0">
          <section>
            <div className="row">
              <div className="content1 col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold"></h6>
                <img src="./assets/logo/NSC.png" className="img-fluid" alt="" />
              </div>
              <hr className="w-100 clearfix d-md-none" />
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">LINK</h6>
                <p>
                  <a className="" href="#!">
                    Tentang Kami
                  </a>
                </p>
                <p>
                  <a className="" href="/faq">
                    FAQ
                  </a>
                </p>
                <p>
                  <a className="" href="/contact">
                    Kontak
                  </a>
                </p>
              </div>

              <hr className="w-100 clearfix d-md-none" />

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Kontak
                </h6>
                <p>
                  <a href="https://goo.gl/maps/9x18coXGCmSscKec6">
                    <i className="fas fa-home mr-3"></i> Jl. Kemang, Pasir
                    Putih, Kecamatan. Sawangan, Kota Depok, Jawa Barat 16519
                  </a>
                </p>
                <p>
                  <a href="mailto:youngscientist.iysa@gmail.com">
                    <i className="fas fa-envelope mr-3"></i>{" "}
                    youngscientist.iysa@gmail.com
                  </a>
                </p>
                <p>
                  <a href="https://wa.me/+6281770914129">
                    <i className="fas fa-phone mr-3"></i> +62 817 7091 4129
                  </a>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Ikuti Kami
                </h6>

                {/* <!-- Facebook --> */}
                <a
                  className="btn btn-primary btn-floating m-1"
                  style={{ backgroundColor: "#3b5998" }}
                  href="https://www.facebook.com/profile.php?id=100063979907207"
                  role="button"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                {/* <!-- Google --> */}
                <a
                  className="btn btn-primary btn-floating m-1"
                  style={{ backgroundColor: "#000" }}
                  href="https://www.tiktok.com/@iysa.official"
                  role="button"
                >
                  <i className="fab fa-tiktok"></i>
                </a>
                {/* <!-- Instagram --> */}
                <a
                  className="btn btn-primary btn-floating m-1"
                  style={{ backgroundColor: "#ac2bac" }}
                  href="https://www.instagram.com/iysa_official/?hl=id"
                  role="button"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                {/* <!-- Linkedin --> */}
                <a
                  className="btn btn-primary btn-floating m-1"
                  style={{ backgroundColor: "#0082ca" }}
                  href="https://www.linkedin.com/company/indonesian-young-scientist-association-iysa"
                  role="button"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
                {/* <!-- Youtube --> */}
                <a
                  className="btn btn-primary btn-floating m-1"
                  style={{ backgroundColor: "red" }}
                  href="https://www.youtube.com/@IYSAOfficial"
                  role="button"
                >
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </section>
        </div>

        {/* <!-- Copyright --> */}
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2024 Copyright:
          <a className="text-white" href="">
            {" "}
            IYSA IT
          </a>
        </div>
      </footer>
    </section>
  );
};
export default footer;
