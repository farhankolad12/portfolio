import "../css/blogs.css";
import { toast } from "react-toastify";
import { useGetReq } from "../hooks/useGetReq";
import Blog from "../components/Blogs/Blog";

export type BlogType = {
  _id: string;
  img: string;
  createdAt: number;
  tags: string[];
  header: string;
  shortInfo: string;
  blog: string;
};

export default function Blogs() {
  const { data: blogs, err, loading } = useGetReq("/blogs", {});

  if (err) {
    toast.error(err, {
      position: toast.POSITION.TOP_RIGHT,
    });
  }

  return (
    <>
      <div className="main-sec container">
        <div className="my-5">
          <h1 className="fw-bold">Blogs</h1>
          <span>
            I try to put my learnings into an article here to spread it further.
          </span>
          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(1fr, 3)" }}
            className="mt-5 border-top py-5 blogs"
          >
            {loading ? (
              "loading"
            ) : blogs ? (
              blogs.map((blog: BlogType) => {
                return <Blog key={blog._id} blog={blog} />;
              })
            ) : (
              <h3 className="text-center">No blogs</h3>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
