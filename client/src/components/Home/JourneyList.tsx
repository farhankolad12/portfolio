import { JourneyType } from "./Journey";

export default function JourneyList({ journey }: { journey: JourneyType }) {
  return (
    <li key={journey.id} className="mb-4">
      <div
        style={{ height: ".75rem", width: ".75rem", left: "-.39rem" }}
        className="position-absolute bg-secondary rounded-circle mt-1 border border-white"
      ></div>
      <time className="mb-1 text-sm font-normal text-secondary">
        {journey.time}
      </time>
      <h3 className="text-lg font-semibold text-dark fs-5 fw-bold">
        {journey.location}
      </h3>
      <p className="mb-2 text-base font-normal text-secondary dark:text-secondary">
        {journey.position}
      </p>
      <p className="mb-4 text-base font-normal text-secondary dark:text-secondary">
        <span>{journey.score}</span>
      </p>
    </li>
  );
}
