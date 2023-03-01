import { BIRTHDAY_KEYS } from './constant';

export const DAYS = {
  type: BIRTHDAY_KEYS.DAY,
  data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
};

export const MONTHS = {
  type: BIRTHDAY_KEYS.MONTH,
  data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
};

const YEAR = new Date().getFullYear();
export const YEARS = { type: BIRTHDAY_KEYS.YEAR, data: Array.from(new Array(20), (val, index) => index + YEAR) };
