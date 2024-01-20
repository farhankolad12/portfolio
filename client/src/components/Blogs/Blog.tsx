import Parser from "html-react-parser";
import { Link } from "react-router-dom";
import { BlogType } from "../../pages/Blogs";

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export function month(num: number) {
  return MONTHS[num];
}

export default function Blog({ blog }: { blog: BlogType }) {
  return (
    <div key={blog._id} className="d-flex flex-column">
      <img
        src={blog.img}
        alt="Blog"
        width="100%"
        height="100%"
        className="rounded"
      />
      <div className="d-flex flex-wrap gap-3 my-3 align-items-center">
        <span>
          {`${month(new Date(blog.createdAt).getMonth())} ${new Date(
            blog.createdAt
          ).getDay()}, ${new Date(blog.createdAt).getFullYear()}`}
        </span>
        {blog.tags.map((tag) => {
          return (
            <span className="rounded-pill bg-light px-3 py-1" key={tag}>
              {tag}
            </span>
          );
        })}
      </div>
      <Link className="text-dark" to={`/blog/${blog._id}`}>
        <strong className="fs-4">{Parser(blog.header)}</strong>
        <br />
        <br />
        <span>{blog.shortInfo}</span>
      </Link>
      <div className="d-flex mt-3 align-items-center gap-4">
        <img
          src="/assets/my_photo.jpeg"
          width="55px"
          height="55px"
          className="rounded-circle"
          alt="Profile"
        />
        <div className="d-flex flex-column">
          <strong>Farhan Kolad</strong>
          <span>Web Developer</span>
        </div>
      </div>
    </div>
  );
}
