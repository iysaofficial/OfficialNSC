import React from "react";

const hero = () => {
  return (
    <section className="mainhero-section">
      <div className="wrapper row">
        <div className="right col-lg-6">
          <h2>
            Apakah Anda seorang mahasiswa yang ingin menguji kemampuan Anda di
            tingkat nasional? Siap untuk bersaing dalam National Science
            Competition (NSC)?
          </h2>
          <p>
            Ayo ikuti National Science Competition (NSC) secara daring! Jangan
            lewatkan kesempatan ini untuk menunjukkan penelitian dan
            keterampilan Anda di tingkat nasional.
          </p>
          <a
            href="/"
            className="btn btn-action"
          >
            Segera Hadir 2025
          </a>
          <a
            href="https://drive.google.com/file/d/1P8V0wBCkOOfHFnbs28K_COSaAR2emIf3/view?usp=sharing"
            target="_blank"
            className="btn btn-action ms-1 ms-lg-3"
          >
            Buku Panduan
          </a>
        </div>
        <div className="left col-lg-6">
          <img src="./assets/img/bgkuning.png" alt="" className="img-fluid" />
        </div>
      </div>
    </section>
  );
};

export default hero;
