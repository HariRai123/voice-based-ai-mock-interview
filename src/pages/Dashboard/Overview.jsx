import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import Robot from '@/public/robot.png'
import { dummyInterviews } from "@/src/common/constant";
import InterviewCard from "../interview/InterviewCard";
const Overview = () => {
  return (
    <>
    <section className="card-cta mt-6 sm:mt-10">
      <div className="flex flex-col gap-4 max-w-lg">
        <h2 className="text-light-100">
          Get Interview Ready with AI-powered Practice & Feedback
        </h2>
       <p className="text-lg text-emerald-300">Practice on real interview questions & get instant feedback</p>
      <Button asChild className="btn-primary max-sm:w-full">
        <Link to={'/interview'}>Start an Interview</Link>
      </Button>
      </div>
      <img src={Robot} alt="robot" width={200} height={200} className="max-sm:hidden"/>
    </section>
    <section className="flex flex-col gap-6 mt-8">
      <h2 className="text-light-100">Your Interviews</h2>

      <div className="interviews-section">
        {dummyInterviews.map((interview)=>(
          <InterviewCard {...interview} key={interview.id}/>
        ))}
      </div>
    </section>
    <section className="flex flex-col gap-6 mt-8">
      <h2 className="text-light-100">Take an interview</h2>
       <div className="interviews-section">
        {dummyInterviews.map((interview)=>(
          <InterviewCard {...interview} key={interview.id}/>
        ))}
        {/* <p>You haven't taken any interviews yet ...</p> */}
      </div>
    </section>
    </>
  );
};

export default Overview;
