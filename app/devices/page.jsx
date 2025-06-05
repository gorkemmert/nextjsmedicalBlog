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
                <h2 className="main-title tx-dark mb-30">Tıbbi Cihazlar</h2>
                <h3 id="firm" className="mt-60 mb-20 scroll-mt-[120px] scroll-offset">Firma Kaydı</h3>
                <p>Tıbbi cihaz ve kozmetik ürünlerin ÜTS’de kaydı için firmaların Sağlık Bakanlığı sisteminde tanımlı ve yetkili
                  olması gerekir. Bu işlem; firma kaydı, sorumlu müdür ataması ve imza yetkisi gibi adımları kapsar.</p>
                <ul className="style-none list-item">
                  <h6>Hizmetlerimiz:</h6>
                  <li>
                    <p>Firma kaydının ÜTS üzerinden yapılması</p>
                  </li>
                  <li>
                    <p>Firma faaliyet kodlarının belirlenmesi</p>
                  </li>
                   <li>
                    <p>Sorumlu teknik eleman veya müdür atama işlemleri</p>
                  </li>
                   <li>
                    <p>E-imza ile yetkilendirme süreçlerinin yürütülmesi</p>
                  </li>
                   <li>
                    <p>Firma bilgilerinin güncellenmesi veya devri işlemleri</p>
                  </li>
                </ul> 
                <p>Kurum nezdinde eksiksiz ve zamanında bildirimlerle sürecin doğru işlemesini sağlıyoruz.</p>
                <h3 id="doc" className="mt-60 mb-20">Belge Kaydı</h3>
                <p>Tıbbi cihazların pazara sunulabilmesi için çeşitli teknik ve kalite belgelerinin temin edilmesi gerekir. Teknik
                  belgelerin (Uygunluk beyanı (DoC) ve EC deklarasyon vb.) hazırlanması, denetim süreçlerine hazırlık ve
                  başvuru dosyalarının oluşturulmasında uzmanız. Başvurularınızın olumlu sonuçlanması için size özel
                  stratejiler geliştiriyoruz.</p>
               
                
                <h3 id="dev" className="mt-60 mb-20">Tıbbi Cihaz Kaydı</h3>
                <h6>Tıbbi Cihaz Danışmanlığı</h6>
                <p>ÜTS (Ürün Takip Sistemi), Türkiye&#39;de tıbbi cihaz ve kozmetik ürünlerin izlenebilirliğini sağlamak amacıyla
                  Sağlık Bakanlığı tarafından yürütülen dijital platformdur. Tıbbi cihazların pazara arz edilmeden önce ÜTS&#39;ye
                  eksiksiz ve doğru şekilde kaydedilmesi zorunludur. Bu noktada doğru sınıflandırma, teknik dosya
                  oluşturulması, ÜTS kaydı gibi işlemlerin profesyonelce yönetilmesi gerekir.</p>
                <ul className="style-none list-item">
                  <h6>Danışmanlık hizmetlerimiz:</h6>
                   <li>
                    <p>Cihazınızın sınıfına göre (Sınıf I, IIa, IIb, III) uygunluk belirlenmesi</p>
                  </li>
                   <li>
                    <p>Temel güvenlik ve performans gerekliliklerinin sağlanması</p>
                  </li>
                   <li>
                    <p>Teknik dosyanın hazırlanması veya mevcut dosyanın kontrol edilmesi</p>
                  </li>
                   <li>
                    <p>Belge (CE, ISO, uygunluk beyanı) yükleme ve güncelleme</p>
                  </li>
                   <li>
                    <p>ÜTS bildirim hatalarının tespiti ve düzeltilmesi</p>
                  </li>
                   <li>
                    <p>ÜTS’ye kayıt ve satışa sunum öncesi yasal kontrollerin tamamlanması</p>
                  </li>
                  
                </ul >   
                <p>Hatalı kayıtlar satış ve denetim süreçlerinde sorun yaratabilir. Ürünlerinizin pazara en kısa sürede ve en
                  doğru şekilde sunulması için tüm süreci sizin adınıza uçtan uca yönetiyoruz.</p>            
                <h3 id="mdd" className="mt-60 mb-20">MDD/MDR Kaydı</h3>
                <h6>MDD/MDR Geçiş ve Uyum Süreçleri</h6>
                <p>Avrupa Birliği’nde 2021 yılında yürürlüğe giren MDR (Medical Device Regulation), önceki MDD (Medical
                  Device Directive) mevzuatına göre çok daha kapsamlı ve katı gereklilikler içermektedir. Mevcut ürünlerin
                  MDR’ye uyumu, özellikle CE belgelerinin devamlılığı açısından kritik önem taşır.</p>
                <ul className="style-none list-item">
                  <h6>Verdiğimiz hizmetler:</h6>
                  <li>
                    <p>Mevcut teknik dosyanızın MDR’ye göre analiz edilmesi</p>
                  </li>
                  <li>
                    <p>MDR gerekliliklerine uygun yeni teknik dosya hazırlanması</p>
                  </li>
                  <li>
                    <p>Notified body (onaylanmış kuruluş) süreci yönetimi</p>
                  </li>
                  <li>
                    <p>Mevcut dosyaların MDR’ye uygun revizyonu</p>
                  </li>
                  <li>
                    <p>Eksik belgelerin tamamlanması ve kaydı</p>
                  </li>
                </ul>
                <p> Türkiye ve Avrupa Birliği mevzuatlarına uygunluk için yanınızdayız. MDR’ye uyum sürecinizi adım adım
                  planlayarak belge kaybı yaşamadan geçiş yapmanızı sağlıyoruz.</p>
                <h3 id="koz" className="mt-60 mb-20">Kozmetik Kaydı</h3>
                <h6>Kozmetik Ürün Danışmanlığı</h6>
                <p>Kozmetik ürünlerin üretimi ve piyasaya arzı ciddi regülasyonlara tabidir. Hem insan sağlığını korumak hem
                    de mevzuata uyum sağlamak adına ürün güvenlilik dosyalarının hazırlanması ve ÜTS bildirimlerinin
                    eksiksiz yapılması gereklidir.</p>
                <ul className="style-none list-item">
                  <h6>Verdiğimiz hizmetler:</h6>
                  <li>
                    <p>Kozmetik ürünlerin ÜTS bildirimlerinin yapılması</p>
                  </li>
                  <li>
                    <p>CPSR (Cosmetic Product Safety Report) hazırlanması</p>
                  </li>
                  <li>
                    <p>PIF (Product Information File) oluşturulması</p>
                  </li>
                  <li>
                    <p>Etiket ve ambalaj bilgilerinin mevzuata uygunluğu</p>
                  </li>
                  <li>
                    <p>GMP (Good Manufacturing Practices) rehberliği</p>
                  </li>
                </ul>
                <p>Ürünlerinizin sorunsuz şekilde piyasada yer alması için tüm süreci sizin adınıza yönetiyoruz.</p>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-8 order-lg-0">
              <div className="service-sidebar pe-xxl-5 md-mt-60">
              <div className="service-category mb-40">
                <h4 className="tx-dark mb-15">Tıbbi Cihazlar</h4>
                <ul className="style-none">
                  <li><a href="#firm">Firma Kaydı</a></li>
                  <li><a href="#doc">Belge Kaydı</a></li>
                  <li><a href="#dev">Tıbbi Cihaz Kaydı</a></li>
                  <li><a href="#mdd">MDD/MDR Kaydı</a></li>
                  <li><a href="#koz">Kozmetik Kaydı</a></li>
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
                {/* <Social /> */}
              </div>
            </div>
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