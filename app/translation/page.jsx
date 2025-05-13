import Image from "next/image";
import Footer from "@/components/home-page/home-10/Footer";
import Header from "@/components/home-page/home-10/Header";
import Faq4 from "@/components/faqs/Faq4";
import Social from "@/components/service-details/Social";

export const metadata = {
  title: "Hizmetler || Pharmalect Medikal Çeviri ve Danışmanlık",
};

const ServiceDetails = () => {
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
              Alanında uzman iki eczacı tarafından kurulan Pharmalect, çeviri ve ruhsatlandırma süreçlerinde etkin çözümler sunar.
            </p>
          </div>
        </div>
      </div>

      <div className="service-details position-relative mt-100 mb-170 md-mt-50 lg-mb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 col-lg-8 order-lg-1">
              <div className="service-details-meta ps-lg-5">
                <h2 className="main-title tx-dark mb-30">MEDİKAL ÇEVİRİ</h2>
                <h3 id="file" className="mt-60 mb-20 scroll-mt-[120px] scroll-offset">Ruhsat dosyası hazırlama ve çevirisi</h3>
                <p>Ruhsatlandırma süreçlerinde bir adım öne geçmek ve çeviri kaynaklı zaman kayıplarını önlemek adına ruhsatlandırma alanında deneyimli eczacılar tarafından ruhsat dosyanızın çevrilmesi</p>
                <ul className="style-none list-item">
                  <li>
                    <p>İlaç ve tıbbi cihazların ruhsat alabilmesi için gerekli olan ruhsat dosyasının hazırlanması, titizlikle yapılması gereken bir süreçtir. Bu dosya, ürünün güvenliğini, etkinliğini ve kalite standartlarını belgelendirir. Ruhsat başvurusu için gereken tüm teknik dosyaların hazırlanması ve çevirisi, yasal gereklilikler doğrultusunda büyük önem taşır.</p>
                  </li>
                  <li>
                    <p>Biz, ruhsat dosyalarınızın tüm belgelerini eksiksiz bir şekilde hazırlıyor ve gerekli çevirileri gerçekleştiriyoruz. Ulusal ve uluslararası düzenlemelere uyumlu olarak, başvurularınızı hızlı ve sorunsuz bir şekilde tamamlamanıza yardımcı oluyoruz.</p>
                  </li>
                </ul>
                <h3 id="devices" className="mt-60 mb-20">Tıbbi cihaz kullanım talimatı ve doküman çevirisi</h3>
                <p>Tıbbi cihazlar için kullanım talimatları, ürünlerin güvenli ve doğru şekilde kullanılması adına kritik öneme sahiptir. Ayrıca, tıbbi cihazların yasal gerekliliklere uygunluğunu sağlamak için belgelerin doğru ve anlaşılır şekilde çevrilmesi gerekmektedir.</p>
                <p>Tıbbi cihaz kullanım talimatları ve diğer teknik dokümanlar için çeviriyi doğru ve profesyonel bir şekilde gerçekleştiriyoruz. Tüm belgelerinizin yerel ve uluslararası gerekliliklere uygun olmasını sağlıyoruz, böylece yasal uyum ve kullanıcı güvenliği garanti altına alınır.</p>
                
                <h3 id="research" className="mt-60 mb-20">Bilimsel tez, makale ve araştırma çevirisi</h3>
                <p>Bilimsel tezler, makaleler ve araştırma çalışmalarının doğru ve anlamlı bir şekilde çevrilmesi, akademik dünyada başarıyı sağlamak için oldukça önemlidir. Çeviri sürecinde, teknik terimler ve sektöre özgü dilin doğru kullanımı büyük bir titizlik gerektirir.</p>
                <p>Bilimsel çeviriler konusunda uzman ekibimiz, tezler, makaleler ve araştırmalar için yüksek kaliteli çeviriler sunmaktadır. Çevirilerinizin akademik standartlara ve hedef dildeki bilimsel terminolojiye uygun olmasına özen gösteriyoruz.</p>
               

              </div>
            </div>

            {/* <div className="col-xl-3 col-lg-4 col-md-8 order-lg-0">
              <div className="service-sidebar pe-xxl-5 md-mt-60">
              <div className="service-category mb-40">
                <h4 className="tx-dark mb-15">Beşeri Tıbbi Ürün Hizmetlerimiz</h4>
                <ul className="style-none">
                  <li><a href="#ruhsatlandirma">Ruhsatlandırma</a></li>
                  <li><a href="#ruhsat-devri">Ruhsat Devri</a></li>
                  <li><a href="#ruhsat-yenileme">Ruhsat Yenileme</a></li>
                  <li><a href="#varyasyon-basvurulari">Varyasyon Başvuruları</a></li>
                  <li><a href="#gmp-basvurulari">GMP Başvuruları</a></li>
                  <li><a href="#fiyat-basvurulari">Fiyatlandırma</a></li>
                  <li><a href="#sgk-basvurusu">SGK Takibi</a></li>
                  <li><a href="#satis-izni">Satış İzni</a></li>
                  <li><a href="#kub-kt">KÜB / KT Hazırlama</a></li>
                </ul>
              </div>

                <div className="sidebar-quote mb-50">
                  <img src="/images/icon/icon_150.svg" alt="icon" className="m-auto" />
                  <p className="fw-500">
                    Beşeri tıbbi ürün süreçlerinizde güvenilir ortağınız.
                  </p>
                  <div className="name">- Pharmalect Ekibi</div>
                </div>
                <h4 className="tx-dark mb-15">Bizi Takip Edin</h4>
                <Social />
              </div>
            </div> */}
          </div>
        </div>
      </div>

      <div className="footer-style-one theme-basic-footer position-relative">
        <div className="shapes shape-one" />
        <div className="container">
          <div className="inner-wrapper">
            <Footer />
            <div className="bottom-footer">
              <p className="copyright text-center m0">
                © {new Date().getFullYear()} Pharmalect. Tüm hakları saklıdır.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetails;