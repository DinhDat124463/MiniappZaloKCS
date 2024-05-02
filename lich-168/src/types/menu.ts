import { string } from "prop-types";
import { ReactNode } from "react";

export interface MenuItem {
  label: string;
  icon: ReactNode;
  activeIcon?: ReactNode;
}

export class Tuan {
  value: string;
  constructor(content: string) {
    this.value = content;
  }
}