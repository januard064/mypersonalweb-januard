import { IWorkingExperience } from "@/data-master/data-mater";
import { Circle } from "../global/circle";

export const Stepper = ({
  experience,
  isLast,
}: {
  experience: IWorkingExperience;
  isLast?: boolean;
}) => {
  return (
    <div className="grid grid-cols-12 gap-0">
      <div className="col-span-3">
        <div className="text-2xl font-bold">{experience.companyName}</div>
        <div className="mt-1">{experience.duration}</div>
      </div>
      <div className="flex justify-center h-full">
        <div>
          <div className="stepper-container">
            <Circle />
          </div>
          {!isLast && (
            <div className="stepper-container py-4 h-full pb-10">
              <div className="w-[2px] bg-[#566177]"></div>
            </div>
          )}
        </div>
      </div>
      <div className="col-span-8">
        <div className="text-2xl font-bold">{experience.position}</div>
        {experience.jobDescs.length > 1 ? (
          <ul className="list-disc pl-4">
            {experience.jobDescs.map((jobDesc) => (
              <li key={`jobDesc-${jobDesc.id}`} className="leading-8">
                {jobDesc.keterangan}
              </li>
            ))}
          </ul>
        ) : (
          <div className="mt-1">{experience.jobDescs[0].keterangan}</div>
        )}
        {isLast ? (<></>) : ( <div className="h-[82px]" />)}
      </div>
    </div>
  );
};
