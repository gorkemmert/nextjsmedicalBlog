import Image from "next/image";

import Footer from "@/components/home-page/home-10/Footer";
import Header from "@/components/home-page/home-10/Header";
import Testimonial from "@/components/home-page/home-10/Testimonial";
import CallToActions from "@/components/services/CallToActions";
import Team5 from "@/components/team/Team5";
import Block from "@/components/about/Block";
import Counter2 from "@/components/about/Counter2";
import AboutCeo from "@/components/about/AboutCeo";
import OurAim from "@/components/home-page/home-10/OurAim";
import Counter from "@/components/about/Counter";
import Team2 from "@/components/team/Team2";
import Team1 from "@/components/team/Team1";
import Team3 from "@/components/team/Team3";
import Team4 from "@/components/team/Team4";
import FancyBanner from "@/components/home-page/home-10/FancyBanner";

export const metadata = {
  title: "Pharmalect || PHARMALECT MEDİKAL ÇEVİRİ VE DANIŞMANLIK HİZMETLERİ",
};
const AboutUsV3 = () => {
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
      Theme Inner Banner
      ============================================== 
      */}
      <div className="inner-banner-three text-center p-30">
        <div
          className="bg-wrapper text-center"
          style={{ backgroundImage: "url(/images/assets/bg-17.svg)" }}
        >
          <div className="container">
            <div className="title-style-five">
              <h2 className="main-title tx-dark fw-bold">Hakkımızda</h2>
            </div>
            <p className="fs-20 mt-30 lg-mt-20">
              Alanında uzman ekibimizle, yüksek kaliteli ve güvenilir hizmetler sunuyoruz.
            </p>
          </div>
          {/* End container */}
        </div>
        {/* /.bg-wrapper */}
      </div>
      {/* /.inner-banner-three */}

      {/* 
        =============================================
        Feature Section Two
        ============================================== 
        */}
      <div className="fancy-feature-two position-relative pt-150 lg-pt-90">
        <div className="container">
          <div className="row align-items-center">
            <OurAim isfromAbout />
          </div>
        </div>{" "}
        {/* /.container */}
        {/* <div className="container">
          <div className="row justify-content-center pt-60 md-pt-40">
            <Counter2 />
          </div>
        </div> */}
      </div>

      {/* /.fancy-feature-two */}

      {/* 
        =============================================
        Feature Section Fifty Four
        ============================================== 
        */}
      <div className="fancy-feature-fiftyFour p-30 mt-150 lg-mt-90">
        <div className="bg-wrapper position-relative zn2 pt-140 lg-pt-60 pb-140 lg-pb-60">
          <div className="container">
            <div className="row">
              <div className="col-lg-4" data-aos="fade-right">
                <div className="title-style-one mt-30">
                  <div className="sc-title text-uppercase">Neden Biz?</div>
                  <h2 className="main-title fw-bold tx-dark">
                  Neden Pharmalect'i <span>seçmelisin?</span>
                  </h2>
                </div>{" "}
                {/* /.title-style-one */}
                <p className="text-lg mt-40 lg-mt-20">
                  Uzman ekibimizle ruhsatlandırma ve medikal çeviri süreçlerinizi güvenle yönetiyoruz. Hızlı, doğru ve mevzuata tam uyumlu hizmet anlayışımızla yanınızdayız..
                </p>
                <Image
                  width={73}
                  height={75}
                  src="/images/shape/shape_179.svg"
                  alt="icon"
                  className="lazy-img d-none d-lg-block mt-80"
                />
              </div>
              {/* End .col */}

              <div className="col-lg-7 ms-auto">
                <div className="row gx-xxl-5">
                  <Block />
                </div>
              </div>
            </div>
          </div>
          <Image
            width={10}
            height={10}
            src="/images/shape/shape_11.svg"
            alt="icon"
            className="lazy-img shapes shape-one"
          />
          <Image
            width={18}
            height={16}
            src="/images/shape/shape_13.svg"
            alt="icon"
            className="lazy-img shapes shape-two"
          />
          <Image
            width={8}
            height={8}
            src="/images/shape/shape_10.svg"
            alt="icon"
            className="lazy-img shapes shape-three"
          />
          <Image
            width={10}
            height={10}
            src="/images/shape/shape_12.svg"
            alt="icon"
            className="lazy-img shapes shape-four"
          />
        </div>{" "}
        {/* /.bg-wrapper */}
      </div>

      <div className="fancy-feature-fiftyOne position-relative mt-200">
        <div className="container">
          <div className="row">
            <div className="col-lg-7" data-aos="fade-right">
              <div className="title-style-five mb-65 md-mb-40">
                <div className="sc-title-two fst-italic position-relative">
                  Hakkımızda daha fazlası.
                </div>
                <h2 className="main-title fw-400 tx-dark">
                  Uzmanlığımızla öne çıkıyoruz.
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-8 col-lg-9 ms-auto">
              <div className="ps-xxl-5" data-aos="fade-left">
                <h6 className="mb-30">Vizyonumuz</h6>
                <p className="text-lg tx-dark">
                  Beşeri tıbbi ürün ve tıbbi cihaz ruhsatlandırma süreçlerinde ulusal ve uluslararası düzeyde öncü bir şirket olmak. Çeviri ve danışmanlık alanlarındaki uzmanlığımızla zaman kaybı ve yanlış anlamaları en aza indirerek süreçleri etkin, hızlı ve doğru biçimde yürütmeyi hedefliyoruz.
                </p>
                <h6 className="mb-30">Misyonumuz</h6>
                <p className="text-lg tx-dark">
                  Ruhsat dosyalarının medikal terminolojiye uygun, eksiksiz ve doğru şekilde çevrilmesini sağlayarak zaman ve kaynak kayıplarını ortadan kaldırmak. Müşterilerimizin küresel regülasyonlara uyum sağlamalarını kolaylaştırmak ve ruhsatlandırma süreçlerinde çözüm ortağı olmak.
                </p>
                <div className="row">
                  {/* <Counter /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /.container */}

        <img
          src="/images/shape/shape_171.svg"
          alt="shape"
          className="lazy-img shapes shape-one"
        />
        <img
          src="/images/shape/shape_172.svg"
          alt="shape"
          className="lazy-img shapes shape-two"
        />
      </div>
      {/* /.fancy-feature-fiftyFour */}

      {/*
        =====================================================
        Team Section Four
        =====================================================
        */}
      {/* <div className="team-section-four mt-150 lg-mt-90">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-xxl-6 col-md-7" data-aos="fade-right">
              <div className="title-style-one text-center text-md-start">
                <div className="sc-title text-uppercase">EKİBİMİZ</div>
                <h2 className="main-title fw-bold tx-dark m0">
                  İhtiyacınıza özel çözümler sunan güçlü bir ekibiz.
                </h2>
              </div>{" "}
             
            </div>
          
          </div>{" "}
          
          <div className="wrapper border-bottom pt-80 lg-pt-50">
            <div className="row gx-xxl-5">
              <Team4 />
            </div>
           
          </div>
        </div>
        
      </div> */}
      {/* /.team-section-four */}

      {/*
        =====================================================
        Feedback Section One
        =====================================================
        */}
      <div
        className="feedback-section-one position-relative p-30 mt-200 lg-mt-130 "
        data-aos="fade-up"
      >
        <div className="bg-wrapper position-relative pt-150 pb-180 lg-pt-100 lg-pb-120">
          <img
            src="/images/shape/shape_14.svg"
            alt="img"
            className="lazy-img shapes shape-one"
          />
          <div className="shapes shape-two" />
          <div className="shapes shape-three" />
          <Testimonial />
        </div>
        {/* /.bg-wrapper */}
      </div>
      {/* /.feedback-section-one */}

      {/* 
        =============================================
        Wrapper
        ============================================== 
        */}
      
      <FancyBanner />
      {/* /.wrapper */}

      {/*
        =====================================================
        Fancy Short Banner One
        =====================================================
        */}
      {/* <CallToActions /> */}
      {/* /.fancy-short-banner-one */}

      {/* 
        =============================================
        Footer
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
      {/* /.footer-style-one */}
    </>
  );
};

export default AboutUsV3;
