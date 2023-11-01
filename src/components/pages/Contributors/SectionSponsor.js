import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const SectionSponsor = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  const sponsors = [
    {
      id: 1,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/FPT_logo_2010.svg/800px-FPT_logo_2010.svg.png",
    },
    {
      id: 2,
      image:
        "data:image/png;base64,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",
    },
    {
      id: 3,
      image:
        "data:image/jpeg;base64,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",
    },
    {
      id: 4,
      image:
        "https://static.topcv.vn/company_logos/cong-ty-tnhh-impl-viet-nam-5e9e72bb2d2db.jpg",
    },
    {
      id: 5,
      image:
        "https://static.topcv.vn/company_logos/cong-ty-tnhh-impl-viet-nam-5e9e72bb2d2db.jpg",
    },
  ];

  return (
    <div className="py-10">
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {sponsors.map((sponsor) => (
          <div key={sponsor.id} className="px-20">
            <div className="flex flex-col justify-center items-center">
              <div>
                <img src={sponsor.image} alt="" className="rounded-full w-20" />
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default SectionSponsor;
