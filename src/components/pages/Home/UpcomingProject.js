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
        "DỰ ÁN GIÚP NGƯỜI CƠ-TU XÂY NHÀ PHÂN BÓN HỮU CƠ",
      time: "Thời gian: 2 năm (01/01/2024 ~ 01/01/2026)",
      plan: "Địa điểm: Thôn Pà-căng, xã Cà-dy, huyện Nam Giang, tỉnh Quảng Nam",
      progress: {
        current: "Bugdet: 18,000,000đ",
        goal: "20,000,000đ",
        percentage: "80%",
      },
      contributors: 34562,
      content:
        "Phân hữu cơ là thành phần quyết định chất lượng và năng suất cây trồng. Để phát triển chăn nuôi và trồng trọt bền vững, việc sản xuất phân bón hữu cơ tại làng nghề là điều cần thiết. Hiện nay, rác thải sinh hoạt và rác thải chăn nuôi chưa được sử dụng để làm phân bón. Các thành phần này được thải ra môi trường, gây ô nhiễm. Người dân trong làng không chỉ muốn biết cách làm phân bón hữu cơ cho cây trồng mà còn muốn làm cho môi trường làng quê sạch đẹp hơn. ...",
      video: "https://www.youtube.com/embed/jKwQ8ork7Bw",
    },
    en: {
      title:
      "PROJECT TO HELP CO-TU PEOPLE BUILD AN ORGANIC FERTILIZER HOUSE",
      time: "Time: 2 years (Jan 01st, 2024 ~ Jan 01st, 2026)",
      plan: "Place: Pà-căng village, Cà-dy commune, Nam Giang district, Quang Nam province",
      progress: {
        current: "Bugdet: 18,000,000đ",
        goal: "20,000,000đ",
        percentage: "80%",
      },
      contributors: 34562,
      content:
        "Organic fertilizer is the ingredient that determines crop quality and yield. To develop sustainable farming and animal husbandry, it is essential to produce organic fertilizer in the village. Currently, household waste and livestock waste have not been used to make fertilizer. These components are released into the environment, causing pollution. The villagers not only want to know how to make organic fertilizer for plants, but also want to make the village’s environment cleaner and more beautiful....",
      video: "https://www.youtube.com/embed/TKpN7cVX7y8",
    },
    ja: {
      title: "CO-TU の人々が有機肥料ハウスを建てるのを支援するプロジェクト",
      time: "期間：2年間（2024年01月01日〜2026年01月01日）",
      plan: "場所：クアンナム省ナムザン地区カディコミューンパチャン村",
      progress: {
        current: "Bugdet: 18,000,000đ",
        goal: "20,000,000đ",
        percentage: "80%",
      },
      contributors: 34562,

      content:
        "有機肥料は作物の品質と収量を決定する成分です。 持続可能な農業と畜産業を発展させるには、村で有機肥料を生産することが不可欠です。 現在、家庭廃棄物や家畜排泄物は肥料の製造に使用されていません。 これらの成分は環境中に放出され、汚染を引き起こします。 村人たちは植物のための有機肥料の作り方を知りたいだけでなく、村の環境をより清潔で美しくしたいとも考えています。 ...",
      video: "https://www.youtube.com/embed/3owMhK2Bkwc",
    },
    fr: {
      title:
        "PROJET POUR AIDER LES GENS DE CO-TU À CONSTRUIRE UNE MAISON D'ENGRAIS BIOLOGIQUES",
      time: "Durée : 2 ans (du 1er janvier 2024 au 1er janvier 2026)",
      plan: "Lieu : Village Pà-căng, commune Cà-dy, district de Nam Giang, province de Quang Nam",
      progress: {
        current: "Bugdet: 18,000,000đ",
        goal: "20,000,000đ",
        percentage: "80%",
      },
      contributors: 34562,

      content:
        "L'engrais organique est l'ingrédient qui détermine la qualité et le rendement des cultures. Pour développer une agriculture et un élevage durables, il est essentiel de produire des engrais organiques au village. Actuellement, les déchets ménagers et les déjections animales ne sont pas utilisés pour fabriquer des engrais. Ces composants sont rejetés dans l’environnement, provoquant une pollution. Les villageois veulent non seulement savoir comment fabriquer des engrais organiques pour les plantes, mais aussi rendre l’environnement du village plus propre et plus beau. ...",
      video: "https://www.youtube.com/embed/Nyl9VTRZJeA",
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
      <div className="line1"></div>

    </div>
      </div>
      &nbsp;
      &nbsp;

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
                  <span className="text-xs font-semibold inline-block text-green-600">
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
