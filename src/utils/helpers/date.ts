import moment from "moment-jalaali";

function enDate(todayCard: boolean) {
  const currentDate = new Date();

  const weekday = currentDate.toLocaleDateString("en-US", { weekday: "long" });
  const day = currentDate.getDate(); // Numeric day
  const month = currentDate.toLocaleDateString("en-US", {
    month: todayCard ? "short" : "long",
  });
  const year = currentDate.getFullYear();

  const time = currentDate.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  return { weekday, day, month, year, time };
}

moment.loadPersian({
  dialect: "persian-modern",
  usePersianDigits: false,
});

function perDate() {
  const jalaliDate = moment();

  const weekday = jalaliDate.format("dddd");
  const day = jalaliDate.format("jD");
  const month = jalaliDate.format("jMMMM");
  const year = jalaliDate.format("jYYYY");

  const time = jalaliDate.format("hh:mm A");

  return { weekday, day, month, year, time };
}

function getWeekday(dateStr: string) {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", { weekday: "short" });
}

export { enDate, perDate, getWeekday };
