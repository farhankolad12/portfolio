import { TECHTYPE } from "./Header";
import { Link } from "react-router-dom";

const PROJECTS = [
  {
    id: Math.floor(Math.random() * 999),
    industry: "E-Commerce",
    name: "Mutl-Vendor E-Commerce",
    description:
      "The challenge requires participants to build a functional E-commerce store with different access levels for Super Admins, Vendors, and end-users. The Super Admin dashboard allow monitoring of reviews, ratings, and orders, while vendors can add products, manage inventory and perform CRUD operations. End-users can view products, add them to the cart, and checkout. A reward system is implemented where users earn coins when they shop, and multiple discount campaigns should also be possible.",
    img: "/assets/multi-vendor.png",
    link: "https://github.com/farhankolad12/Spense-Challenge",
    tech: [
      {
        id: "4",
        img: "/assets/bootstrap.png",
      },
      {
        id: "5",
        img: "/assets/mongodb.webp",
      },
      {
        id: "6",
        img: "/assets/express.png",
      },
      {
        id: "7",
        img: "/assets/react.png",
      },
      {
        id: "8",
        img: "/assets/node.jpeg",
      },
    ],
  },
  {
    id: Math.floor(Math.random() * 999),
    industry: "Entertainment",
    name: "Movie App",
    description:
      "A app with authentication feature and user can save their favorites movies/shows. List of all the saved items will be visible in bookmark page from there user can remove movies/shows from the list.",
    img: "/assets/entertainment.png",
    link: "https://github.com/farhankolad12/Entertainment-App",
    tech: [
      {
        id: "4",
        img: "/assets/bootstrap.png",
      },
      {
        id: "7",
        img: "/assets/react.png",
      },
      {
        id: "9",
        img: "/assets/firebase.webp",
      },
    ],
  },
  {
    id: Math.floor(Math.random() * 999),
    industry: "Social Media",
    name: "Farhanogram",
    description:
      "A simple social media app where user can post their photos with a caption. Other users can comment and like on posts. Users can follow each other profiles. Last but not least people can chat with each other.",
    img: "/assets/farhanogram.png",
    link: "https://github.com/farhankolad12/Social-Media-App",
    tech: [
      {
        id: "4",
        img: "/assets/bootstrap.png",
      },
      {
        id: "7",
        img: "/assets/react.png",
      },
      {
        id: "9",
        img: "/assets/firebase.webp",
      },
    ],
  },
  {
    id: Math.floor(Math.random() * 999),
    industry: "Social Media",
    name: "Social Blend (Under Development)",
    description:
      "Social Blend is a marketplace to find and hire influencers on Instagram, TikTok, and YouTube. You can easily search through thousands of content creators and pay them directly through Social Blend. Influencer Marketing Made Easy. Find and hire top Instagram, YouTube, and UGC influencers to create unique content for your brand. It is a marketplace where influencer will sell their services and brand will hire them to do their marketing, like post stories, creating a video of brand products.",
    img: "/assets/social-blend.png",
    link: "https://social-blend-farhan.onrender.com/",
    tech: [
      {
        id: "4",
        img: "/assets/bootstrap.png",
      },
      {
        id: "5",
        img: "/assets/mongodb.webp",
      },
      {
        id: "6",
        img: "/assets/express.png",
      },
      {
        id: "7",
        img: "/assets/react.png",
      },
      {
        id: "8",
        img: "/assets/node.jpeg",
      },
      {
        id: "10",
        img: "/assets/socketio.svg",
      },
    ],
  },
  {
    id: Math.floor(Math.random() * 999),
    industry: "E-Commerce",
    name: "Golden Art Service",
    description:
      "An e-commerce website with a admin panel to add products, manage orders and reviews. This is a simple e-commerce website where user can buy products directly from the seller.",
    img: "/assets/e-commerce.png",
    link: "https://e-commerce-17b25.web.app/",
    tech: [
      {
        id: "4",
        img: "/assets/bootstrap.png",
      },
      {
        id: "7",
        img: "/assets/react.png",
      },
      {
        id: "9",
        img: "/assets/firebase.webp",
      },
    ],
  },
];

export default function Work() {
  return (
    <section id="work" className="container main-sec work ">
      <h1 className="fw-bold name-head text-center mb-5">
        Talk is cheap. <br />
        <span className="highlight-color">Show me what you build.</span>
      </h1>
      <div className="d-flex flex-column gap-5">
        {PROJECTS.map((project) => {
          return (
            <div
              key={project.id}
              className="d-md-flex justify-content-between w-100 gap-5 mt-4"
            >
              <div className="d-flex flex-column gap-3 w-100 mt-3">
                <span className="text-primary fw-bold fs-5">
                  {project.industry}
                </span>
                <h3 className="fw-bold fs-2">{project.name}</h3>
                <div className="d-flex flex-wrap gap-3">
                  {project.tech.map((tech: TECHTYPE) => {
                    return (
                      <img
                        key={tech.id}
                        width="25px"
                        height="25px"
                        src={tech.img}
                        alt={tech.id}
                      />
                    );
                  })}
                </div>
                <p className="fs-5 lh-lg text-secondary ">
                  {project.description}
                </p>
                <Link to={project.link} target="_blank">
                  <button className="btn btn-outline-primary me-auto px-5 d-flex align-items-center gap-2">
                    Project Link
                    <i className="bi bi-link-45deg fs-5" />
                  </button>
                </Link>
              </div>
              <div className="w-100 mt-3">
                <img src={project.img} alt="img" width="100%" height="100%" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
