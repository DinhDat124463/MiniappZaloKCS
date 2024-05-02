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

  constructor() {
    this.morningData = [];
    this.afternoonData = [];
  }
}

export class Year {
  days: Day[];

  constructor() {
    this.days = [];
  }
}

export class Project {
  years: Year[];

  constructor() {
    this.years = [];
  }
}
