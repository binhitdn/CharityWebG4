import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper";
import { useTranslation } from "react-i18next";
const Slider = () => {
  const { t } = useTranslation("translationHome");
  return (
    <div id="col-1862543926" className="col small-12 large-12">
    <div className="col-inner">
      <div className="row row-collapse align-middle align-center" id="row-1166584783">
        <div id="col-451306222" className="col medium-9 small-12 large-9">
          <div className="col-inner">
            <div className="img has-hover x md-x lg-x y md-y lg-y" id="image_19231274">
              <div className="img-inner dark">
                <img
                  width="1000"
                  height="600"
                  src="https://smileeyecharity.org/wp-content/uploads/2023/12/Thiet-ke-chua-co-ten.png"
                  className="attachment-original size-original wvs-archive-product-image lazyautosizes lazyloaded"
                  alt=""
                  decoding="async"
                  data-src="https://smileeyecharity.org/wp-content/uploads/2023/12/Thiet-ke-chua-co-ten.png"
                  data-srcset="https://smileeyecharity.org/wp-content/uploads/2023/12/Thiet-ke-chua-co-ten.png 1920w, https://smileeyecharity.org/wp-content/uploads/2023/12/Thiet-ke-chua-co-ten-711x400.png 711w, https://smileeyecharity.org/wp-content/uploads/2023/12/Thiet-ke-chua-co-ten-768x432.png 768w"
                  data-sizes="auto"
                  sizes="855px"
                />
                <style>{`
                  #image_19231274 {
                    margin-top:20px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100%; /* Đảm bảo ảnh chiếm hết chiều cao của khung chứa */
                  }
                `}</style>
              </div>
            </div>
          </div>
          <style>{`
            #col-451306222 > .col-inner {
              padding: 0px 0px 0px 0px;
            }
          `}</style>
        </div>
      </div>
      <style>{`
        #row-1166584783 > .col > .col-inner {
          padding: 0px 0px 0px 0px;
        }
      `}</style>
    </div>
    <div id="gap-205643743" className="gap-element clearfix" style={{ display: 'block', height: 'auto' }}>
      <style>{`
        #gap-205643743 {
          padding-top: 10px;
        }
      `}</style>
    </div>
    <div className="row" id="row-741862506">
      <div id="col-476504646" className="col small-12 large-12" style={{ padding: '0px 100px' }}>
        <div className="col-inner">
          <div id="text-1008644865" className="mb-2 text-2xl text-justify">
            <p style={{ textIndent: '30px', textAlign: 'justify', lineHeight: '1.6', margin: '20px 0' }}>
              <span style={{ fontWeight: 400, color: '#333', fontSize: '20px' }}>
              {t("slider.title")}

              </span>
            </p>
            <p style={{ textIndent: '30px', textAlign: 'justify', lineHeight: '1.6', margin: '20px 0' }}>
              <span style={{ fontWeight: 400, color: '#333', fontSize: '20px' }}>
              {t("slider.title1")}

              </span>
            </p>
            <p style={{ textIndent: '30px', textAlign: 'justify', lineHeight: '1.6', margin: '20px 0' }}>
              <span style={{ fontWeight: 400, color: '#333', fontSize: '20px' }}>
              {t("slider.title2")}

              </span>
            </p>
            <style>{`
              #text-1008644865 {
                text-align: left;
              }
            `}</style>
          </div>
          <p className="text-xl" style={{ textIndent: '30px', textAlign: 'right', marginTop: '20px' }}>
            <span style={{ fontSize: '120%', color: '#42b89b' }}>
              <Link href="/contributors">
            <a style={{ color: '#42b89b', textDecoration: 'underline', fontWeight: 'bolder' }}>
              {t("slider.title3")}
            </a>
          </Link>
            </span>
          </p>

        </div>
      </div>
    </div>
  </div>
  );
};
export default Slider;
