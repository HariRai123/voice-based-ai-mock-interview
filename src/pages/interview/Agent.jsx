import React, { useState } from 'react'
import AiAvatar from '@/public/ai-avatar.png'
import UserAvatar from '@/public/user-avatar.png'
import { cn } from '@/lib/utils';

const CallStatus = Object.freeze({
  INACTIVE: "INACTIVE",
  CONNECTING: "CONNECTING",
  ACTIVE: "ACTIVE",
  FINISHED: "FINISHED",
});

const Agent = ({ userName }) => {
  const [callStatus, setCallStatus] = useState(CallStatus.INACTIVE);
  const isSpeaking = callStatus === CallStatus.ACTIVE;
  const messages=[
    'Whats your name?',
    'My name is Hari Rai,nice to meet you!'
  ];
  const lastMessages=messages[messages.length-1];

  return (
    <>
      <div className="call-view">
        <div className="card-interviewer">
          <div className="avatar">
            <img
              src={AiAvatar}
              alt=""
              width={65}
              height={54}
              className="object-cover"
            />
            {isSpeaking && <span className="animate-speak" />}
          </div>
          <h3>AI Interviewer</h3>
        </div>

        <div className="card-border">
          <div className="card-content">
            <img
              src={UserAvatar}
              alt=""
              width={540}
              height={540}
              className="rounded-full object-cover size-[120px]"
            />
            <h3>{userName}</h3>
          </div>
        </div>
      </div>
      {messages.length>0 && (
        <div className="transcript-border mt-2">
          <div className="transcript">
            <p key={lastMessages} className={cn('transition-opacity duration-500 opacity-0','animate-fadeIn opacity-100')}>
              {lastMessages}
            </p>
          </div>
        </div>
      )}
      <div className="w-full flex justify-center">
        {callStatus !== CallStatus.ACTIVE ? (
          <button
            className="mt-4 btn-call"
            onClick={() => setCallStatus(CallStatus.ACTIVE)}
          >
            <span
              className={cn(
                "absolute animate-ping rounded-full opacity-75",
                callStatus !== CallStatus.CONNECTING && "hidden"
              )}
            />
            <span>
              {callStatus === CallStatus.INACTIVE ||
              callStatus === CallStatus.FINISHED
                ? "Call"
                : "..."}
            </span>
          </button>
        ) : (
          <button
            className="mt-4 btn-disconnect"
            onClick={() => setCallStatus(CallStatus.FINISHED)}
          >
            End
          </button>
        )}
      </div>
    </>
  );
};

export default Agent;



