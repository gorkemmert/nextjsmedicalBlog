import Link from "next/link";
import Social from "./Social";

const Footer = () => {
  const footerLinks = [
    {
      title: "Linkler",
      links: [
        { label: "Ana Sayfa", href: "/" },
        // { label: "Pricing", href: "/pages-menu/pricing" },
        { label: "Hakkımızda", href: "/pages-menu/about-us-v3" },
        { label: "Hizmetlerimiz", href: "/pages-menu/service-v1" },
        // { label: "Blog", href: "/blog/blog-v1" },
      ],
      classes: "col-lg-2 col-sm-4 ms-auto mb-30",
    },
    {
      title: "Help & Support",
      links: [
        { label: "SSS", href: "/pages-menu/faq" },
        // { label: "Blog", href: "/blog/blog-v1" },
        { label: "Bize Ulaşın", href: "/contact" },
        // { label: "Destek", href: "/contact" },
      ],
      classes: "col-lg-3 col-sm-4 mb-30",
    },
  ];

  return (
    <div className="row">
      <div className="col-xl-3 col-lg-2 footer-intro mb-40">
        <div className="logo">
          <Link href="/">
            <img src="/images/logo/logo_01.png" alt="" width={95} />
          </Link>
        </div>
        <img
          src="/images/shape/shape_24.svg"
          alt="shape"
          className="mt-60 d-none d-lg-block"
        />
      </div>
      {/* End .col-xl-3 */}

      {footerLinks.map((link, index) => (
        <div key={index} className={link.classes}>
          <h5 className="footer-title tx-dark fw-500">{link.title}</h5>
          <ul className="footer-nav-link style-none">
            {link.links.map((linkItem, index) => (
              <li key={index}>
                <Link href={linkItem.href}>{linkItem.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
      {/* End menu data */}

      <div className="col-xl-3 col-sm-4 mb-30">
        <h5 className="footer-title tx-dark fw-500">Adresimiz</h5>
        <p className="fs-17">
          Balgat Mah. Ceyhun Atuf Kansu Cad. 36/6 Çankaya/ANKARA
        </p>
        <a href="mailto:januinc@company.com" className="email tran3s fs-17">
          info@pharmalect.com
        </a>
        <br />
        <a href="tel:+905479971342" className="mobile tran3s fs-20 mt-20 mb-30">
          +905479971342
        </a>

        {/* <Social /> */}
      </div>
    </div>
  );
};

export default Footer;
