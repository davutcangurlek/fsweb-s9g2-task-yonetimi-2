import React from "react";
import { formatDistanceToNow, differenceInDays } from "date-fns";
import { tr } from 'date-fns/locale'
const Task = ({ taskObj, onComplete }) => {
const tarih = new Date=(taskObj.deadline);  
const kalanGun=formatDistanceToNow(tarih,{
  addSuffix: true,
  locale: tr,
});

  return (
    <div className="task">
      <h3>{taskObj.title}</h3>
      <div className="deadline">son teslim: <span>{taskObj.deadline}</span></div>
      <p>{taskObj.description}</p>
      <div>
        {taskObj.people.map((p) => (
          <span className="pill" key={p}>{p}</span>
        ))}
      </div>
      {onComplete && <button onClick={() => onComplete(taskObj.id)}>Tamamlandı</button>}
    </div>
  );
};

export default Task;
