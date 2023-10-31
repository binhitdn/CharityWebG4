import React from "react";
import Button from "../../Button";
// import TopBarProgress from "react-topbar-progress-indicator";

// TopBarProgress.config({
//   barColors: {
//     0: "#f00",
//     "1.0": "#0f0",
//   },
//   shadowBlur: 5,
// });

function SectionBigProject() {
  return (
    <section className="py-12">
      {/* <TopBarProgress /> */}
      <div className="container mx-auto">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
            <div className="mb-8">
              <div className="mb-8">
                <span className="text-lg">Dự án lớn</span>
                <h2 className="text-4xl font-bold mb-4 text-blue-900">
                  Charity project for the sustainable development of Co tu
                  minority people in Pà-Ong Village
                </h2>
              </div>
              <p className="mb-8">
                Ôn Bích Hà sử dụng thực phẩm để làm đẹp, trong đó có lòng trắng
                trứng, tác dụng cấp ẩm cho da và se lỗ chân lông. Hàng tuần,
                diễn viên massage mặt với lòng trắng trứng theo vòng tròn, cùng
                vùng cổ, cằm. Da thuộc dạng khô, vì thế sau mỗi lần.
              </p>
              <div className="flex mb-8">
                <b>18.000.000VND/20.000.000VND</b>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full mb-4">
                <div
                  className="h-2 bg-blue-600 rounded-full"
                  style={{ width: "80%" }}
                ></div>
              </div>
            </div>
            <div>
              <p>Địa điểm</p>
            </div>
            <a href="about.html" className="btn btn-primary text-blue-600">
              Xem chi tiết
            </a>
            <Button className="btn">Be A Contribute</Button>
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <div className="pt-16">
              <iframe
                className="w-full"
                height="315"
                src="https://www.youtube.com/embed/V9KpYH9o1KM?si=YzbjKd2PbTPZL2uw"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              <p>
                Ôn Bích Hà sử dụng thực phẩm để làm đẹp, trong đó có lòng trắng
                trứng, tác dụng cấp ẩm cho da và se lỗ chân lông. Hàng tuần,
                diễn viên massage mặt với lòng trắng trứng theo vòng tròn, cùng
                vùng cổ, cằm. Da thuộc dạng khô, vì thế sau mỗi lần.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionBigProject;
