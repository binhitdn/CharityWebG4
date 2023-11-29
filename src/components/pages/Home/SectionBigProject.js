/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import Button from "../../Button";
import { useTranslation } from "react-i18next";
function SectionBigProject() {
  const { t } = useTranslation("translationHome");
  const { i18n } = useTranslation();
  const LANG_CODE = i18n.language;
  const [showForm, setShowForm] = useState(false);
  const [showModalDetail, setShowModalDetail] = useState(false);

  const handleOpenForm = () => {
    setShowForm(true);
  };
  const programbig = {
    vi: {
      title:
        "DỰ ÁN PHÁT TRIỂN CỤM DÂN CƯ PÀ-CĂNG MỚI, THÔN PÀ ONG, XÃ CÀ DY, HUYỆN NAM GIANG",
      time: "Thời gian: 9/2023 - 3/2024",

      content:
        "Cụm dân cư Pà-Căng mới cách cầu Xơi đường Hồ Chí Minh 3km đường bộ. Làng nằm bên bờ con sông Dakmy hiền hòa và phía sau là những dãy núi mây phủ sớm chiều êm đềm nên thơ. ...",
      video: "https://www.youtube.com/embed/543jwFfCZvg",
    },
    en: {
      title:
        "DEVELOPING NEW PA-CANG VILLAGE, CA DY COMMUNE, NAM GIANG DISTRICT",
      time: "Time: 9/2023 - 3/2024",
      content:
        "The new Pa-Cang residential cluster is 3 km by road from Xoi bridge on Ho Chi Minh Road. The village is located on the banks of the gentle Dak-my River. Behind the village are the cloud-covered mountains with peaceful scenery. ...",
      video: "https://www.youtube.com/embed/3_JHZXBMUho",
    },
    ja: {
      title: "ベトナムのコトゥ民族のパキャン村の持続可能な発展",
      time: "時間: 9/2023 - 3/2024",

      content:
        "新しいパキャン住宅群は、ホーチミン道路のソイ橋から歩いて 3 km の場所にあります。 村は穏やかなダクミー川のほとりにあります。 村の後ろには雲に覆われた山々があり、のどかな風景が広がっています。 ...",
      video: "https://youtube.com/embed/aAqwxCyBdRE",
    },
    fr: {
      title:
        "Village Pa-Cang du peuple Cotu au Vietnam le développement durable",
      time: "Time: 9/2023 - 3/2024",

      content:
        "Nous sommes au centre du Vietnam, près de Da Nang. Le village de montagne Pa-Cang se trouve à 3 km du pont Xoi, sur la route Ho Chi Minh. Il s'étend sur les rives de la douce rivière Dak-My. ...",
      video: "https://youtube.com/embed/d1A8bHeoQOA",
    },
  };

  const { title, time, content, video } = programbig[LANG_CODE];
  const [tymCount, setTymCount] = useState(0);
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    // Kiểm tra xem đã lưu trạng thái tymCount trong Local Storage chưa
    const savedTymCount = localStorage.getItem("tymCount");
    if (savedTymCount) {
      // Nếu có, sử dụng giá trị từ Local Storage
      setTymCount(parseInt(savedTymCount, 10));
    }
  }, []);

  // Hàm xử lý khi click vào trái tim
  const handleTymClick = () => {
    const newTymCount = tymCount + 1;

    // Cập nhật giá trị tymCount trong Local Storage
    localStorage.setItem("tymCount", newTymCount.toString());

    // Cập nhật trạng thái tymCount trong React
    setTymCount(newTymCount);
  };
  const handleShareClick = () => {
    const linkToCopy = "https://korehalinku.com"; // Thay thế đường dẫn bằng liên kết thực tế cần chia sẻ

    navigator.clipboard
      .writeText(linkToCopy)
      .then(() => {
        alert("đã copy link");
      })
      .catch((error) => {
        console.error("Lỗi khi sao chép liên kết:", error);
      });
  };
  const toggleModal = () => {
    console.log(1);
    setShowModal(!showModal);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Xử lý logic đăng ký tại đây
    // ...
  };
  return (
    <section className="py-12">
      <div className="mb-8 text-center">
        {" "}
        {/* Thêm class text-center để căn giữa nội dung */}
        <span className="text-5xl font-bold">{t("big.project")}</span>
      </div>
      <div className="mb-8 text-center">
        {" "}
        {/* Thêm class text-center để căn giữa nội dung */}
      </div>

      <div className="container mx-auto">
        <div className="flex align-items-start-0 flex-wrap -mx-4">
          <div className="w-full lg:w-3/5 px-4 mb-8">
            <div className="mb-8">
              <div className="mb-8"></div>
              <div className="relative pb-9/16">
                <iframe
                  className="rounded-lg shadow-md"
                  width="100%"
                  height="500"
                  src={video}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-2/5 px-4 mb-8">
            <div className="mb-8 mt-0">
              <div className="mb-8"></div>
              <h2 className="text-3xl font-bold mb-4 text-blue-900">{title}</h2>
              <h4 className="text-3xl font-bold mb-4 ">{time}</h4>

              <p className="mb-8 text-2xl justify-center">{content}</p>
              <p className="mb-8 text-2xl">{content}</p>
            </div>
            <div className="flex items-center space-x-4">
              <a href={t("SectionBigProject.pdf")}>
                {t("SectionBigProject.detail")}
              </a>
              {/* <button className="btn btn-primary text-blue-600">
                {t("SectionBigProject.detail")}
              </button> */}

              <img
                src="/tym.png"
                alt="Image"
                className="w-10 h-10 cursor-pointer"
                onClick={handleTymClick}
              />
              <span className="ml-2">{tymCount}</span>
              <Button className="btn" onClick={toggleModal}>
                Be A Contribute
              </Button>

              {showModal && (
                <div
                  style={{
                    position: "fixed",
                    left: 0,
                    top: 0,
                    zIndex: 1,
                    width: "100%",
                    height: "100%",
                    overflow: "auto",
                    backgroundColor: "rgba(0, 0, 0, 0.4)",
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "#fff",
                      margin: "10% auto",
                      padding: "30px",
                      border: "1px solid #888",
                      width: "700px",
                      borderRadius: "20px",
                      boxShadow: "4px 8px grey",
                    }}
                  >
                    <span
                      style={{
                        color: "#aaa",
                        float: "right",
                        fontSize: "28px",
                        fontWeight: "bold",
                        cursor: "pointer",
                      }}
                      onClick={toggleModal}
                    >
                      &times;
                    </span>
                    <h2>Form đăng ký thành viên</h2>
                    <br />
                    <form onSubmit={handleSubmit}>
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">
                          Tên đẩy đủ của bạn:
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                        />
                      </div>
                      <br />
                      <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Email:</label>
                        <input
                          type="email"
                          className="form-control"
                          id="exampleInputPassword1"
                        />
                        <small id="emailHelp" className="form-text text-muted">
                          We will never share your email with anyone else.
                        </small>
                      </div>
                      <br></br>
                      <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Mật khẩu:</label>
                        <input
                          type="password"
                          className="form-control"
                          id="exampleInputPassword1"
                        />
                      </div>
                      <br />
                      <div className="form-group form-check">
                        <label
                          className="form-check-label"
                          htmlFor="exampleCheck1"
                        >
                          Tôi đồng ý
                        </label>
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="exampleCheck1"
                        />
                      </div>
                      <br />
                      {/* Thêm các trường đăng ký vào đây */}

                      <button type="submit" className="btn btn-primary">
                        Đăng ký
                      </button>
                    </form>
                  </div>
                </div>
              )}

              <button
                className="btn bg-transparent "
                onClick={handleShareClick}
              >
                <span
                  style={{
                    color: "#000",
                    textSize: "20px",
                    fontWeight: "bold",
                  }}
                >
                  Share
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default SectionBigProject;
