import React from "react";
import Button from "../../Button";
import { useTranslation } from "react-i18next";

function SectionBigProject() {
  const { i18n } = useTranslation();
  const LANG_CODE = i18n.language;
  const programbig = {
    vi: {
      title:
        "DỰ ÁN PHÁT TRIỂN CỤM DÂN CƯ PÀ-CĂNG MỚI, THÔN PÀ ONG, XÃ CÀ DY, HUYỆN NAM GIANG",
      content:
        "Cụm dân cư Pà-Căng mới cách cầu Xơi đường Hồ Chí Minh 3km đường bộ. Làng nằm bên bờ con sông Dakmy hiền hòa và phía sau là những dãy núi mây phủ sớm chiều êm đềm nên thơ. ...",
      video: "https://www.youtube.com/embed/3_PaIaf8DhVrQ",
    },
    en: {
      title:
        "DEVELOPING NEW PA-CANG VILLAGE, CA DY COMMUNE, NAM GIANG DISTRICT",
      content:
        "The new Pa-Cang residential cluster is 3 km by road from Xoi bridge on Ho Chi Minh Road. The village is located on the banks of the gentle Dak-my River. Behind the village are the cloud-covered mountains with peaceful scenery. ...",
      video: "https://www.youtube.com/embed/3_JHZXBMUho",
    },
    ja: {
      title: "ベトナムのコトゥ民族のパキャン村の持続可能な発展",
      content:
        "新しいパキャン住宅群は、ホーチミン道路のソイ橋から歩いて 3 km の場所にあります。 村は穏やかなダクミー川のほとりにあります。 村の後ろには雲に覆われた山々があり、のどかな風景が広がっています。 ...",
      video: "https://youtube.com/embed/aAqwxCyBdRE",
    },
    fr: {
      title:
        "Village Pa-Cang du peuple Cotu au Vietnam le développement durable",
      content:
        "Nous sommes au centre du Vietnam, près de Da Nang. Le village de montagne Pa-Cang se trouve à 3 km du pont Xoi, sur la route Ho Chi Minh. Il s'étend sur les rives de la douce rivière Dak-My. ...",
      video: "https://youtube.com/embed/d1A8bHeoQOA",
    },
  };

  const { title, content, video } = programbig[LANG_CODE];

  return (
    <section className="py-12">
      <div className="container mx-auto">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
            <div className="mb-8">
              <div className="mb-8">
                <span className="text-lg">Dự án lớn</span>
                <h2 className="text-4xl font-bold mb-4 text-blue-900">
                  {title}
                </h2>
              </div>
              <p className="mb-8">{content}</p>
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
                src={video}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionBigProject;
