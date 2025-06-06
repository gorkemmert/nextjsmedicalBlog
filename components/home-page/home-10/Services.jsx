import Link from "next/link";

const servicesData = [
  {
    bgColor: "rgba(255, 171, 51, 0.18)",
    iconSrc: "/images/icon/icon_01.svg",
    title: "Beşeri Tıbbi Ürünler",
    link: "/products",
    description:
      "Beşeri tıbbi ürünlerin ruhsatlandırma süreci, ilaçların güvenli, etkili ve kaliteli olduğunun bağımsız otoriteler tarafından onaylanmasını gerektirir. Bu kapsamda ruhsat devri, yenileme, varyasyon başvuruları, GMP ve fiyat başvuruları gibi hizmetler sunuyoruz. Ayrıca, SGK başvuru dosyalarının takibini yaparak satış izni ve KÜB/KT hazırlama süreçlerini de destekliyoruz.",
  },
  {
    bgColor: "rgba(100, 219, 226, 0.18)",
    iconSrc: "/images/icon/icon_02.svg",
    title: "Tıbbi Cihaz",
    link: "/devices",
    description:
      "Tıbbi cihazların yasal uyumluluğunu sağlamak için firma ve belge kayıt işlemlerinin yanı sıra tıbbi cihaz kaydı ve MDD/MDR düzenlemeleri gibi konularda danışmanlık hizmeti veriyoruz. Sektöre yönelik güncel regülasyonları takip ederek süreci sorunsuz yönetmenize yardımcı oluyoruz.",
  },
  {
    bgColor: "rgba(255, 160, 194, 0.18)",
    iconSrc: "/images/icon/icon_03.svg",
    title: "Medikal Çeviri",
    link: "/translation",
    description:
      "Medikal çeviri hizmetlerimizle, ruhsat dosyalarının hazırlanması ve çevirisinden tıbbi cihaz kullanım talimatlarının doğru aktarımına kadar geniş bir yelpazede destek sunuyoruz. Ayrıca, bilimsel tez, makale ve araştırmaların terminolojik doğrulukla çevrilmesini sağlayarak akademik ve sektörel ihtiyaçlara uygun çözümler sunuyoruz.",
  },
  {
    bgColor: "rgba(246, 243, 255, 1)",
    iconSrc: "/images/icon/icon_04.svg",
    title: "Diğer",
    link: "#",
    description:
      "Tıbbi ve regülasyon süreçleri dışında kalan özel ihtiyaçlarınız için esnek ve kapsamlı çözümler sunuyoruz. Hizmetlerimiz hakkında daha fazla bilgi almak için bizimle iletişime geçebilirsiniz.",
  },
];

const Services = () => {
  return (
    <>
      {servicesData.map((service, index) => (
        <div
          key={index}
          className={`col-lg-3 col-sm-6`}
          data-aos="fade-up"
          data-aos-delay={`${index * 100}`}
        >
          <div className="card-style-one pe-xxl-5 position-relative mt-40">
            <div
              className="icon d-flex align-items-center justify-content-center"
              style={{ backgroundColor: service.bgColor }}
            >
              <img src={service.iconSrc} alt="icon" className="lazy-img" />
            </div>
            <h5 className="fw-500 mt-35 mb-25">
              <Link
                href={service.link}
                className="tran3s tx-dark"
              >
                {service.title}
              </Link>
            </h5>
            <p className="mb-25">{service.description}</p>
            <Link href={service.link}>
              <img
                src="/images/icon/icon_05.svg"
                alt="icon"
                className="lazy-img"
              />
            </Link>
          </div>
          {/* /.card-style-one */}
        </div>
      ))}
    </>
  );
};

export default Services;
