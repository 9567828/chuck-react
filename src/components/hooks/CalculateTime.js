export const getWorkHours = (start, end, rest, overtime, night) => {
  if (start === "-" || end === "-") {
    return "-";
  }

  const [sh, sm] = start.split(":").map(Number);
  const [eh, em] = end.split(":").map(Number);
  const restHour = rest.slice(0, 1);

  const startMinutes = sh * 60 + sm;
  const endMinutes = eh * 60 + em;

  const differTime = endMinutes - startMinutes;

  const hours = Math.floor(differTime / 60) - restHour;
  const minutes = differTime % 60;

  return `${String(hours).padStart(2, "0")}시간 ${String(minutes).padStart(2, "0")}분`;
};
