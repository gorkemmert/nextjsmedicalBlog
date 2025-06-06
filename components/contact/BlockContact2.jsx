import Image from "next/image";

const BlockContact2 = () => {
  const addressBlocks = [
    {
      icon: "/images/icon/icon_161.svg",
      title: "Adresimiz",
      content: (
        <>
          Ceyhun Atuf Kansu Caddesi, No: 36/6, Balgat Mahallesi, 06520
          <br />
          Çankaya, ANKARA
        </>
      ),
    },
    {
      icon: "/images/icon/icon_162.svg",
      title: "İletişim Bilgileri",
      content: (
        <>
          Bizi Arayın <br />
          <a href="tel:310.841.5500" className="call">
            +905366383812
          </a>
        </>
      ),
    },
    // {
    //   icon: "/images/icon/icon_163.svg",
    //   title: "Live Support",
    //   content: (
    //     <>
    //       Urgent go to live chat portal <br />
    //       <a href="mailto:name@email.com" className="webaddress">
    //         www.supportlive.com
    //       </a>
    //     </>
    //   ),
    // },
  ];

  return (
    <>
      {addressBlocks.map((block, index) => (
        <div className="address-block-three d-flex mb-70 lg-mb-40" key={index}>
          <div className="icon">
            <Image width={30} height={30} src={block.icon} alt="icon" />
          </div>
          <div className="text">
            <h5 className="title">{block.title}</h5>
            <p>{block.content}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default BlockContact2;
