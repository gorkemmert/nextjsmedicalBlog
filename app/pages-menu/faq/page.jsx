import DefaulHeader from "@/components/header/DefaulHeader";
import DefaultFooter from "@/components/footer/DefaultFooter";
import FaqAccordion from "@/components/faqs/FaqAccordion";
import Header from "@/components/home-page/home-10/Header";
import Footer from "@/components/home-page/home-10/Footer";
import Link from "next/link";
export const metadata = {
  title: "Faq's || Jano - Creative Multipurpose React NextJS Template",
};
const Faq = () => {
  return (
    <>
      {/* <!-- 
      =============================================
      Theme Default Menu
      ============================================== 	
      --> */}
      <Header />

      {/* 
			=============================================
				Feature Section Fifty One
			============================================== 
			*/}
      <div className="fancy-feature-fiftyOne position-relative mt-200">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 text-center m-auto" data-aos="fade-up">
              <div className="title-style-five">
                <div className="sc-title-two fst-italic position-relative d-inline-block">
                  SSS
                </div>
                <h2 className="main-title fw-500 tx-dark">
                  Sorular &amp; Cevaplar
                </h2>
              </div>
            </div>
          </div>
        </div>
        {/* /.container */}
      </div>
      {/* /.fancy-feature-fiftyOne */}

      {/* 
			=============================================
				Feature Section Thirty Three
			============================================== 
			*/}
      <div className="fancy-feature-thirtyThree mt-100 lg-mt-80">
        <div className="container">
          <div className="border-bottom pb-100 lg-pb-70">
            <div className="bg-wrapper position-relative" data-aos="fade-up">
              <FaqAccordion />
              <img
                src="/images/shape/shape_133.svg"
                alt="shape"
                className="lazy-img shapes shape-one"
              />
            </div>
            {/* /.bg-wrapper */}

            <div className="text-center  mt-80 lg-mt-50" data-aos="fade-up">
              <h3 className="fw-bold tx-dark mb-30">Cevabınızı alamadınız mı?</h3>
              <Link href="/contact" className="btn-two fw-500 tran3s">
                İletişime Geç
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* /.fancy-feature-thirtyThree */}

      {/* 
        =============================================
        Contact Section One
        ============================================== 
        */}
      <div className="footer-style-one theme-basic-footer position-relative">
        <div className="shapes shape-one" />
        <div className="container">
          <div className="inner-wrapper">
            <Footer />
            {/* <div className="bottom-footer">
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
            </div> */}
          </div>
          {/* /.inner-wrapper */}
        </div>
      </div>
    </>
  );
};

export default Faq;
