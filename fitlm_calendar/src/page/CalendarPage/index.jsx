import CustomCalendar from "./component/Calendar";
import FitlmPhoto from "./component/FitlmPhoto";
import Logo from "./component/Logo";

const CalendarPage = () => {
  return (
    <div className="flex flex-col justify-start items-center">
      <Logo className="pb-10 font-bold text-2xl text-dark-color text-shadow-sm shadow-gray-400" />
      <div className="flex flex-row items-center space-x-7">
        <FitlmPhoto />
        <CustomCalendar />
      </div>
    </div>
  );
};

export default CalendarPage;
