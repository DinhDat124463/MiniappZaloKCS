class MorningData {
  time: string; // Thời gian
  content: string; // Nội dung

  constructor(time: string, content: string) {
    this.time = time;
    this.content = content;
  }
}

class AfternoonData {
  time: string; // Thời gian
  content: string; // Nội dung

  constructor(time: string, content: string) {
    this.time = time;
    this.content = content;
  }
}

class Day {
  morningData: MorningData[];
  afternoonData: AfternoonData[];

  constructor() {
    this.morningData = [];
    this.afternoonData = [];
  }
}

class Week {
  days: Day[];

  constructor() {
    this.days = [];
  }
}

class Year {
  weeks: Week[];

  constructor() {
    this.weeks = [];
  }
}

class Project {
  years: Year[];

  constructor() {
    this.years = [];
  }
}
