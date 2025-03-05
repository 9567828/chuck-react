import * as s from "../../assets/scss/modules/style.module.scss";
import "../../assets/scss/screen/home/schedule.scss";

function ScheduleListComp() {
  const lists = [
    {
      id: 1,
      date: "12월 9일",
      content: [
        { id: 1, time: "12:00", title: "BX팀 외부 미팅" },
        { id: 2, time: "14:30", title: "박팀장님과 점심 약속" },
      ],
    },
    { id: 2, date: "12월 10일", content: [] },
    { id: 2, date: "12월 11일", content: [{ id: 1, time: "11:00", title: "개발팀 회의" }] },
  ];
  return (
    <div className="schedule-list">
      {lists.map((item) => (
        <div className="schedule-content" key={item.id}>
          <div className={`schedule-header ${s.captionXs} ${s.fontBold}`}>{item.date}</div>
          {item.content.length === 0 ? (
            <p className={`schedule-time ${s.captionXxs}`}>등록된 일정이 없습니다.</p>
          ) : (
            item.content.map((con) => (
              <div className="content-list" key={con.id}>
                <p className={`schedule-time ${s.captionXxs}`}>{con.time}</p>
                <div className="cal-color"></div>
                <p className={`cal-title ${s.captionXs}`}>{con.title}</p>
              </div>
            ))
          )}
        </div>
      ))}
    </div>
  );
}

export default ScheduleListComp;
