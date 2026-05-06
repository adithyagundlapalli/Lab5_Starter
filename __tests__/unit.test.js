// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from "../code-to-unit-test/unit-test-me";

// isPhoneNumber
test("isPhoneNumber: valid number (123) 456-7890 returns true", () => {
  expect(isPhoneNumber("(123) 456-7890")).toBe(true);
});
test("isPhoneNumber: valid number 123-456-7890 returns true", () => {
  expect(isPhoneNumber("123-456-7890")).toBe(true);
});
test('isPhoneNumber: invalid number "abcdefg" returns false', () => {
  expect(isPhoneNumber("abcdefg")).toBe(false);
});
test('isPhoneNumber: invalid number "123-45-6789" returns false', () => {
  expect(isPhoneNumber("123-45-6789")).toBe(false);
});

// isEmail
test("isEmail: valid email user@example.com returns true", () => {
  expect(isEmail("user@example.com")).toBe(true);
});
test("isEmail: valid email test@domain.org returns true", () => {
  expect(isEmail("test@domain.org")).toBe(true);
});
test("isEmail: invalid email missing @ returns false", () => {
  expect(isEmail("notanemail.com")).toBe(false);
});
test("isEmail: invalid email with spaces returns false", () => {
  expect(isEmail("bad email@test.com")).toBe(false);
});

// isStrongPassword
test('isStrongPassword: valid password "Hello123" returns true', () => {
  expect(isStrongPassword("Hello123")).toBe(true);
});
test('isStrongPassword: valid password "abcde" returns true', () => {
  expect(isStrongPassword("abcde")).toBe(true);
});
test('isStrongPassword: invalid password starting with number "1abc" returns false', () => {
  expect(isStrongPassword("1abcdef")).toBe(false);
});
test('isStrongPassword: invalid password too short "ab" returns false', () => {
  expect(isStrongPassword("ab")).toBe(false);
});

// isDate
test('isDate: valid date "12/25/2023" returns true', () => {
  expect(isDate("12/25/2023")).toBe(true);
});
test('isDate: valid date "1/1/2000" returns true', () => {
  expect(isDate("1/1/2000")).toBe(true);
});
test('isDate: invalid date "25-12-2023" returns false', () => {
  expect(isDate("25-12-2023")).toBe(false);
});
test('isDate: invalid date "2023/12/25" returns false', () => {
  expect(isDate("2023/12/25")).toBe(false);
});

// isHexColor
test('isHexColor: valid 6-char hex "#ff0000" returns true', () => {
  expect(isHexColor("#ff0000")).toBe(true);
});
test('isHexColor: valid 3-char hex "abc" returns true', () => {
  expect(isHexColor("abc")).toBe(true);
});
test('isHexColor: invalid hex with non-hex chars "#xyz123" returns false', () => {
  expect(isHexColor("#xyz123")).toBe(false);
});
test('isHexColor: invalid hex wrong length "#ff00" returns false', () => {
  expect(isHexColor("#ff00")).toBe(false);
});
