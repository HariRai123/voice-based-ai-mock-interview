
import dayjs from "dayjs";
import { getRandomInterviewCover } from "../../utils/images/coverimage";
import Calender from '@/public/calendar.svg'
import Star from '@/public/star.svg'
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import DisplayTechIcons from "./DisplayTechIcons";

const InterviewCard = ({
  id,
  userId,
  role,
  type,
  techstack,
  createdAt,
}) => {
  const feedback = null;

  const normalizedType = /mix/i.test(type) ? "Mixed" : type;


 const formattedDate=dayjs(feedback?.createdAt || createdAt).format('MMM,D,YYYY')


  return (
    <div className="card-border w-[360px] max-sm:w-full min-h-96">
<div className="card-interview">
  <div>
    <div className="absolute top-0 right-0 w-fit px-4 py-2 rounded-bl-lg bg-light-600">
      <p className="badge-text">{normalizedType}</p>
    </div>
    <img src={getRandomInterviewCover()} alt="cover image" width={90} height={90} className="rounded-full-object-fit size-[90px]"/>
    <h3 className="mt-5 capitalize text-emerald-500">
      {role} Interview
    </h3>
    <div className="flex flex-row gap-3 mt-3">
      <div className="flex flex-row gap-2">
        <img src={Calender} alt="" width={22} height={22}/>
        <p>{formattedDate}</p>
      </div>
      <div className="flex flex-row gap-2">
        <img src={Star} alt="" height={22} width={22} />
        <p>{feedback?.totalScore || '---'}/100</p>
      </div>
    </div>
    <p className="line-clamp-2 mt-5">
      {feedback?.finalAssessment ||"You haven't taken the interview yet .Take it now to improve your skills"}
    </p>
  </div>
  <div>
    <div className="flex flex-row justify-between">
      <DisplayTechIcons techStack={techstack}/>
      <Button className="btn-primary">
       <Link to={feedback?`/interview/${id}/feedback`:`interview/${id}`}>
       {feedback?'Check Feedback':'View Interview'}
       </Link>
      </Button>
    </div>
  </div>
</div>

    </div>
  );
};

export default InterviewCard;

