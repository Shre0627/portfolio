interface PositionsProps {
  jobTitle: string;
  employer: string;
  startDate: string;
  endDate: string;
  bulletPoints?: string[];
}

const Positions = ({
  jobTitle,
  employer,
  startDate,
  endDate,
  bulletPoints,
}: PositionsProps) => {
  return (
    <>
      <div className="flex flex-col items-center sm:flex-row gap-2">
        <h2 className="text-black text-md font-bold">{jobTitle}</h2>
        <h2 className="text-black text-md font-medium">{employer}</h2>
        <h2 className="text-black text-md w-1/2">
          ({startDate} - {endDate})
        </h2>
      </div>
      <div className="ms-[1rem]">
        <ul className="list-disc list-outside text-black text-md space-y-2">
          {bulletPoints?.map((point, index) => (
            <li key={index}>
                <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Positions;
