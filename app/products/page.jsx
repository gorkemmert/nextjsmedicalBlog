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
                <h2 className="main-title tx-dark mb-30">Beşeri Tıbbi Ürünler</h2>
                <h3 id="ruhsatlandirma" className="mt-60 mb-20 scroll-mt-[120px] scroll-offset">Beşeri Tıbbi Ürün Ruhsatlandırma</h3>
                <p>Beşeri tıbbi ürün ruhsatlandırma, bir ilacın piyasaya sunulabilmesi için gerekli olan yasal süreçtir. Bu süreç, ilacın güvenli, etkili ve kaliteli olduğunun bağımsız otoriteler tarafından onaylanmasını içerir.</p>
                <ul className="style-none list-item">
                  <li>
                    <h5>Önceliklendirme başvuruları</h5>
                    <p>Bu başvuru, kamu sağlığı için önemli olan ya da yenilikçi ilaçların ruhsatlandırma ve GMP süreçlerinin hızlandırılmasını sağlar. Özellikle kanser, nadir hastalıklar, pediatrik kullanım ya da halk sağlığını etkileyen salgın gibi durumlarda ilaçların daha hızlı erişime sunulmasını amaçlar. Yüksek öncelik durumunda ruhsatlandırma süreci 210 günden 150 güne, öncelik durumunda ise 210 günden 180 güne kısaltılır. Aynı zamanda GMP süreci yüksek öncelik durumunda 24 aydan 6-9 aya, öncelik durumunda ise 24 aydan 12-18 aya kısaltılır ve CTD başvurusu ile eş zamanlı olarak GMP başvuru süreçleri yürütülebilir. Bu sayede yenilikçi ürünlere öncelik verilir ve halkın ilaca daha hızlı ulaşması sağlanır.</p>
                  </li>
                  <li>
                    <h5>GMP başvurusu</h5>
                    <p>Ürünün rusatlandırılması için İyi Üretim Uygulamaları’na (GMP) uygun bir tesiste üretilmesi zorunludur. Bu nedenle yerinde, dosya bazlı ve ve GMP’nin yenilenmesi adına risk bazlı GMP başvuruları yapılmaktadır. GMP geçerlilik süresi 3 yıldır.</p>
                  </li>
                  <li>
                    <h5>CTD dosyası hazırlığı</h5>
                    <p>Ruhsatlandırma dosyası, ilacın klinik ve preklinik verileri, kalite kontrol bilgileri ve üretim süreçlerini içerecek şekilde hazırlanır. İthal ürünlerde dosyanın belli bölümleri Türkçe’ye çevrilmelidir.</p>
                  </li>
                  <li>
                    <h5>Ruhsat başvurusunun sunulması</h5>
                    <p>Hazırlanan CTD dosyasının, yetkili otoriteye (örneğin, Türkiye’de TİTCK) Elektronik başvuru sistemi (EBS) üzerinden başvurusu yapılır.</p>
                  </li>
                  <li>
                    <h5>Ön değerlendirme süreci</h5>
                    <p>Bu kritik süreçte yetkili otorite, başvuruyu inceleyerek ruhsat dosyasının değerlendirilmeye uygun olup olmadığını belirler. Ruhsat başvurusu sunulduktan 30 gün içerisinde Kurum tarafından ön inceleme eksikliklerini belirten resmi yazı gönderilir. Bu yazıya 30 gün içerisinde cevap verilmelidir. Eksiklikler tamamlanamadığı takdirde ruhsat dosyası usulden reddedilir ve tekrar eksiksiz bir dosyayla başvuru yapılması gerekir. Ön inceleme süreci geçildiği takdirde Kurum ruhsatlandırma kapasitesi göz önünde bulundurularak sadece Şubat, Mayıs, Ağustos ve Kasım aylarında ilgili kılavuz doğrultusunda başlatılabilir.</p>
                  </li>
                  <li>
                    <h5>Komisyon eksikliklerinin cevaplarının verilmesi</h5>
                    <p>Ruhsat süreci başladığında ilgili ürün biyoyararlanım/ biyoeşdeğerlik, teknolojik komisyon gibi komisyonlarda incelenir. İlgili eksiklikler resmi yazılarla bildirilir. Bu yazılara 30 gün içerisinde cevap verilmediğinde başvuru usulden reddedilir.</p>
                  </li>
                  <li>
                    <h5>Ruhsat kesim eksiklikleri</h5>
                    <p>Bu eksiklikler tamamlandığı takdirde, ilaç için ruhsat verilir ve piyasaya çıkışı satış izni alındıktan sonra yasal hale gelir.</p>
                  </li>
                  <li>
                    <h5>Fiyat başvurusu</h5>
                    <p>Türkiye pazarında satılabilmesi için ilk fiyat başvurusu yapılarak uygun bir fiyat belirlenir. Bu süreç, ilaçların erişilebilirliğini ve sürdürülebilirliğini sağlamak amacıyla belirli kriterlere dayalı olarak yürütülür.</p>
                  </li>
                  <li>
                    <h5>Satış izni alınması</h5>
                    <p>Türkiye'de bir ilacın piyasada satışa sunulabilmesi için ilaç satış izni alınması gerekmektedir.</p>
                  </li>
                  <li>
                    <h5>Geri ödemeye alınması</h5>
                    <p>Türkiye'de bir ilacın geri ödeme kapsamına alınması, ilacın Sosyal Güvenlik Kurumu (SGK) tarafından karşılanmasını sağlayan bir süreçtir. Bu süreç, ilacın erişilebilirliğini artırır ve hastalar üzerindeki mali yükü azaltır. Geri ödeme kapsamına alınma süreci, SGK Sağlık Uygulama Tebliği (SUT) hükümlerine göre yürütülür.</p>
                  </li>
                  <li>
                    <h5>Ruhsat yenileme</h5>
                    <p>İlaç ruhsat yenileme süreci, bir ilacın mevcut ruhsatının geçerlilik süresinin dolmasından önce Türkiye İlaç ve Tıbbi Cihaz Kurumu (TİTCK) tarafından yenilenmesi için yürütülen bir prosedürdür. Bu süreç, ilacın etkinliğini, güvenliğini ve kalitesini değerlendirme amacı taşır ve ruhsatın sürekliliğini sağlar. Kurum aksini söylemediği sürece bir kez ruhsat yenileme yapılır. Ruhsat yenileme başvurusu, ruhsat alındıktan sonra 5. yıl dolmadan en az 9 ay önce yapılmalıdır.</p>
                  </li>
                  <li>
                    <h5>Varyasyon süreçleri</h5>
                    <p>İlaç varyasyon başvuruları, ruhsatlı bir ilacın üretim, kalite, güvenlik, etkililik veya idari bilgilerinde yapılacak değişikliklerin yetkili otoritelere bildirilmesi sürecidir.</p>
                  </li>
                </ul>
                <h3 id="ruhsat-devri" className="mt-60 mb-20">Ruhsat Devri</h3>
                <p>Ruhsat devri, bir beşeri tıbbi ürün ruhsatının bir şirketten başka bir şirkete yasal olarak transfer edilmesi işlemidir. Bu işlem, şirket birleşmeleri, satın almalar veya stratejik iş planlamaları sonucunda gerçekleşebilir.</p>
                <h4>Ruhsat devri sürecinde dikkat edilmesi gerekenler:</h4>
                <ul className="style-none list-item">
                  <li>Yetkili Mercilere Bildirim: Devir talebi, yetkili otoriteye (örneğin, TİTCK) resmi olarak bildirilmelidir.</li>
                  <li>Gerekli Belgeler: Devir anlaşması, tarafların yetkilendirme belgeleri ve diğer gerekli dokümantasyon hazırlanmalıdır</li>
                  <li>Değerlendirme Süreci: Yetkili otorite, başvuruyu değerlendirir ve onay verir. Onay sürecinin tamamlanmasının ardından devir işlemi resmileşir.</li>
                </ul>
                <p>Bu konuda etkin, güvenilir ve hızlı bir hizmet alabilmek adına lütfen bizimle iletişime geçiniz.</p>
                <h3 id="ruhsat-yenileme" className="mt-60 mb-20">Ruhsat Yenileme</h3>
                <p>İlaç ruhsatları genellikle belirli bir süre için geçerlidir ve ruhsat tarihinden 5 yıl sonra süresi dolan ruhsatların yenilenmesi gerekir. Ruhsat yenileme, ilacın piyasada kalabilmesi için zorunlu bir adımdır.</p>
                <h4>Ruhsat yenileme sürecinde izlenen adımlar</h4>
                <ul className="style-none list-item">
                  <li>Sürecin Başlatılması: Ruhsat yenileme başvurusu, mevcut ruhsatın süresi dolmadan önce yetkili otoriteye sunulmalıdır. Ruhsat yenileme başvurusu, ruhsat alındıktan sonra 5. yıl dolmadan en az 9 ay önce yapılmalıdır.</li>
                  <li>Güncellenmiş Verilerin Sunulması: İlaçla ilgili güncellenmiş güvenlik, etkinlik ve kalite verileri, başvuruyla birlikte sunulmalıdır.</li>
                  <li>Değerlendirme ve Onay: Yetkili otorite, ilacın piyasada kalmaya devam etmesinde bir sakınca olmadığını onayladığında ruhsat yenilenir.</li>
                </ul>
                <p>Ruhsat yenileme süreçleri hakkında detaylı bilgi ve bu süreçte karşılaşılabilecek olası sorunlara dair bizimle iletişime geçebilirsiniz.</p>

                <h3 id="varyasyon-basvurulari" className="mt-60 mb-20">Varyasyon Başvuruları</h3>
                <p>
                  İlaç varyasyon başvuruları, ruhsatlı bir ilacın üretim, kalite, güvenlik, etkililik veya idari bilgilerinde yapılacak değişikliklerin yetkili otoritelere bildirilmesi sürecidir.
                </p>
                <h4>Varyasyon türleri:</h4>
                <ul className="style-none list-item">
                  <li><strong>Tip IA Varyasyonları (Küçük Değişiklikler):</strong> Hızlı onay sürecine tabi, düşük riskli değişikliklerdir. Örneğin, bir üretim yeri adresinin güncellenmesi.</li>
                  <li><strong>Tip IB Varyasyonları (Orta Ölçekli Değişiklikler):</strong> Daha fazla değerlendirme gerektiren, ancak kapsamlı klinik veri istemeyen değişikliklerdir. Örneğin, bir üretim sürecinde küçük bir değişiklik yapılması.</li>
                  <li><strong>Tip II Varyasyonları (Büyük Değişiklikler):</strong> İlacın güvenliğini, etkinliğini veya kalitesini etkileyebilecek önemli değişikliklerdir. Örneğin, yeni bir endikasyon eklenmesi.</li>
                </ul>
                <p>Her varyasyon tipi için başvuru sürecine dair rehberler, gerekli belgeler ve otoritelerin zaman çizelgeleri hakkında detaylı bilgi için bizimle iletişime geçebilirsiniz.</p>

                <h3 id="gmp-basvurulari" className="mt-60 mb-20">GMP Başvuruları</h3>
                <p>
                  GMP (Good Manufacturing Practices) başvuruları, ilaç üretim tesislerinin belirli kalite standartlarını karşıladığını belgeleyen bir sertifikasyon sürecidir.
                </p>
                <h4>GMP başvuru süreci aşamaları:</h4>
                <ul className="style-none list-item">
                  <li>Başvuru Hazırlığı: Üretim tesisinin mimari planları, ekipman listesi, kalite kontrol sistemleri ve SOP’leri başvuru dosyasına eklenir.</li>
                  <li>Denetim: Yetkili otorite (örneğin, TİTCK), tesisin GMP standartlarına uygunluğunu yerinde denetler.</li>
                  <li>Sertifikasyon: Denetim başarılı bulunursa GMP sertifikası verilir. Bu belge, uluslararası ticaret için de bir gereklilik olabilir.</li>
                </ul>
                <p>Bu konuda etkin, güvenilir ve hızlı bir hizmet alabilmek adına lütfen bizimle iletişime geçiniz.</p>

                <h3 id="fiyat-basvurulari" className="mt-60 mb-20">Fiyat Başvuruları</h3>
                <p>
                  İlaç fiyat başvuruları, bir ilacın piyasaya sunulmadan önce veya fiyat güncellemesi gerektiğinde, yetkili otoritelere sunulan resmi bir süreçtir.
                </p>
                <h4>Fiyat başvurularında dikkate alınması gereken unsurlar:</h4>
                <ul className="style-none list-item">
                  <li>Referans Fiyat Sistemi: Türkiye’de ilaç fiyatları, genellikle referans ülkelerdeki fiyatlara göre belirlenir.</li>
                  <li>Gerekli Belgeler: Referans fiyat bilgileri, maliyet analizleri ve diğer destekleyici belgeler başvuru dosyasına eklenmelidir.</li>
                  <li>Değerlendirme Süreci: Yetkili otorite, başvuruyu değerlendirir ve uygun bulduğu takdirde fiyat onayını verir.</li>
                </ul>
                <p>Bu konuda etkin, güvenilir ve hızlı bir hizmet alabilmek adına lütfen bizimle iletişime geçiniz.</p>

                <h3 id="sgk-basvurusu" className="mt-60 mb-20">SGK Başvuru Dosyası Takibi</h3>
                <p>
                  SGK (Sosyal Güvenlik Kurumu) başvuru dosyası takibi, bir ilacın geri ödeme listesine alınması sürecinde önemli bir adımdır.
                </p>
                <h4>SGK başvuru sürecinin temel aşamaları:</h4>
                <ul className="style-none list-item">
                  <li>Başvuru Dosyasının Hazırlanması: İlaç fiyatı, farmakoekonomik analizler ve klinik veriler dosyaya eklenir.</li>
                  <li>Başvurunun Sunulması: SGK’ye dosyanın teslim edilmesi ve sürecin başlatılması.</li>
                  <li>Takip ve İletişim: SGK ile düzenli iletişim kurularak eksik belgelerin tamamlanması ve sürecin hızlandırılması sağlanır.</li>
                  <li>Sonuçlandırma: Başvuru onaylandığında ilaç, geri ödeme listesine dahil edilir.</li>
                </ul>
                <p>SGK başvurularında sıkça karşılaşılan sorunlar ve çözüm önerileri için bizimle iletişime geçebilirsiniz.</p>

                <h3  id="satis-izni" className="mt-60 mb-20">Satış İzni</h3>
                <p>
                  Satış izni, bir ilacın piyasaya sunulmadan önce ruhsatlandırma sonrası alınması gereken resmi bir belgedir.
                </p>
                <h4>Satış izni başvuru süreci:</h4>
                <ul className="style-none list-item">
                  <li>Başvuru Belgelerinin Hazırlanması: Ruhsat onay belgesi, üretim sertifikaları ve diğer yasal dokümanlar tamamlanır.</li>
                  <li>Başvurunun Sunulması: Yetkili otoriteye (örneğin, Türkiye’de TİTCK) başvuru yapılır.</li>
                  <li>Değerlendirme Süreci: Başvuru incelenir ve satış izni onaylandığında ilaç piyasaya sürülebilir.</li>
                </ul>
                <p>Satış izni süreçleri konusunda etkin, güvenilir ve hızlı bir hizmet alabilmek adına lütfen bizimle iletişime geçiniz.</p>

                <h3  id="kub-kt" className="mt-60 mb-20">KÜB / KT Hazırlama</h3>
                <p>
                  KÜB (Kısa Ürün Bilgisi) ve KT (Kullanma Talimatı), ilacın ruhsatlandırma sürecinde ve sonrası aşamalarda zorunlu olan temel dokümanlardır.
                </p>
                <h4>KÜB / KT’nin temel bileşenleri:</h4>
                <ul className="style-none list-item">
                  <li><strong>KÜB:</strong> İlacın endikasyonları, dozaj bilgileri, kontrendikasyonları, farmakolojik özellikleri gibi sağlık profesyonellerine yönelik teknik bilgileri içerir.</li>
                  <li><strong>KT:</strong> İlacın nasıl kullanılacağı, yan etkiler ve saklama koşulları gibi hasta odaklı bilgilere yer verir.</li>
                </ul>
                <h4>Hazırlama süreci:</h4>
                <ul className="style-none list-item">
                  <li>Harmonizasyon: Dokümanlar, yerel düzenlemeler ve uluslararası standartlarla uyumlu olarak hazırlanır.</li>
                  <li>Yetkili Otoriteye Sunum: TİTCK’ye dokümanlar sunulur ve uygun bulunursa onaylanır.</li>
                  <li>Güncelleme: Ruhsatlandırma sonrası yeni bilgiler doğrultusunda dokümanların güncellenmesi gerekir.</li>
                </ul>
                <p>Bu konuda etkin, güvenilir ve hızlı bir hizmet alabilmek adına lütfen bizimle iletişime geçiniz.</p>


              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-8 order-lg-0">
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
                {/* <h4 className="tx-dark mb-15">Bizi Takip Edin</h4> */}
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