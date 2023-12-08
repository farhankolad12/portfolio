const TECHNOLOGIES = [
  {
    id: "1",
    img: "/src/assets/html.png",
  },
  {
    id: "2",
    img: "/src/assets/css.png",
  },
  {
    id: "3",
    img: "/src/assets/javascript.png",
  },
  {
    id: "4",
    img: "/src/assets/bootstrap.png",
  },
  {
    id: "5",
    img: "/src/assets/mongodb.webp",
  },
  {
    id: "6",
    img: "/src/assets/express.png",
  },
  {
    id: "7",
    img: "/src/assets/react.png",
  },
  {
    id: "8",
    img: "/src/assets/node.jpeg",
  },
  {
    id: "9",
    img: "/src/assets/firebase.webp",
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
        I'm a full stack developer with 2+ years of experience in MERN Stack. I
        have also created website using ReactJS, NodeJS and MongoDB. Currently,
        looking forward to pursue a next level in website development.
      </p>
      <div className="d-flex justify-content-center flex-wrap gap-4 mt-4">
        {TECHNOLOGIES.map((tech: TECHTYPE) => {
          return (
            <img
              key={tech.id}
              width="40px"
              height="40px"
              src={`http://127.0.0.1:5173/${tech.img}`}
              alt={tech.id}
            />
          );
        })}
      </div>
    </section>
  );
}
