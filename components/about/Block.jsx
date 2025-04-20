import Image from "next/image";
import React from "react";

const blocksData = [
  {
    id: 1,
    iconSrc: "/images/icon/icon_152.svg",
    title: " Kaliteli Hizmet",
    content: "Tüm süreçlerde yüksek standartlarda, dikkatli ve özenli danışmanlık hizmeti sunarız.",
    dataAos: "fade-up",
    dataAosDelay: "",
  },
  {
    id: 2,
    iconSrc: "/images/icon/icon_153.svg",
    title: " Hızlı Destek",
    content: "İhtiyacınız olduğunda ulaşabileceğiniz, hızlı geri dönüş sağlayan bir ekibe sahibiz.",
    dataAos: "fade-up",
    dataAosDelay: "100",
  },
  {
    id: 3,
    iconSrc: "/images/icon/icon_154.svg",
    title: "Uygun ve Şeffaf Fiyatlandırma",
    content: "Sunduğumuz hizmetlerde şeffaf ve rekabetçi fiyat politikası izliyoruz.",
    dataAos: "fade-up",
    dataAosDelay: "200",
  },
  {
    id: 4,
    iconSrc: "/images/icon/icon_155.svg",
    title: "%100 Güvenilirlik",
    content: "Tüm çalışmalarımızda gizliliğe, güvene ve profesyonelliğe önem veriyoruz.",
    dataAos: "fade-up",
    dataAosDelay: "300",
  },
  // Add more blocks as needed
];

const Block = () => {
  return (
    <>
      {blocksData.map((block) => (
        <div className="col-sm-6" key={block.id}>
          <div
            className="card-style-twentyFour bg-white mt-30"
            data-aos={block.dataAos}
            data-aos-delay={block.dataAosDelay}
          >
            <div className="icon">
              <Image
                width={45}
                height={42}
                src={block.iconSrc}
                alt="icon"
                className="lazy-img mh-100"
              />
            </div>
            <h4 className="fw-bold tx-dark mt-30 mb-15">{block.title}</h4>
            <p className="fs-18">{block.content}</p>
          </div>
          {/* /.card-style-twentyFour */}
        </div>
      ))}
    </>
  );
};

export default Block;
