import Link from "next/link";
import Header from "@/components/home-page/home-10/Header";
import DefaulHeader from "@/components/header/DefaulHeader";
import Image from "next/image";
export const metadata = {
  title: "404 || PPHARMALECT MEDİKAL ÇEVİRİ VE DANIŞMANLIK HİZMETLERİ",
};
const NotFound = () => {
  return (
    <>
      {/* <!-- 
      =============================================
      Theme Default Menu
      ============================================== 	
      --> */}
        <Header />

      {/* 
      =============================================
      Error Page
      ============================================== 
      */}
      <div className="error-page-content d-flex align-items-center justify-content-center">
        <div className="container">
          <div className="row">
            <div className="col-xxl-6 col-lg-7 m-auto">
              <h3>Sayfa Bulunumadı</h3>
            
              <Link href="/" className="btn-twentyOne fw-500 tran3s">
                Ana Sayfaya Dön
              </Link>
            </div>
          </div>
          <Image
            width={800}
            height={522}
            src="/images/assets/ils_06.svg"
            alt=""
            className="m-auto"
          />
        </div>
        {/* End .container */}

        <Image
          width={1915}
          height={674}
          src="/images/shape/shape_178.svg"
          alt="shape"
          className="shapes shape-one w-100"
        />
      </div>
      {/* /.error-page-content */}
    </>
  );
};

export default NotFound;
