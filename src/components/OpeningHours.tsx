import useTranslation from "next-translate/useTranslation";
import { useRestCtx } from "../hooks";
import { OpeningHoursT } from "../types/restaurant";

export const OpeningHours = () => {
  const {
    contact: { openingHours },
  } = useRestCtx();
  const { t } = useTranslation();
  return (
    <div className="space-y-3 text-slate-300 col-center">
      <h3
        data-aos="fade-in"
        className="pb-1 text-2xl font-bold uppercase border-b text-slate-200"
      >
        {openingHours.title}
      </h3>
      <div className="min-w-[170px]">
        {openingHours.times.map((day, i) => (
          <span
            key={i}
            className={`row-between gap-x-1 ${
              new Date().getDay() === day.num
                ? " text-white font-semibold bg-white/10 rounded-sm"
                : ""
            }  w-full text-lg  px-2 py-1 rounded-sm`}
          >
            <span className="uppercase">{t(`days.${day.label}`)}:</span>
            {day.off ? (
              <span className="uppercase ">closed</span>
            ) : (
              <span>
                {day.from} - {day.to}
              </span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
};
