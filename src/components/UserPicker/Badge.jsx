import React,{useState} from "react";

import style from "./Badge.module.css";
import delete_sign from "../icons/delete_sign.svg"
import { man, man2, man3, girl, girl1 } from "../icons/avatar";


const Badge = ({ text, color,avatar,onClick }) => {
  const [chover,setChover]=useState(color)
  const hoverBadge=()=>{
    setChover(color="#ffcccb")
  }
  const closeBadge=(text)=>{
   // console.log(text)
    onClick && onClick(text)
  }
  const leaveBadge=()=>{
    setChover(color)
  }
  return (
    <div style={{ background: chover }} className={style.container}>
      <img className={style.avatar} src={avatar}/>
      <p className={style.text}>{text}</p>
      <img src={delete_sign} className={style.close} onClick={()=>closeBadge(text)} onMouseOver={hoverBadge} onMouseOut={leaveBadge} />
    </div>
  );
};

export default Badge;
