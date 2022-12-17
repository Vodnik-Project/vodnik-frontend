import { FunctionComponent } from "react";
import Advantage from "./advantage";

import teamwork from "../../../../public/teamwork.svg";
import productivity from "../../../../public/productivity.svg";
import onlinechat from "../../../../public/onlinechat.svg";
import freeplan from "../../../../public/freeplan.svg";
import videocall from "../../../../public/videocall.svg";

import style from './style.module.css'

interface AdvantageMainProps {}

const AdvantageMain: FunctionComponent<AdvantageMainProps> = () => {
  return (
    <div className={style.container}>
      <Advantage
        src={teamwork}
        header={"Team Work"}
        text={`You can share you work flow with your <br/> friends to track and create your common tasks`}
      />
      <Advantage
        src={productivity}
        header={"Productivity"}
        text={
          "Track all common tasks in one workflow <br/> and all you need to edit and create on one window"
        }
      />
      <Advantage
        src={onlinechat}
        header={"Online Chat"}
        text={
          "Chat with you Partner and friends <br/> and also share your ideas and files if necessary "
        }
      />
      <Advantage
        src={freeplan}
        header={"Free Plan"}
        text={
          "Vodnik have a free plan <br/> and you  can use most of feature for free "
        }
      />
      <Advantage
        src={videocall}
        header={"Video Call"}
        text={
          "Call and share your face and voice realtime <br/> to receive partner feedback and share ideas together"
        }
      />
    </div>
  );
};

export default AdvantageMain;
