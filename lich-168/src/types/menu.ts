import { string } from "prop-types";
import { ReactNode } from "react";

export interface MenuItem {
  label: string;
  icon: ReactNode;
  activeIcon?: ReactNode;
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
