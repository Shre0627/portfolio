import Positions from "@/app/components/cards/Positions";
import { frontEndGSY, webDevSnapShip, cashier, mentor } from "@/app/components/data/positions";
const Career = () => {
    return (
        <div className="w-full space-y-4">
            <h1 className="text-black text-lg font-bold pb-[1rem]">Work Experience</h1>
            <Positions jobTitle="Front-end Web Developer" employer="goeasy" startDate="September 2025" endDate="Present" bulletPoints={[frontEndGSY.point1, frontEndGSY.point2, frontEndGSY.point3]} />
            <Positions jobTitle="Web Developer" employer="SnapShip" startDate="January 2023" endDate="August 2024" bulletPoints={[webDevSnapShip.point1, webDevSnapShip.point2, webDevSnapShip.point3]} />
            <Positions jobTitle="Cashier" employer="Sun N Step" startDate="June 2020" endDate="December 2022" bulletPoints={[cashier.point1, cashier.point2, cashier.point3]} />
            <Positions jobTitle="Mentor" employer="Super Star Academy" startDate="March 2023" endDate="Present" bulletPoints={[mentor.point1, mentor.point2, mentor.point3]} />
        </div>
    );
};

export default Career;