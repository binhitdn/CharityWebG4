import React from "react";

const contributors = [
  {
    id: 1,
    name: "Bruce Roberts",
    role: "Volunteer leader",
    avatar:
      "https://www.vietnamfineart.com.vn/wp-content/uploads/2023/07/anh-avatar-dep-cho-con-gai-1.jpg",
    facebook: "#",
    twitter: "#",
    website: "#",
  },
  {
    id: 2,
    name: "John Doe",
    role: "Volunteer",
    avatar:
      "https://www.vietnamfineart.com.vn/wp-content/uploads/2023/07/anh-avatar-dep-cho-con-gai-1.jpg",
    facebook: "#",
    twitter: "#",
    website: "#",
  },
  {
    id: 3,
    name: "Helen Keller",
    role: "Creative Director",
    avatar:
      "https://www.vietnamfineart.com.vn/wp-content/uploads/2023/07/anh-avatar-dep-cho-con-gai-1.jpg",
    facebook: "#",
    twitter: "#",
    website: "#",
  },
  // Add more contributors as needed
];

const Contributor = () => {
  return (
    <div className="area">
      <div className="container">
        {/* Tinh nguyen vien */}
        <div className="row justify-center">
          <div className="section-tittle section-tittle2 text-center mb-10">
            <h2 className="text-3xl font-bold pt-10">Tình nguyện viên</h2>
          </div>
          <div className="flex justify-center ">
            {contributors.map((contributor) => (
              <div className="px-20" key={contributor.id}>
                <div>
                  <div>
                    <img
                      src={contributor.avatar}
                      alt=""
                      className="rounded-full w-40 h-40"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold">{contributor.name}</h3>
                    <p>{contributor.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Nhà tài trợ */}
        <div className="row justify-center">
          <div className="section-tittle section-tittle2 text-center mb-10">
            <h2 className="text-3xl font-bold pt-10">Nha tai tro</h2>
          </div>
          <div className="flex justify-center ">
            {contributors.map((contributor) => (
              <div className="px-20" key={contributor.id}>
                <div>
                  <div>
                    <img
                      src={contributor.avatar}
                      alt=""
                      className="rounded-full w-40 h-40"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold">{contributor.name}</h3>
                    <p>{contributor.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="row justify-center">
          <div className="col-xl-12 col-lg-7 col-md-10 col-sm-10">
            <div className="section-tittle section-tittle2 text-center mb-10">
              <h2 className="text-3xl font-bold">Người sáng lập</h2>
            </div>
          </div>
        </div>
        <div className="row justify-center">
          <div className="px-20">
            <img
              src="https://www.vietnamfineart.com.vn/wp-content/uploads/2023/07/anh-avatar-dep-cho-con-gai-1.jpg"
              alt=""
              className="rounded-full w-40 h-40 mx-auto"
            />
            <div className="text-center">
              <h3 className="text-xl font-bold">Bruce Roberts</h3>
              <p>Volunteer leader</p>
            </div>
          </div>
          <div className="px-20 ">
            {
              "Chúng tôi đã tạo ra một nền tảng để kết nối những người có nhu cầu với những người có thể giúp đỡ. Chúng tôi tin rằng mỗi người đều có thể làm điều gì đó để giúp đỡ người khác và tạo ra một thế giới tốt đẹp hơn."
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contributor;
