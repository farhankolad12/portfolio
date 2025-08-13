const TECHNOLOGIES = [
  {
    id: "1",
    img: "html.png",
  },
  {
    id: "2",
    img: "css.png",
  },
  {
    id: "3",
    img: "javascript.png",
  },
  {
    id: "4",
    img: "bootstrap.png",
  },
  {
    id: "10",
    img: "tailwind.png",
  },
  {
    id: "5",
    img: "mongodb.webp",
  },
  {
    id: "6",
    img: "express.png",
  },
  {
    id: "7",
    img: "react.png",
  },
  {
    id: "11",
    img: "next-js.png",
  },
  {
    id: "8",
    img: "node.jpeg",
  },
  {
    id: "9",
    img: "firebase.webp",
  },
  {
    id: "12",
    img: "socket-io.png",
  },
  {
    id: "13",
    img: "typescript.png",
  },
];

export type TECHTYPE = {
  id: string;
  img: string;
};

export default function Header() {
  return (
    <section className="main-sec header container">
      <h1 className="fw-bold name-head">
        Hi, I am Farhan Kolad <br />
        Website Developer
      </h1>
      <p className="fs-5 lh-base my-3 desc-head">
        I'm a full stack developer with 3+ years of experience in MERN Stack and
        NextJS. I have also created website using ReactJS, NodeJS and MongoDB.
        Currently, looking forward to pursue a next level in website
        development.
      </p>
      <div className="d-flex justify-content-center flex-wrap gap-4 mt-4">
        {TECHNOLOGIES.map((tech: TECHTYPE) => {
          return (
            <img
              key={tech.id}
              width="40px"
              height="40px"
              src={`/assets/${tech.img}`}
              alt={tech.id}
            />
          );
        })}
      </div>
    </section>
  );
}
