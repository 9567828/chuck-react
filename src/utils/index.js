// 특수문자
const scRegex = /[!@#$%^&*]/;
// 공백
const trimRegex = /\s/;

// 이메일 정규
const emailRegex = /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

// 6자리 정규식
const sixDigitRegex = /^\d{6}$/;

// 비밀번호 정규
const regex_pwd = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&#.~_-])[A-Za-z\d@$!%*?&#.~_-]{8,32}$/;

// 특수문자 허용 범위
const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*?_]).{8,32}$/;
