import React from "react";
import { Link } from "react-router-dom";
import blogs from "../../data/blog";

const Blog = () => {
  return (
    <>
      {blogs.slice(0, 3).map((post, index) => (
        <div
          key={index}
          className="col-lg-4 col-sm-6"
          data-aos="fade-up"
          data-aos-delay={post.delay}
        >
          <article className="blog-meta-three mt-40" data-aos="fade-up">
            <figure className="post-img m0">
              <Link to={`/references/${post.id}`} className="w-100 d-block">
                <img
                  src={post.imageSrc}
                  alt="blog"
                  className="lazy-img w-100 tran4s"
                />
              </Link>
            </figure>
            <div className="post-data mt-40">
              <div className="post-date opacity-75 text-uppercase">
                {post.date}
              </div>
              <Link to={`/references/${post.id}`} className="mt-5 mb-35 lg-mb-20">
                <h4 className="tran3s blog-title fw-normal tx-dark">
                  {post.title}
                </h4>
              </Link>
              <div>
                <Link
                  to={`/references/${post.id}`}
                  className="read-btn-two fw-500 tran3s"
                >
                  Plus ...
                </Link>
              </div>
            </div>
          </article>
        </div>
      ))}
    </>
  );
};

export default Blog;
