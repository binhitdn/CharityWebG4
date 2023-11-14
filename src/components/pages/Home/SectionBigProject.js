import React, { useState, useEffect } from "react";
import Button from "../../Button";
import { useTranslation } from "react-i18next";

function SectionBigProject() {
  const { t } = useTranslation("translationHome");
  const { i18n } = useTranslation();
  const LANG_CODE = i18n.language;
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

  const { title, time, content, video, } = programbig[LANG_CODE];
  const [tymCount, setTymCount] = useState(0);

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
        <h2 className="text-3xl font-bold mb-4 text-blue-900">{title}</h2>
      </div>

      <div className="container mx-auto">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-1/2 px-4">
            <div>
              <iframe
                className="w-full"
                height="450"
                src={video}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
            <div className="mb-8">
              <div className="mb-8"></div>
              <h4 className="text-3xl font-bold mb-4 ">{time}</h4>

              <p className="mb-8 text-2xl">{content}</p>
              <p className="mb-8 text-2xl">{content}</p>
            </div>
            <div className="flex items-center space-x-4">
              <img
                src="/ct.png"
                alt="Image"
                className="w-6 h-6"
                style={{ width: '35px', height: '35px' }}
              />
              <a href="about.html" className="btn btn-primary text-blue-600">
                {t("SectionBigProject.detail")}
              </a>
              <img
                src="/dn.jpg"
                alt="Image"
                className="w-6 h-6"
                style={{ width: '35px', height: '35px' }}
              />
              <Button className="btn" onClick={handleTymClick}>
                Be A Contribute
              </Button>
              <img
                src="/tym.png"
                alt="Image"
                className="w-10 h-10 cursor-pointer"
                onClick={handleTymClick}
              />
              <span className="ml-2">{tymCount}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default SectionBigProject;
