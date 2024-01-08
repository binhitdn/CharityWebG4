import React, { useState } from 'react';

const Blog = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const blogs = [
        {
            id: 1,
            title: 'Providing Clean Water to Underserved Communities',
            image: 'https://cdn.thuvienphapluat.vn//uploads/tintuc/2022/09/28/lam-tu-thien.jpg',
            categories: ['Charity', 'Community'],
            comments: 5,
            date: '15 Jan',
        },
        {
            id: 2,
            title: 'Building Schools for Children in Need',
            image: 'https://image.phunuonline.com.vn/news/2019/20191205/fckimage/170729_1534422012-0db4a0i-41539828.jpg',
            categories: ['Education', 'Charity'],
            comments: 8,
            date: '18 Jan',
        },
        {
            id: 3,
            title: 'Feeding the Hungry: Food Drives and Community Support',
            image: 'https://cdn1.tuoitre.vn/zoom/600_315/2020/7/4/12anh-5-1read-only-1593873889223849228767-crop-15938739906741442871616.jpg',
            categories: ['Charity', 'Community'],
            comments: 10,
            date: '20 Jan',
        },
        {
            id: 4,
            title: 'Providing Shelter to Homeless Families',
            image: 'https://static.kinhtedothi.vn/images/upload/2021/12/22/93e890d4-ae83-4f6a-bf97-5c4637ee8634.jpg',
            categories: ['Charity', 'Community'],
            comments: 6,
            date: '22 Jan',
        },
        {
            id: 5,
            title: 'Supporting Healthcare: Medical Camps and Free Clinics',
            image: 'https://morningstarcenter.net/upload/user/nam%202020/img_2119.jpg',
            categories: ['Charity', 'Health'],
            comments: 12,
            date: '25 Jan',
        },
        {
            id: 6,
            title: 'Empowering Women: Vocational Training and Skill Development',
            image: 'https://photo-cms-vovworld.zadn.vn/w500/Uploaded/vovworld/ovunhuo/2022_11_29/c8_TKYP.jpg',
            categories: ['Charity', 'Empowerment'],
            comments: 7,
            date: '28 Jan',
        },
    ];

    const blogsPerPage = 6;
    const indexOfLastBlog = currentPage * blogsPerPage;
    const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
    const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <main>
            <div className="flex items-center">
                <div className="container mx-auto">
                    <div className="pt-70 text-center mt-5">
                        <h2 className="text-5xl font-bold text-gray-800">
                            NEW
                        </h2>
                    </div>
                    <div className="text-center mt-5 text-gray-600">
                        <p>
                            Đây là nơi chia sẻ những hoạt động từ thiện của
                            chúng tôi. Hãy cùng chúng tôi chia sẻ những điều tốt
                            đẹp đến mọi người.
                        </p>
                    </div>
                </div>
            </div>
            <section className="py-12">
                <div className="container mx-auto">
                    <div className="mb-5">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex space-x-4">
                                <button className="bg-gray-200 text-gray-700 hover:bg-gray-300 px-4 py-2 rounded">
                                    All
                                </button>
                                <button className="bg-gray-200 text-gray-700 hover:bg-gray-300 px-4 py-2 rounded">
                                    Charity
                                </button>
                                <button className="bg-gray-200 text-gray-700 hover:bg-gray-300 px-4 py-2 rounded">
                                    Health
                                </button>
                            </div>
                            <div>
                                <ul className=" flex space-x-2">
                                    {Array.from(
                                        {
                                            length: Math.ceil(
                                                blogs.length / blogsPerPage,
                                            ),
                                        },
                                        (_, index) => (
                                            <li key={index}>
                                                <button
                                                    onClick={() =>
                                                        paginate(index + 1)
                                                    }
                                                    className={`${
                                                        currentPage ===
                                                        index + 1
                                                            ? 'bg-blue-500 text-white'
                                                            : 'bg-gray-200 text-gray-700'
                                                    } hover:bg-gray-300 px-3 py-1 rounded`}
                                                >
                                                    {index + 1}
                                                </button>
                                            </li>
                                        ),
                                    )}
                                </ul>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {currentBlogs.map((blog) => (
                                <BlogItem key={blog.id} blog={blog} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

const BlogItem = ({ blog }) => {
    return (
        <article className="bg-white shadow-md rounded-md overflow-hidden">
            <div className="blog_item_img relative">
                <img
                    className="card-img rounded-t-md w-full h-64 object-cover"
                    src={blog.image}
                    alt=""
                />
                <div className="blog_item_date bg-blue-500 text-white absolute top-0 right-0 p-2">
                    <h3 className="font-bold">{blog.date}</h3>
                </div>
            </div>
            <div className="blog_details p-4">
                <a className="d-inline-block no-underline" href="#">
                    <h2 className="blog-head text-2xl font-bold text-gray-800 mb-2 ">
                        {blog.title}
                    </h2>
                </a>
                <p className="mb-2">...</p>
                <ul className="blog-info-link text-sm text-gray-500 flex space-x-2">
                    {blog.categories.map((category, index) => (
                        <li key={index}>
                            <a
                                href="#"
                                className="flex items-center no-underline"
                            >
                                <i className="fa fa-tag mr-1"></i> {category}
                            </a>
                        </li>
                    ))}
                    <li>
                        <a href="#" className="flex items-center no-underline">
                            <i className="fa fa-comments mr-1"></i>{' '}
                            {blog.comments} Comments
                        </a>
                    </li>
                </ul>
            </div>
        </article>
    );
};

export default Blog;
