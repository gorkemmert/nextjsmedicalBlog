import HeroSubscribe from "./HeroSubscribe";
import Illustration from "./Illustration";

const Hero = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-7">
          <h1 className="hero-heading fw-bold tx-dark">
            Başarınıza Ulaşmanız İçin <br />
            <span className="position-relative d-inline-block"> Buradayız.</span>
          </h1>
          <p className="text-lg mb-60 pt-50 pe-xl-5 lg-pt-30 lg-mb-40">
            Şirketimiz, en yetenekli ve tecrübeli profesyonellerle kaliteli hizmet sunar.
          </p>

          {/* <HeroSubscribe /> */}

          <div className="pr-info fw-500 fs-20 tx-dark mt-35">
            Dünya çapında <br />
            <span className="fw-bold text-decoration-underline">
            100 ' den fazla 
            </span>
            müşteri.
          </div>
        </div>
      </div>

      <Illustration />
      {/* /.illustration-holder */}
    </div>
  );
};

export default Hero;
