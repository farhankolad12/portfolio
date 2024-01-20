import JourneyList from "./JourneyList";

export type JourneyType = {
  id: string;
  time: string;
  location: string;
  position: string;
  score: string;
};

const JOURNEY = [
  {
    id: "1",
    time: "2019",
    location: "St. Joseph High School",
    position: "SSC Board, Maharashtra",
    score: "Secured 79.20%",
  },
  {
    id: "2",
    time: "2021",
    location: "Kishinchand Chellaram College, Mumbai",
    position: "̇Maharashtra HSC Board",
    score: "Secured 82%",
  },
  {
    id: "3",
    time: "2021-2024",
    location: "Kishinchand Chellaram College, Mumbai",
    position: "Bachelor of Science (Computer Science)",
    score: "",
  },
];

export default function Journey() {
  return (
    <div className="my-5 main-sec container">
      <h1 className="text-center fw-bold name-head">My journey until now</h1>
      <ol
        className="mt-4 position-relative border-start border-secondary"
        style={{ listStyle: "none" }}
      >
        {JOURNEY.map((journey: JourneyType) => {
          return <JourneyList journey={journey} key={journey.id} />;
        })}
      </ol>
    </div>
  );
}
