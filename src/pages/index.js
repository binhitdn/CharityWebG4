import Slider from "../components/Slider/Slider";
import SectionBigProject from "../components/pages/Home/SectionBigProject";
import { useTranslation } from "react-i18next";

export default function Home() {
  // Hiển thị mã ngôn ngữ hiện tại
  const { t } = useTranslation("translationHome");
  const { i18n } = useTranslation();
  console.log(i18n.language);
  const programs = [
    // Chương trình 1
    {
      title: "Nấu ăn cho em 1",
      time: "9/2023 - 3/2024",
      description:
        "Trẻ em là nhóm dễ bị tổn thương và chịu ảnh hưởng mạnh từ nghèo đói...",
      progress: {
        current: "18.000.000đ",
        goal: "20.000.000đ",
        percentage: "80%",
      },
      contributors: 34562,
      videoUrl: "https://www.youtube.com/embed/543jwFfCZvg?si=YJz93RMtk3DgjiTk",
    },
    // Chương trình 2
    {
      title: "Nấu ăn cho em 2",
      time: "9/2023 - 3/2024",
      description:
        "Trẻ em là nhóm dễ bị tổn thương và chịu ảnh hưởng mạnh từ nghèo đói...",
      progress: {
        current: "20.000.000đ",
        goal: "20.000.000đ",
        percentage: "100%",
      },
      contributors: 34562,
      videoUrl: "https://www.youtube.com/embed/543jwFfCZvg?si=YJz93RMtk3DgjiTk",
    },
  ];
  
  return (
    <div>
      <Slider />
      <SectionBigProject />
      <div className="text-center py-16">
        <h1 className="text-3xl font-bold">{t("detail.title")}</h1>
        <h2 className="text-3xl font-bold">{t("index.next")}</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-40 py-8">
        {programs.map((program, index) => (
          <div
            className="bg-white p-8 rounded-lg shadow-md"
            id={`donate${index}`}
            key={index}
          >
            <h3 className="text-2xl font-bold mb-4">{program.title}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p>
                  <strong>{t("index.time")}: {program.time}</strong>
                </p>
                <p className="text-justify text-gray-700 my-4">
                  {program.description}
                </p>
              </div>
              <div className="w-1/2">
                <iframe
                  className="rounded-lg shadow-md"
                  width="300"
                  height="200"
                  src={programs[0].videoUrl} // Sử dụng URL video từ chương trình đầu tiên
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="flex items-center justify-between mb-4">
              <div className="text-sm font-semibold text-gray-600">
                {program.progress.current} / {program.progress.goal}
              </div>
              <div className="text-sm font-semibold text-green-500">
                {program.progress.percentage}
              </div>
            </div>
            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <div>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200">
                    {t("index.donation")}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs font-semibold inline-block text-green-600">
                    {program.contributors}
                  </span>
                </div>
              </div>
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-green-200">
                <div
                  style={{ width: program.progress.percentage }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
                ></div>
              </div>
            </div>
            <div className="flex items-center justify-between mt-4">
              <button className="btn bg-blue-500 hover:bg-blue-700 text-white mr-2">
              {t("SectionBigProject.detail")}
              </button>
              <button className="btn bg-green-500 hover:bg-green-700 text-white mr-2">
                {t("index.donate")}
              </button>
              <a href="about.html" className="text-blue-500 hover:underline">
                {t("index.report")}
              </a>
            </div>
          </div>
        ))}
        {/* Hiển thị video */}
      </div>
    </div>
  );
}
