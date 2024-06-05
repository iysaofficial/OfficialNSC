import React from "react";

const compabout = () => {
  return (
    <section id="About" className="about-section">
      <div className="wrapper">
        <div className="title text-center">
          <h3>Latar Belakang</h3>
        </div>
        <div className="content row">
          <div className="left">
            <img
              src="./assets/logo/NSC.png"
              className="img-fluid mb-2"
              alt=""
            />
          </div>
          <div className="right">
            <p>
              Saat ini, Industri 4.0 telah menyelimuti perekonomian maju dan
              berkembang di dunia dan memang demikian memaksa kita untuk
              mengubah cara kita bekerja, belajar, dan hidup. kita hidup di era
              disrupsi dan kita perlu beradaptasi jika kita mengalaminya untuk
              mencapai status negara maju.
            </p>
            <p>
              Di sinilah diadakannya acara seperti National Science Competition
              (NSC) yang diselenggarakan oleh Indonesian Young scientist
              Association (IYSA) bekerja sama dengan MAHSA University (Malaysian
              Allied Health Sciences Academy) berperan dengan menyediakan
              panggung global bagi generasi muda pikiran berbakat untuk
              memanfaatkan penemuan mereka dalam sains, inovasi, penemuan,
              teknologi, dan komersialisasi.
            </p>
            <p>
              Acara ini akan mendorong para peserta untuk berkembang ketahanan,
              kepercayaan diri, kemampuan beradaptasi, dan kolaboratif
              kecerdasan – semua keterampilan yang diperlukan dalam hal ini usia
              yang mengganggu. Keterampilan ini penting untuk membantu mereka
              bertransformasi sesuai dengan pergeseran dan tren pasar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default compabout;
