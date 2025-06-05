const FaqAccordion = () => {
  const accordionItems = [
    {
      id: "faq-1",
      question: "ÜTS kaydı nedir ve neden gereklidir?",
      answer:
        "ÜTS (Ürün Takip Sistemi), Türkiye’de Sağlık Bakanlığı tarafından yürütülen ve tıbbi cihaz ile kozmetik ürünlerin kayıt altına alındığı bir sistemdir. Piyasaya ürün arz edebilmek için kayıt zorunludur.",
    },
    {
      id: "faq-2",
      question: "ÜTS kaydı için hangi belgeler gerekir?",
      answer:
        "Genellikle CE belgesi, uygunluk beyanı, ürün etiket ve görseli, GTIN (barkod), firma yetki belgeleri gibi evraklar gereklidir.",
    },
    {
      id: "faq-3",
      question: "Ürünüm yurt dışından geliyor. Yine de ÜTS kaydı gerekir mi?",
      answer:
        "Evet. İthal edilen ürünler için de ithalatçı firma adına ÜTS kaydı yapılmalıdır.",
    },
    {
      id: "faq-4",
      question: "Tıbbi cihaz sınıfı nasıl belirlenir?",
      answer:
        "Tıbbi cihaz sınıflandırması, ürünün risk düzeyine göre (Sınıf I, IIa, IIb, III) yapılır. Bu sınıflama, cihazın kullanım amacı ve invazivliği gibi kriterlere göre belirlenir.",
    },
    {
      id: "faq-5",
      question: "MDR’ye geçiş zorunlu mu?",
      answer:
        "Evet. MDD kapsamında alınmış CE belgeleri belirli tarihlerde geçerliliğini kaybedecek. Bu nedenle MDR’ye uyum zorunludur.",
    },
    {
      id: "faq-6",
      question: "Kozmetik ürünleri de ÜTS’ye kaydetmek zorunda mıyım?",
      answer:
        "Evet. Türkiye’de piyasaya sürülecek kozmetik ürünler için ÜTS bildirimi zorunludur.",
    },
    {
      id: "faq-7",
      question: "CPSR raporu nedir ve kim hazırlar?",
      answer:
        "CPSR (Cosmetic Product Safety Report), kozmetik ürünlerin insan sağlığı açısından güvenli olduğunu kanıtlayan bilimsel rapordur. Tıp, eczacılık, kimya, biyoloji veya toksikoloji alanında eğitim almış uzmanlar tarafından hazırlanabilir.",
    },
    {
      id: "faq-8",
      question: "Sorumlu teknik eleman kimdir ve zorunlu mudur?",
      answer:
        "Evet, kozmetik firmaları için sorumlu teknik eleman zorunludur. Genellikle eczacı, kimyager, biyolog vb. alanlarda eğitim almış kişiler bu görevi üstlenebilir.",
    },
    {
      id: "faq-9",
      question: "Sadece belge hazırlıyor musunuz yoksa kayıt işlemlerini de siz mi yapıyorsunuz?",
      answer:
        "Her iki hizmeti de sunuyoruz. İsterseniz yalnızca belge hazırlığı yapabiliriz, isterseniz tüm süreci (ÜTS, CE, bildiriler vb.) sizin adınıza baştan sona biz yürütebiliriz.",
    },
    {
      id: "faq-10",
      question: "Firmamızı Sağlık Bakanlığı’na nasıl kaydedebilirim?",
      answer:
        "e-Devlet, ÜTS ve EBS sistemi üzerinden kayıt yapılmaktadır. E-imza, faaliyet belgesi, imza sirküleri gibi belgeler gereklidir. Bu süreci sizin adınıza biz tamamlayabiliriz.",
    },
    {
      id: "faq-11",
      question: "Ruhsat başvurusu için hangi belgeler gerekir?",
      answer:
        "CTD formatında ruhsat dosyası (Module 1–5), GMP belgesi, farmasötik kalite verileri, klinik ve preklinik veriler, etiket ve prospektüs taslakları, ruhsat sahibi ve üreticiye ait bilgiler gibi belgeler gerekir.",
    },
    {
      id: "faq-12",
      question: "Ruhsat alma süresi ne kadar sürer?",
      answer:
        "Başvuru türüne ve ürünün niteliğine göre değişmekle birlikte 12–24 ay arasında sürebilir. Eksiklik bildirimleri ve komisyon süreçleri bu süreyi uzatabilir.",
    },
    {
      id: "faq-13",
      question: "Jenerik ürün ile orijinal ürün başvuru süreci farklı mı?",
      answer:
        "Evet. Jenerik ürünlerde biyoeşdeğerlik verileri istenirken, orijinal ürünlerde kapsamlı klinik ve preklinik veri dosyaları gereklidir.",
    },
    {
      id: "faq-14",
      question: "Ruhsat başvurusu ret alırsa ne olur?",
      answer:
        "Kurumdan gelen eksiklik bildirimi veya ret kararı sonrası itiraz hakkı bulunur. Eksiklikler giderilerek başvuru yeniden değerlendirilebilir.",
    },
    {
      id: "faq-15",
      question: "Yurt dışında ruhsatlı ürün için Türkiye’de yeniden ruhsat almak gerekir mi?",
      answer:
        "Evet. Yurt dışı ruhsatlar Türkiye'de doğrudan geçerli değildir. Türkiye için ayrıca ruhsat başvurusu yapılmalıdır. Yurt dışı belgeler destekleyici olarak sunulabilir.",
    },
    {
      id: "faq-16",
      question: "Ruhsat danışmanlık hizmetiniz neleri kapsıyor?",
      answer:
        "CTD dosya hazırlığı ve kontrolü, eksikliklere teknik destek, EBS başvuruları, kurum iletişimi ve takip, ruhsat devri, varyasyon ve yenileme işlemleri danışmanlık kapsamındadır.",
    },
    {
      id: "faq-17",
      question: "Ruhsat sonrası varyasyonlar için de destek alabilir miyim?",
      answer:
        "Evet. Ruhsat sonrası bildirime tabi (tip-IA), onaya tabi (tip-IB ve tip-II) tüm varyasyon işlemleriniz için teknik destek sunuyoruz.",
    },
    {
      id: "faq-18",
      question: "Medikal çeviri hizmetleriniz hangi dilleri kapsıyor?",
      answer:
        "Ağırlıklı olarak İngilizce-Türkçe ve Türkçe-İngilizce arasında medikal çeviri hizmeti sunuyoruz. Talebe göre diğer diller için de destek verebiliriz.",
    },
    {
      id: "faq-19",
      question: "Dosya çevirilerinde medikal terminolojiye dikkat ediliyor mu?",
      answer:
        "Kesinlikle. Tüm çeviriler, medikal alanda deneyimli çevirmenler tarafından yapılır ve terminolojiye uygunluk titizlikle sağlanır.",
    },
    {
      id: "faq-20",
      question: "Danışmanlık süreci nasıl işliyor?",
      answer:
        "İlk olarak ürün analizi yapılır. Ardından bir yol haritası hazırlanır ve teknik belgeler oluşturulur. Gerekirse başvurular sizin adınıza gerçekleştirilir.",
    },
    {
      id: "faq-21",
      question: "Hizmet ücretiniz sabit mi?",
      answer:
        "Ücretler ürün sayısı, sınıfı ve kapsamına göre değişiklik gösterir. Detaylı teklif için bizimle iletişime geçebilirsiniz.",
    },
    {
      id: "faq-22",
      question: "Süreç boyunca sizle nasıl iletişim kurabilirim?",
      answer:
        "Tüm müşterilerimize e-posta ve telefon üzerinden kesintisiz destek sağlıyoruz. Süreç boyunca online toplantılarla iletişim kuruyoruz.",
    }
  ];

  return (
    <div className="accordion accordion-style-four" id="accordionOne">
      {accordionItems.map((item, index) => (
        <div className="accordion-item" key={item.id}>
          <div className="accordion-header" id={`heading-${index}`}>
            <button
              className={`accordion-button ${index === 0 ? "" : "collapsed"}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse-${index}`}
              aria-expanded={index === 0 ? "true" : "false"}
              aria-controls={`collapse-${index}`}
            >
              <span>{`0${index + 1}.`}</span> {item.question}
            </button>
          </div>
          <div
            id={`collapse-${index}`}
            className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
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
