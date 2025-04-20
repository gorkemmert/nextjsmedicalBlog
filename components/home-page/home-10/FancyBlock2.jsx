const FancyBlock2 = () => {
  const cardsData = [
    {
      icon: "/images/icon/medicine.svg",
      title: "Beşeri Tıbbi Ürünler",
      subtitle: "İlaç ruhsatlandırma, ruhsat devri, yenileme, GMP ve fiyat başvuruları gibi süreçlerde uzman desteği sağlıyoruz.",
      delay: "100",
    },
    {
      icon: "/images/icon/device.svg",
      title: "Tıbbi Cihazlar",
      subtitle: "Firma ve belge kayıtları, tıbbi cihaz ruhsatlandırma ve MDR/MDD düzenlemelerine uyumlu hizmet sunuyoruz.",
      delay: "200",
    },
    {
      icon: "/images/icon/translate.svg",
      title: "Medikal Çeviri",
      subtitle: "Ruhsat dosyaları, tıbbi cihaz kullanım kılavuzları ve bilimsel makalelerin profesyonel çevirisini yapıyoruz.",
      delay: "300",
    },
  ];

  return (
    <>
      {cardsData.map((card, index) => (
        <div
          key={index}
          className="col-lg-3 col-md-4 col-sm-6"
          data-aos="fade-up"
          data-aos-delay={card.delay}
        >
          <div className="card-style-two mt-40">
            <div className="icon d-flex align-items-end">
              <img src={card.icon} alt="" className="lazy-img" />
            </div>
            <span className="d-inline-block text-uppercase fs-14 opacity-75 mt-30 mb-10">
              {card.title}
            </span>
            <h4 className="fw-500 m0">{card.subtitle}</h4>
          </div>
          {/* /.card-style-two */}
        </div>
      ))}
    </>
  );
};

export default FancyBlock2;
