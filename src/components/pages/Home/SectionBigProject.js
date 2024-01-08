/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import Button from "../../Button";
import { useTranslation } from "react-i18next";
import { Modal, Button as ButtonModal } from "react-bootstrap";
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
        "DỰ ÁN GIÚP NGƯỜI CƠ-TU SẢN XUẤT THỰC PHẨM",
      time: "Thời gian: 2 năm (01/01/2024 ~ 01/01/2026)",
      plan: "Địa điểm: Thôn Pà-căng, xã Cà-dy, huyện Nam Giang, tỉnh Quảng Nam",
      progress: {
        current: "Bugdet: 18,000,000đ",
        goal: "20,000,000đ",
        percentage: "80%",
      },
      contributors: 34562,
      content:
        "Dự án này nhằm mục đích đồng hành và chia sẻ kỹ thuật chăn nuôi và rau hữu cơ bền vững với người dân trong làng. Các chuyên gia của dự án sẽ cùng người dân xây dựng các mô hình trồng trọt, chăn nuôi quy mô nhỏ tại thôn. Họ sẽ đến bản, cùng làm việc và chia sẻ trực tiếp với dân làng cách làm ruộng, để dân làng hiểu sâu và trực tiếp thực hành. Từ đó, người dân trong làng nắm vững được kỹ thuật và có thể tự xây dựng khu vườn riêng để cung cấp lương thực cho gia đình. ...",
      video: "https://www.youtube.com/embed/543jwFfCZvg",
    },
    en: {
      title:
      "PROJECT TO HELP CO-TU PEOPLE PRODUCE FOOD",
      time: "Time: 2 years (Jan 01st, 2024 ~ Jan 01st, 2026)",
      plan: "Place: Pà-căng village, Cà-dy commune, Nam Giang district, Quang Nam province",
      progress: {
        current: "Bugdet: 18,000,000đ",
        goal: "20,000,000đ",
        percentage: "80%",
      },
      contributors: 34562,
      content:
        "This project aims to accompany and share sustainable organic vegetables and livestock farming techniques with the villagers. Project experts will work with people to build small-scale farming and livestock models in the village. They will come to the village, work together and share directly with the villagers how to farm, so that the villagers can deeply understand and practice directly. Since then, the villagers can master the techniques and can build their own garden for their family’s food. ...",
      video: "https://www.youtube.com/embed/3_JHZXBMUho",
    },
    ja: {
      title: "CO-TUの人々の食糧生産を支援するプロジェクト",
      time: "期間：2年間（2024年01月01日〜2026年01月01日）",
      plan: "場所：クアンナム省ナムザン地区カディコミューンパチャン村",
      progress: {
        current: "Bugdet: 18,000,000đ",
        goal: "20,000,000đ",
        percentage: "80%",
      },
      contributors: 34562,

      content:
        "このプロジェクトは、持続可能な有機野菜や畜産技術を村民に伝え、共有することを目的としています。 プロジェクトの専門家は人々と協力して、村に小規模な農業と家畜のモデルを構築します。 彼らは村に来て一緒に働き、農業のやり方を村民と直接共有し、村民が深く理解し、直接実践できるようにします。 それ以来、村人たちは技術を習得し、家族の食べ物のために自分の庭を作ることができるようになりました。 ...",
      video: "https://youtube.com/embed/aAqwxCyBdRE",
    },
    fr: {
      title:
        "PROJET POUR AIDER LES GENS DE CO-TU À PRODUIRE DE LA NOURRITURE",
      time: "Durée : 2 ans (du 1er janvier 2024 au 1er janvier 2026)",
      plan: "Lieu : Village Pà-căng, commune Cà-dy, district de Nam Giang, province de Quang Nam",
      progress: {
        current: "Bugdet: 18,000,000đ",
        goal: "20,000,000đ",
        percentage: "80%",
      },
      contributors: 34562,

      content:
        "Ce projet vise à accompagner et partager des techniques d’élevage et de légumes biologiques durables avec les villageois. Les experts du projet travailleront avec la population pour construire des modèles d'agriculture et d'élevage à petite échelle dans le village. Ils viendront au village, travailleront ensemble et partageront directement avec les villageois comment cultiver, afin que les villageois puissent comprendre en profondeur et pratiquer directement. Depuis, les villageois maîtrisent les techniques et peuvent construire leur propre jardin pour nourrir leur famille. ...",
      video: "https://youtube.com/embed/d1A8bHeoQOA",
    },
  };

  const { title, time,plan, content, video } = programbig[LANG_CODE];
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
        <div className="bigProjectContainer">
      <div className="line"></div>
      <div className="textContainer">
        <span className="highlight">{t("big.project")}</span>
      </div>
      <div className="line"></div>
    </div>
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
              <h2 className="text-3xl text-justify" style={{ color: '#1fab89',fontWeight: '700' }}>{title}</h2>
              &nbsp;

              <div className="mb-2 text-xl text-justify" style={{ display: 'flex', alignItems: 'center' }}>
      <span style={{ fontWeight: 400, color: '#000000' }}>
        <img
          decoding="async"
          className="wp-image-1286 alignnone lazyloaded"
          src="https://smileeyecharity.org/wp-content/uploads/2023/10/22-400x400.png"
          alt=""
          width="26"
          height="26"
          data-src="https://smileeyecharity.org/wp-content/uploads/2023/10/22-400x400.png"
        />
      </span>
      &nbsp;
      <span style={{ fontWeight: 400 }}>{time}</span>
    </div>

    <div className="mb-2 text-xl text-justify" style={{ display: 'flex', alignItems: 'center' }}>
      <span style={{ fontWeight: 400, color: '#000000' }}>
        <img
          decoding="async"
          className="wp-image-1286 alignnone lazyloaded"
          src="https://smileeyecharity.org/wp-content/uploads/2023/10/Thiet-ke-chua-co-ten-3-400x400.png"
          alt=""
          width="40"
          height="40"
          data-src="https://smileeyecharity.org/wp-content/uploads/2023/10/22-400x400.png"
        />
      </span>
      &nbsp;
      <span style={{ fontWeight: 400 }}>{plan}</span>
    </div>   
    &nbsp;

              <p className="mb-8 text-xl text-justify">{content}</p>
              <div className="flex items-center justify-between mb-4">
              <div className="text-sm font-semibold text-gray-600">
                {programbig[LANG_CODE].progress.current} /{" "}
                {programbig[LANG_CODE].progress.goal}
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
                  <span className="text-xs px-2 font-semibold inline-block text-green-600">
                  {programbig[LANG_CODE].progress.percentage}
                  </span>
                </div>
              </div>
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-green-200">
                <div
                  style={{ width: programbig[LANG_CODE].progress.percentage }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
                ></div>
              </div>
            </div>
            </div>
            <div className="flex items-center space-x-4">
              {/* <a href={t("SectionBigProject.pdf")}>
                {t("SectionBigProject.detail")}
              </a> */}
              <button
                className="btn btn-primary text-blue-600"
                onClick={() => setShowModalDetail(true)}
              >
                {t("SectionBigProject.detail")}
              </button>
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
              
              <Button  className="btn " onClick={toggleModal}>
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
                  
                      <button type="submit" className="btn btn-primary" >
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
      <ModalDetail
        pdfLink={t("SectionBigProject.pdf")}
        showModal={showModalDetail}
        handleClose={() => setShowModalDetail(false)}
      />
    </section>
  );
}

const ModalDetail = ({ pdfLink, showModal, handleClose }) => {
  return (
    <Modal
      show={showModal}
      onHide={handleClose}
      size="xl" // "xl" sẽ tạo modal có kích thước lớn
      fullscreen // Cho phép modal hiển thị full màn hình
    >
      <Modal.Header closeButton>
        <Modal.Title>PDF Viewer</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <iframe
          title="PDF Viewer"
          src={pdfLink}
          frameBorder="0"
          width="100%"
          height="100%" // Sử dụng chiều cao 100% để làm full màn hình
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SectionBigProject;
