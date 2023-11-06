import Slider from "../components/Slider/Slider";
import SectionBigProject from "../components/pages/Home/SectionBigProject";
import { useTranslation } from "react-i18next";

export default function Home() {
  // Hiển thị mã ngôn ngữ hiện tại
  const { t } = useTranslation("translationHome");
  const { i18n } = useTranslation();
  const LANG_CODE = i18n.language;
  // console.log(i18n.language);
  const programs = [
    {
      vi: {
        title: "Nấu ăn cho em 1",
        time: "9/2023 - 3/2024",
        description: "Trẻ em là nhóm dễ bị tổn thương và chịu ảnh hưởng mạnh từ nghèo đói...",
        progress: {
          current: "18.000.000đ",
          goal: "20.000.000đ",
          percentage: "80%",
        },
        contributors: 34562,
        videoUrl: "https://www.youtube.com/embed/543jwFfCZvg?si=YJz93RMtk3DgjiTk",
      },
      en: {
        title: "Cooking for Kids 1",
        time: "9/2023 - 3/2024",
        description: "Children are a vulnerable group and are heavily affected by poverty...",
        progress: {
          current: "18,000,000đ",
          goal: "20,000,000đ",
          percentage: "80%",
        },
        contributors: 34562,
        videoUrl: "https://www.youtube.com/embed/543jwFfCZvg?si=YJz93RMtk3DgjiTk",
      },
      ja: {
        title: "子供のための料理 1",
        time: "9/2023 - 3/2024",
        description: "子供は脆弱なグループであり、貧困の影響を強く受けています...",
        progress: {
          current: "18,000,000đ",
          goal: "20,000,000đ",
          percentage: "80%",
        },
        contributors: 34562,
        videoUrl: "https://www.youtube.com/embed/543jwFfCZvg?si=YJz93RMtk3DgjiTk",
      },
      fr: {
        title: "Cuisiner pour les enfants 1",
        time: "9/2023 - 3/2024",
        description: "Les enfants sont un groupe vulnérable et sont fortement touchés par la pauvreté...",
        progress: {
          current: "18,000,000đ",
          goal: "20,000,000đ",
          percentage: "80%",
        },
        contributors: 34562,
        videoUrl: "https://www.youtube.com/embed/543jwFfCZvg?si=YJz93RMtk3DgjiTk",
      },
    },
    {
      vi: {
        title: "Nấu ăn cho em 1",
        time: "9/2023 - 3/2024",
        description: "Trẻ em là nhóm dễ bị tổn thương và chịu ảnh hưởng mạnh từ nghèo đói...",
        progress: {
          current: "18.000.000đ",
          goal: "20.000.000đ",
          percentage: "80%",
        },
        contributors: 34562,
        videoUrl: "https://www.youtube.com/embed/543jwFfCZvg?si=YJz93RMtk3DgjiTk",
      },
      en: {
        title: "Cooking for Kids 1",
        time: "9/2023 - 3/2024",
        description: "Children are a vulnerable group and are heavily affected by poverty...",
        progress: {
          current: "18,000,000đ",
          goal: "20,000,000đ",
          percentage: "80%",
        },
        contributors: 34562,
        videoUrl: "https://www.youtube.com/embed/543jwFfCZvg?si=YJz93RMtk3DgjiTk",
      },
      ja: {
        title: "子供のための料理 1",
        time: "9/2023 - 3/2024",
        description: "子供は脆弱なグループであり、貧困の影響を強く受けています...",
        progress: {
          current: "18,000,000đ",
          goal: "20,000,000đ",
          percentage: "80%",
        },
        contributors: 34562,
        videoUrl: "https://www.youtube.com/embed/543jwFfCZvg?si=YJz93RMtk3DgjiTk",
      },
      fr: {
        title: "Cuisiner pour les enfants 1",
        time: "9/2023 - 3/2024",
        description: "Les enfants sont un groupe vulnérable et sont fortement touchés par la pauvreté...",
        progress: {
          current: "18,000,000đ",
          goal: "20,000,000đ",
          percentage: "80%",
        },
        contributors: 34562,
        videoUrl: "https://www.youtube.com/embed/543jwFfCZvg?si=YJz93RMtk3DgjiTk",
      },
    }
  ];
  
  return (
    <div>
      <Slider />
      <SectionBigProject />
      <div className="text-center py-16">
        <h1 className="text-5xl font-bold">{t("detail.title")}</h1>
        {/* <h2 className="text-3xl font-bold">{t("index.next")}</h2> */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-40 py-8">
        {programs.map((program, index) => (
          <div
            className="bg-white p-8 rounded-lg shadow-md"
            id={`donate${index}`}
            key={index}
          >
                        <h3 className="text-4xl font-bold mb-4">{program[LANG_CODE].title}</h3>
                        <p>
                  <strong className="text-2xl font-bold mb-4">{t("index.time")}: {program[LANG_CODE].time}</strong>
                </p>
            <div >
                <iframe
                  className="rounded-lg shadow-md"
                  width="100%" // Thay đổi kích thước theo ý muốn, ví dụ: "100%" cho toàn bộ chiều rộng
                  height="400" // Thay đổi kích thước theo ý muốn, ví dụ: "400" cho chiều cao 400 pixels
                  src={program[LANG_CODE].videoUrl}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
              
                <p className="text-justify text-gray-700 my-4 ">
                  {program[LANG_CODE].description}
                </p>
              </div>
              
            </div>
            <div className="flex items-center justify-between mb-4">
              <div className="text-sm font-semibold text-gray-600">
                {program[LANG_CODE].progress.current} / {program[LANG_CODE].progress.goal}
              </div>
              <div className="text-sm font-semibold text-green-500">
                {program[LANG_CODE].progress.percentage}
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
                    {program[LANG_CODE].contributors}
                  </span>
                </div>
              </div>
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-green-200">
                <div
                  style={{ width: program[LANG_CODE].progress.percentage }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
                ></div>
              </div>
            </div>
            <div className="flex items-center justify-between mt-4">
            <div className="flex items-center">
              <img
                src="/ct.png"
                alt="Image"
                className="mr-2"
                style={{ width: '25px', height: '25px' }}
              />
              <button className="btn btn-primary">
                {t("SectionBigProject.detail")}
              </button>
            </div>
                <div className="flex items-center">
                <img
                src="/dn.jpg"
                alt="Image"
                className="mr-2"
                style={{ width: '30px', height: '30px' }}
              />

                  <button className="btn btn-success">
                    {t("index.donate")}
                  </button>
                </div>
                <div className="flex items-center">
                <img
                src="/bc.jpg"
                alt="Image"
                className="mr-2"
                style={{ width: '40px', height: '40px' }}
              />                  <a href="about.html" className="btn btn-link">
                    {t("index.report")}
                  </a>
                </div>
              </div>


          </div>
        ))}
        {/* Hiển thị video */}
      </div>

      {/* dự án đang thực hiện */}
      <div className="text-center py-16">
        {/* <h1 className="text-3xl font-bold">{t("detail.title")}</h1> */}
        <h2 className="text-5xl font-bold">{t("index.next")}</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-40 py-8">
        {programs.map((program, index) => (
          <div
            className="bg-white p-8 rounded-lg shadow-md"
            id={`donate${index}`}
            key={index}
          >
            <h3 className="text-4xl font-bold mb-4">{program[LANG_CODE].title}</h3>
            <p>
                  <strong className="text-2xl font-bold mb-4">{t("index.time")}: {program[LANG_CODE].time}</strong>
                </p>
            <div >
                <iframe
                  className="rounded-lg shadow-md"
                  width="100%" // Thay đổi kích thước theo ý muốn, ví dụ: "100%" cho toàn bộ chiều rộng
                  height="400" // Thay đổi kích thước theo ý muốn, ví dụ: "400" cho chiều cao 400 pixels
                  src={program[LANG_CODE].videoUrl}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
               
                <p className="text-justify text-gray-700 my-4">
                  {program[LANG_CODE].description}
                </p>
              </div>
           
            </div>
            <div className="flex items-center justify-between mb-4">
              <div className="text-sm font-semibold text-gray-600">
                {program[LANG_CODE].progress.current} / {program[LANG_CODE].progress.goal}
              </div>
              <div className="text-sm font-semibold text-green-500">
                {program[LANG_CODE].progress.percentage}
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
                    {program[LANG_CODE].contributors}
                  </span>
                </div>
              </div>
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-green-200">
                <div
                  style={{ width: program[LANG_CODE].progress.percentage }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
                ></div>
              </div>
            </div>
            <div className="flex items-center justify-between mt-4">
            <div className="flex items-center">
              <img
                src="/ct.png"
                alt="Image"
                className="mr-2"
                style={{ width: '25px', height: '25px' }}
              />
              <button className="btn btn-primary">
                {t("SectionBigProject.detail")}
              </button>
            </div>
                <div className="flex items-center">
                <img
                src="/dn.jpg"
                alt="Image"
                className="mr-2"
                style={{ width: '30px', height: '30px' }}
              />

                  <button className="btn btn-success">
                    {t("index.donate")}
                  </button>
                </div>
                <div className="flex items-center">
                <img
                src="/bc.jpg"
                alt="Image"
                className="mr-2"
                style={{ width: '40px', height: '40px' }}
              />                  <a href="about.html" className="btn btn-link">
                    {t("index.report")}
                  </a>
                </div>
              </div>
          </div>
        ))}
   
      </div>
    </div>

    // đang thực hiện
  );
}
