
import { atom, selector } from "recoil";
import { getUserInfo } from "zmp-sdk";

export const userState = selector({
  key: "user",
  get: () =>
    getUserInfo({
      avatarType: "normal",
    }),
});

export const displayNameState = atom({
  key: "displayName",
  default: "",
});



export class MorningData {
  time: string; // Thời gian
  content: string; // Nội dung
  detail_content: string; // Chi tiết nội dung
  constructor(time: string, content: string, detail_content: string) {
    this.time = time;
    this.content = content;
    this.detail_content = detail_content;
  }
}

export class AfternoonData {
  time: string; // Thời gian
  content: string; // Nội dung
  detail_content: string; // Chi tiết nội dung
  constructor(time: string, content: string, detail_content: string) {
    this.time = time;
    this.content = content;
    this.detail_content = detail_content;
  }
}

export class Day {
  morningData: MorningData[];
  afternoonData: AfternoonData[];
  day: number
  constructor(day: number) {
    this.morningData = [];
    this.afternoonData = [];
    this.day = day;
  }
}

export class Month {
  days: Day[];
  month: number
  constructor(month: number) {
    this.days = [];
    this.month = month;
  }
}

export class Year {
  months: Month[];
  year: number;

  constructor(year: number) {
    this.months = [];
    this.year = year;
  }
}



export class Project {
  years: Year[];

  constructor() {
    this.years = [];
  }
}

export class Tuan {
  private _startDate: string[];


  constructor() {
    this._startDate = [];
  }

  // Getter
  get startDate(): string[] {
    return this._startDate;
  }

  // Setter
  set startDate(value: string[]) {
    this._startDate = value;
  }
}