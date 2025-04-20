const FaqAccordion = () => {
  const accordionItems = [
    {
      id: "faq-1",
      question: "Ruhsatlandırma süreci ne kadar sürer?",
      answer:
        "Ruhsatlandırma süresi ürünün türüne, başvuru kapsamına ve otoritenin yoğunluğuna göre değişiklik gösterebilir. Ortalama olarak 4 ila 12 ay sürebilir.",
    },
    {
      id: "faq-2",
      question: "Hangi belgeleri hazırlamam gerekiyor?",
      answer:
        "Başvuru türüne göre belgeler değişmekle birlikte, temel olarak ürün bilgileri, kalite belgeleri, analiz sertifikaları ve KÜB/KT dosyaları gereklidir. Sürece göre detaylı bir belge listesi tarafımızca sağlanır.",
    },
    {
      id: "faq-3",
      question: "Tıbbi cihazlar için de danışmanlık veriyor musunuz?",
      answer:
        "Evet, tıbbi cihazların firma kaydı, belge kaydı, cihaz kaydı ve MDR/MDD uyumluluğu süreçlerinde de danışmanlık hizmeti sunmaktayız.",
    },
    {
      id: "faq-4",
      question: "Medikal çeviri hizmetleriniz hangi dilleri kapsıyor?",
      answer:
        "Ağırlıklı olarak İngilizce-Türkçe ve Türkçe-İngilizce arasında medikal çeviri hizmeti sunuyoruz. Talebe göre diğer diller için de destek verebiliriz.",
    },
    {
      id: "faq-5",
      question: "Dosya çevirilerinde medikal terminolojiye dikkat ediliyor mu?",
      answer:
        "Kesinlikle. Tüm çeviriler, medikal alanda deneyimli çevirmenler tarafından yapılır ve terminolojiye uygunluk titizlikle sağlanır.",
    },
    {
      id: "faq-6",
      question: "Hizmetlerinizin fiyatlandırması nasıl yapılıyor?",
      answer:
        "Hizmet türüne, belge sayısına ve kapsamına göre özel teklif hazırlanır. Şeffaf ve rekabetçi bir fiyatlandırma politikası izliyoruz.",
    },
    {
      id: "faq-7",
      question: "Süreç boyunca sizinle nasıl iletişim kurabilirim?",
      answer:
        "Tüm müşterilerimize e-posta ve telefon üzerinden kesintisiz destek sağlıyoruz. Talebe göre online toplantılarla süreçleri birlikte değerlendiriyoruz.",
    },
    {
      id: "faq-8",
      question: "SGK başvurularında da destek veriyor musunuz?",
      answer:
        "Evet, SGK başvuru dosyası hazırlığı ve takibi konusunda da danışmanlık hizmeti sunuyoruz.",
    }
  
  ];

  return (
    <div className="accordion accordion-style-four" id="accordionOne">
      {accordionItems.map((item, index) => (
        <div className="accordion-item" key={item.id}>
          <div className="accordion-header" id={`heading-${index}`}>
            <button
              className={`accordion-button ${index === 2 ? "" : "collapsed"}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse-${index}`}
              aria-expanded={index === 2 ? "true" : "false"}
              aria-controls={`collapse-${index}`}
            >
              <span>{`0${index + 1}.`}</span> {item.question}
            </button>
          </div>
          <div
            id={`collapse-${index}`}
            className={`accordion-collapse collapse ${
              index === 2 ? "show" : ""
            }`}
            aria-labelledby={`heading-${index}`}
            data-bs-parent="#accordionOne"
          >
            <div className="accordion-body">
              <p>{item.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FaqAccordion;
