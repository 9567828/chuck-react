class DateFormatter {
  constructor(date = new Date()) {
    this.ndate = date;
    this.year = this.ndate.getFullYear();
    this.month = this.ndate.getMonth() + 1;
    this.date = this.ndate.getDate();
    this.day = this.ndate.getDay();
    this.hour = this.ndate.getHours();
    this.minute = this.ndate.getMinutes();
    this.second = this.ndate.getSeconds();

    this.weekdays = ["일", "월", "화", "수", "목", "금", "토"];
    this.weekEn = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    this.monthArr = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
  }

  format(value) {
    return String(value).padStart(2, "0");
  }

  get defaultDate() {
    return `${this.year}년 ${this.format(this.month)}월 ${this.format(this.date)}일`;
  }

  get dateToNum() {
    return parseInt(`${this.year}${this.format(this.month)}${this.format(this.date)}`);
  }

  get dateWithDayDot() {
    return `${this.year}.${this.format(this.month)}.${this.format(this.date)} (${this.weekdays[this.day]})`;
  }

  get dateWithDay() {
    return `${this.year}년 ${this.format(this.month)}월 ${this.format(this.date)}일 (${this.weekdays[this.day]})`;
  }

  get hours() {
    return `${this.format(this.hour)}:${this.format(this.minute)}:${this.format(this.second)}`;
  }

  get dateInEnglish() {
    return `${this.monthArr[this.month]} ${this.format(this.date)}, ${this.year}`;
  }

  // get monthInEnglish() {
  //   return `${this.monthArr[this.month]}`;
  // }

  get monthString() {
    return `${this.format(this.month)}`;
  }
}

export default DateFormatter;

// // 예시 사용법
// const date1 = new DateFormatter(); // 기본적으로 오늘 날짜
// console.log(date1.defaultDate); // "2025년 02월 26일"
// console.log(date1.dateWithDay); // "2025.02.26 (수)"
// console.log(date1.hours); // "15:45:23"
// console.log(date1.dateInEnglish); // "february 26, 2025"
// console.log(date1.weekInEnglish); // "WED"

// // 날짜를 입력해서 인스턴스 만들기
// const date2 = new DateFormatter(new Date("2024-12-25"));
// console.log(date2.defaultDate); // "2024년 12월 25일"
// console.log(date2.dateWithDay); // "2024.12.25 (수)"
