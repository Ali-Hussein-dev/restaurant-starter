import useTranslation from "next-translate/useTranslation";

const openingHours = [
  { num: 1, label: "mon", off: true, from: "", to: "" },
  { num: 2, label: "tue", from: "12:00", to: "22:00" },
  { num: 3, label: "wed", from: "12:00", to: "22:00" },
  { num: 4, label: "thu", from: "12:00", to: "22:00" },
  { num: 5, label: "fri", from: "12:00", to: "22:00" },
  { num: 6, label: "sam", from: "10:00", to: "23:00" },
  { num: 0, label: "sun", from: "10:00", to: "21:00" },
];
export const OpeningHours = () => {
  const { t } = useTranslation();
  return (
    <div className="space-y-3 text-slate-300 col-center">
      <h3 className="text-2xl font-bold uppercase text-slate-200">
        {t("openingHours.title")}
      </h3>
      <div className="min-w-[200px] ">
        {openingHours.map((day, i) => (
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
