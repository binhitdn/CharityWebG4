import React from "react";

const Blog = () => {
  return (
    <main className="main">
      <div className="slider-area2 flex items-center">
        <div className="container mx-auto">
          <div className="row">
            <div className="col-xl-12">
              <div className="hero-cap hero-cap2 pt-70 text-center">
                <h2 className="text-2xl font-bold">Blog</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="blog_area py-12">
        <div className="container mx-auto">
          <div className="mb-5 mb-lg-0">
            <div className="blog_left_sidebar mb-5">
              {/* Blog items */}
              <BlogItem />
              <BlogItem />
              <BlogItem />
              <BlogItem />
              <BlogItem />
            </div>
            <nav className="blog-pagination justify-center flex">
              <ul className="pagination">
                <li className="page-item">
                  <a href="#" className="page-link" aria-label="Previous">
                    <i className="ti-angle-left"></i>
                  </a>
                </li>
                <li className="page-item">
                  <a href="#" className="page-link">
                    1
                  </a>
                </li>
                <li className="page-item active">
                  <a href="#" className="page-link">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a href="#" className="page-link" aria-label="Next">
                    <i className="ti-angle-right"></i>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
    </main>
  );
};

const BlogItem = () => {
  return (
    <article
      className=" bg-white shadow-md rounded-md overflow-hidden mb-5"
      style={{ width: "" }}
    >
      <div className="blog_item_img">
        <img
          className="card-img rounded-t-md w-full h-64 object-cover"
          src="https://cdn.thuvienphapluat.vn//uploads/tintuc/2022/09/28/lam-tu-thien.jpg"
          alt=""
          style={{ width: "400px", height: "250px" }}
        />
        <a
          href="#"
          className="blog_item_date bg-blue-500 text-white absolute top-0 right-0 p-2"
        >
          <h3 className="font-bold">15</h3>
          <p>Jan</p>
        </a>
      </div>
      <div className="blog_details p-4">
        <a className="d-inline-block" href="blog_details.html">
          <h2 className="blog-head text-2xl font-bold text-gray-800 mb-2">
            Google inks pact for new 35-storey office
          </h2>
        </a>
        <p className="mb-2">
          That dominion stars lights dominion divide years for fourth have don't
          stars is that he earth it first without heaven in place seed it second
          morning saying.
        </p>
        <ul className="blog-info-link text-sm text-gray-500">
          <li className="inline-block mr-2">
            <a href="#">
              <i className="fa fa-user"></i> Travel, Lifestyle
            </a>
          </li>
          <li className="inline-block">
            <a href="#">
              <i className="fa fa-comments"></i> 03 Comments
            </a>
          </li>
        </ul>
      </div>
    </article>
  );
};
export default Blog;
