import Image from "next/image";

import Footer from "@/components/home-page/home-10/Footer";
import Header from "@/components/home-page/home-10/Header";
import Block2 from "@/components/services/Block2";
import Services from "@/components/home-page/home-10/Services";
import Faq4 from "@/components/faqs/Faq4";
import Testimonial from "@/components/services/Testimonial";
import CallToActions from "@/components/services/CallToActions";
export const metadata = {
  title: "Service V4 || Jano - Creative Multipurpose React NextJS Template",
};
const ServiceV4 = () => {
  return (
    <>
      <Header />
      <div className="inner-banner-three text-center p-30">
        <div
          className="bg-wrapper text-center"
          style={{ backgroundImage: "url(/images/assets/bg-17.svg)" }}
        >
          <div className="container">
            <div className="title-style-five">
              <h2 className="main-title tx-dark fw-bold">Hizmetlerimiz</h2>
            </div>
            <p className="fs-20 mt-30 lg-mt-20">
              Alanında uzman ekibimizle, güvenilir ve kaliteli çözümler sunuyoruz.
            </p>
          </div>
          {/* End container */}
        </div>
        {/* /.bg-wrapper */}
      </div>
       <div className="fancy-feature-one pt-170 lg-pt-140">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6" data-aos="fade-right">
              <div className="title-style-one text-center text-lg-start">
                <h2 className="main-title fw-bold tx-dark m0">
                 <span>Kaliteli</span> Hizmetler Sağlayın.
                </h2>
              </div>
              {/* /.title-style-one */}
            </div>
            <div className="col-lg-5 ms-auto" data-aos="fade-left">
              <p className="text-lg text-center text-lg-start md-pt-30 m0">
                Pharmalect beşeri tıbbi ürün ve tıbbi cihaz ruhsatlandırma süreçlerinde mükemmeliyet ve müşteri odaklı hizmet sunmaktır.
              </p>
            </div>
          </div>
        </div>
        {/* End .row */}

        <div className="inner-content pt-110 lg-pt-60 md-pt-30">
          <div className="row gx-xxl-5">
            <Services />
          </div>
        </div>
        {/* /.inner-content */}
      </div>
      <div className="footer-style-one theme-basic-footer position-relative">
        <div className="shapes shape-one" />
        <div className="container">
          <div className="inner-wrapper">
            <Footer />
            <div className="bottom-footer">
              <p className="copyright text-center m0">
                © {new Date().getFullYear()}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://themeforest.net/user/ib-themes"
                >
                  ib-themes
                </a>
              </p>
            </div>
          </div>
          {/* /.inner-wrapper */}
        </div>
      </div>
      {/* /.footer-style-one */}
    </>
  );
};

export default ServiceV4;
