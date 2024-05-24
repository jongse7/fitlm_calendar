import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // 기본 CSS 임포트
import "./Calendar.css"; // 커스텀 CSS 임포트

const CustomCalendar = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div className="flex justify-center items-center">
      <Calendar
        onChange={onChange}
        value={value}
        locale="en-US"
        formatShortWeekday={(locale, date) =>
          date.toLocaleDateString(locale, { weekday: "short" }).substring(0, 3)
        }
        next2Label={null} // 다음 년도 버튼 제거
        prev2Label={null} // 이전 년도 버튼 제거
      />
    </div>
  );
};

export default CustomCalendar;
