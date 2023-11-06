import React from "react";
import SectionSponsor from "../../components/pages/Contributors/SectionSponsor";
import Slider from "../../components/Slider/Slider";

const contributors = [
  {
    id: 1,
    name: "Bruce Roberts",
    role: "Volunteer leader",
    avatar:
      "https://cpad.ask.fm/191/071/915/-59996988-202kp5r-5mgotbogtgnq9hf/original/avatar.jpg",
    facebook: "#",
    twitter: "#",
    website: "#",
  },
  {
    id: 2,
    name: "John Doe",
    role: "Volunteer",
    avatar:
      "https://cpad.ask.fm/191/071/915/-59996988-202kp5r-5mgotbogtgnq9hf/original/avatar.jpg",
    facebook: "#",
    twitter: "#",
    website: "#",
  },
  {
    id: 3,
    name: "Helen Keller",
    role: "Creative Director",
    avatar:
      "https://cpad.ask.fm/191/071/915/-59996988-202kp5r-5mgotbogtgnq9hf/original/avatar.jpg",
    facebook: "#",
    twitter: "#",
    website: "#",
  },
  // Add more contributors as needed
];

const Contributor = () => {
  return (
    <div>
      <Slider />
      <div className="area">
        <div className="container">
          {/* Tinh nguyen vien */}

          <div className="row justify-center">
            <div className="section-tittle section-tittle2 text-center mb-10">
              <h2 className="text-3xl font-bold pt-10">Tình nguyện viên</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
              {contributors.map((contributor) => (
                <div key={contributor.id} className="px-20">
                  <div className="flex flex-col justify-center items-center">
                    <div>
                      <img
                        src={contributor.avatar}
                        alt=""
                        className="rounded-full w-40 h-40"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{contributor.name}</h3>
                      <p>{contributor.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Nhà tài trợ */}
          <div className="section-tittle section-tittle2 text-center mb-10">
            <h2 className="text-3xl font-bold pt-10">Nhà hảo tâm</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
            {contributors.map((contributor) => (
              <div key={contributor.id} className="px-20">
                <div className="flex flex-col justify-center items-center">
                  <div>
                    <img
                      src={contributor.avatar}
                      alt=""
                      className="rounded-full w-40 h-40"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{contributor.name}</h3>
                    <p>{contributor.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="row justify-center pt-20">
            <div className="col-xl-12 col-lg-7 col-md-10 col-sm-10">
              <div className="section-tittle section-tittle2 text-center mb-10">
                <h2 className="text-3xl font-bold">Người sáng lập</h2>
              </div>
            </div>
          </div>
          <div className="row justify-center">
            <div className="px-20">
              <img
                src="/contribute/founderavt.jpg"
                alt=""
                className="rounded-full w-40 h-40 mx-auto"
              />
              <div className="text-center pb-10 pt-5">
                <h3 className="text-xl font-bold">Đinh Thị Đông Phương</h3>
                <p className="text-center text-purple-500  w-1/2 mx-auto italic text-2xl">
                  Với niềm đam mê không ngừng, chúng tôi đã thực hiện các dự án
                  và chương trình từ thiện có tầm ảnh hưởng, giúp cải thiện cuộc
                  sống của những người cần giúp đỡ nhất
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-center pt-20">
            <div className="col-xl-12 col-lg-7 col-md-10 col-sm-10">
              <div className="section-tittle section-tittle2 text-center mb-10">
                <h2 className="text-3xl font-bold">Nhà tài trợ</h2>
              </div>
            </div>
          </div>
          <SectionSponsor />
        </div>
      </div>
    </div>
  );
};

export default Contributor;
