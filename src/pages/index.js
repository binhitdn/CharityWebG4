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
        title:
          "Dự án hỗ trợ xây dựng mô hình kinh tế vườn ở làng Pà Căng mới của người cơ tư",
        time: "9/2023 - 3/2024",
        description:
          "Các hộ gia đình ở làng Pà Căng mới có điện nước đầy đủ. Mỗi hộ có diện tích vườn trên 500m2...",
        progress: {
          current: "18.000.000đ",
          goal: "20.000.000đ",
          percentage: "80%",
        },
        contributors: 34562,
        videoUrl: "https://www.youtube.com/embed/jKwQ8ork7Bw",
      },
      en: {
        title:
          "The project supports the construction of a garden economic model in the new Pa Cang village of private investors",
        time: "9/2023 - 3/2024",
        description:
          "Households in Pa Cang village have full electricity and water. Each household has a garden area of over 500m2...",
        progress: {
          current: "18,000,000đ",
          goal: "20,000,000đ",
          percentage: "80%",
        },
        contributors: 34562,
        videoUrl: "https://www.youtube.com/embed/TKpN7cVX7y8",
      },
      ja: {
        title:
          "コトゥー民族の村における植物園や畜産園モデル構築するためのサポート",
        time: "9/2023 - 3/2024",
        description:
          "コトゥー住民のパキャン村には現在、電気と水が供給されている。人々は自分たちの習...",
        progress: {
          current: "18,000,000đ",
          goal: "20,000,000đ",
          percentage: "80%",
        },
        contributors: 34562,
        videoUrl: "https://www.youtube.com/embed/3owMhK2Bkwc",
      },
      fr: {
        title:
          "Project de construction d'un jardin de plantes et d'elevages modele de VILLAGE POPULAIRE DE CO TU  ",
        time: "9/2023 - 3/2024",
        description:
          "Les enfants sont un groupe vulnérable et sont fortement touchés par la pauvreté...",
        progress: {
          current: "18,000,000đ",
          goal: "20,000,000đ",
          percentage: "80%",
        },
        contributors: 34562,
        videoUrl: "https://www.youtube.com/embed/Nyl9VTRZJeA",
      },
    },
    {
      vi: {
        title: "XÂY DỰNG MÔ HÌNH KINH TẾ VƯỜN",
        time: " 01/11/2023 ~ 01/11/2025",
        description:
          "Mỗi hộ có diện tích vườn trên 500m2. Có điện nước đầy đủ. Hơn nữa bà con có tập quán trồng trọt và chăn nuôi. Dự án nhằm xây dựng mô hình trồng trọt và chăn nuôi quy mô nhỏ trong cụm dân cư. Dự án sẽ đồng hành cùng bà con trong quá trình xây dựng, phát triển mô hình. Qua đó, chia sẻ kiến thức khoa họa và kỹ năng làm vườn, giúp bà con hiểu sâu sắc về làm kinh tế vườn và tự xây dựng được mô hình kinh tế vườn cho gia đình của mình. Kết quả là vườn nhà được sử dụng hiệu quả, mức sống được nâng cao. Hơn nữa, góp phần làm môi trường xanh sạch đẹp.",
        progress: {
          current: "4,000,000đ",
          goal: "20,000,000đ",
          percentage: "20%",
        },
        contributors: 34562,
        videoUrl: "https://www.youtube.com/embed/PaIaf8DhVrQ",
      },
      en: {
        title: "Build economic garden models",
        time: " 01/11/2023 ~ 01/11/2025",
        description:
          "Each household has a garden area of over 500m2. Full electricity and water available. Furthermore, people have the habit of growing crops and raising livestock. The project aims to build small-scale crop and livestock farming models in residential clusters. The project will accompany people in the process of building and developing the model. Thereby, sharing scientific knowledge and gardening skills helps people deeply understand garden economics and build their own garden economic model for their families. As a result, home gardens are used effectively and living standards are improved. Furthermore, it contributes to a clean and beautiful green environment.",
        progress: {
          current: "4,000,000đ",
          goal: "20,000,000đ",
          percentage: "20%",
        },
        contributors: 34562,
        videoUrl: "https://www.youtube.com/embed/96LUDfTQU0o",
      },
      ja: {
        title: "ガーデン経済モデルの構築",
        time: " 01/11/2023 ~ 01/11/2025",
        description:
          "各世帯には500平方メートル以上の庭面積があります。 電気と水道完備。 さらに、人々は作物を育てたり、家畜を飼ったりする習慣を持っています。 このプロジェクトは、住宅クラスターで小規模な農作物および畜産モデルを構築することを目的としています。 このプロジェクトは、モデルの構築と開発のプロセスに人々を伴います。 これにより、科学的知識と園芸スキルを共有することで、人々が園芸経済学を深く理解し、家族のために独自の園芸経済モデルを構築するのに役立ちます。 その結果、家庭菜園が有効活用され、生活水準が向上します。 さらに、清潔で美しい緑の環境づくりにも貢献します。",
        progress: {
          current: "4,000,000đ",
          goal: "20,000,000đ",
          percentage: "20%",
        },
        contributors: 34562,
        videoUrl: "https://www.youtube.com/embed/1OSXd4xcsyI",
      },
      fr: {
        title: "Construire un modèle économique de jardin",
        time: " 01/11/2023 ~ 01/11/2025",
        description:
          "Chaque foyer dispose d'un jardin de plus de 500 mètres carrés. Entièrement équipé en électricité et eau. De plus, les gens ont l’habitude de cultiver des cultures et d’élever du bétail. Le projet vise à construire un modèle de culture et d’élevage à petite échelle dans des clusters résidentiels. Ce projet implique des personnes dans le processus de construction et de développement de modèles. En partageant des connaissances scientifiques et des compétences horticoles, cela aide les gens à comprendre en profondeur l’économie horticole et à construire leurs propres modèles économiques horticoles pour leurs familles. En conséquence, les jardins familiaux seront mieux utilisés et le niveau de vie s’améliorera. De plus, cela contribue à créer un environnement vert propre et magnifique.",
        progress: {
          current: "4,000,000đ",
          goal: "20,000,000đ",
          percentage: "20%",
        },
        contributors: 34562,
        videoUrl: "https://www.youtube.com/embed/d1A8bHeoQOA",
      },
    },
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
            <h3 className="text-4xl font-bold mb-4">
              {program[LANG_CODE].title.length > 30 ? program[LANG_CODE].title.slice(0, 30) + "..." : program[LANG_CODE].title }
            </h3>
            <p>
              <strong className="text-2xl font-bold mb-4">
                {t("index.time")}: {program[LANG_CODE].time}
              </strong>
            </p>
            <div>
              <iframe
                className="rounded-lg shadow-md"
                width="100%"
                height="500"
                src={program[LANG_CODE].videoUrl}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div style={{ width: "100%" }}>
                <p
                  className="text-justify text-gray-700 my-4 overflow-hidden overflow-ellipsis whitespace-nowrap"
                  style={{ width: "100%" }}
                >
                  {program[LANG_CODE].description}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between mb-4">
              <div className="text-sm font-semibold text-gray-600">
                {program[LANG_CODE].progress.current} /{" "}
                {program[LANG_CODE].progress.goal}
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
                  style={{ width: "25px", height: "25px" }}
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
                  style={{ width: "30px", height: "30px" }}
                />

                <button className="btn btn-success">{t("index.donate")}</button>
              </div>
              <div className="flex items-center">
                <img
                  src="/bc.jpg"
                  alt="Image"
                  className="mr-2"
                  style={{ width: "40px", height: "40px" }}
                />{" "}
                <a href="about.html" className="btn btn-link">
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
            <h3 className="text-4xl font-bold mb-4">
              {program[LANG_CODE].title}
            </h3>
            <p>
              <strong className="text-2xl font-bold mb-4">
                {t("index.time")}: {program[LANG_CODE].time}
              </strong>
            </p>
            <div>
              <iframe
                className="rounded-lg shadow-md"
                width="100%"
                height="500"
                src={program[LANG_CODE].videoUrl}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div style={{ width: "100%" }}>
                <p
                  className="text-justify text-gray-700 my-4 overflow-hidden overflow-ellipsis whitespace-nowrap"
                  style={{ width: "100%" }}
                >
                  {program[LANG_CODE].description}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between mb-4">
              <div className="text-sm font-semibold text-gray-600">
                {program[LANG_CODE].progress.current} /{" "}
                {program[LANG_CODE].progress.goal}
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
                  style={{ width: "25px", height: "25px" }}
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
                  style={{ width: "30px", height: "30px" }}
                />

                <button className="btn btn-success">{t("index.donate")}</button>
              </div>
              <div className="flex items-center">
                <img
                  src="/bc.jpg"
                  alt="Image"
                  className="mr-2"
                  style={{ width: "40px", height: "40px" }}
                />{" "}
                <a href="about.html" className="btn btn-link">
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
