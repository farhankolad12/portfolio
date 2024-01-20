import "../css/blogs.css";

import { useParams } from "react-router-dom";
import { useGetReq } from "../hooks/useGetReq";
import { month } from "../components/Blogs/Blog";
import Parser from "html-react-parser/lib/index";

export default function BlogPage() {
  const { id } = useParams();

  const { data: blog, err, loading } = useGetReq("/blog", { id });

  if (err) {
    console.log(err);
  }

  document.title = blog ? blog.header : "";

  return (
    <div className="container pt-5">
      {loading ? (
        "loading..."
      ) : blog ? (
        <>
          <div className="d-flex align-items-center my-5 gap-3">
            <img
              src="/assets/my_photo.jpeg"
              width="55px"
              height="55px"
              className="rounded-circle"
              alt="Profile"
            />
            <div className="d-flex flex-column">
              <strong>Farhan Kolad</strong>
              <span>
                Web Developer &bull;{" "}
                {`${month(new Date(blog.createdAt).getMonth())} ${new Date(
                  blog.createdAt
                ).getDay()}, ${new Date(blog.createdAt).getFullYear()}`}
              </span>
            </div>
          </div>
          <div className="blog">
            <h1 className="fw-bold">{Parser(blog.header)}</h1>
            <img src={blog.img} className="my-4 rounded" alt="Blog" />
            {Parser(blog.blog)}
          </div>
        </>
      ) : (
        <h3>Blog Does not exists</h3>
      )}
    </div>
  );
}
