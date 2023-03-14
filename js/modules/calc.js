import { Result } from "./result.js";
import { inputFormat } from "../utils/inputFormat.js";

const PhysicalParamRatio = {
  AGE: 5,
  HEIGHT: 6.25,
  WEIGHT: 10,
}

const ActivityRatio = {
  MIN: 1.2,
  LOW: 1.375,
  MED: 1.55,
  HIGH: 1.725,
  MAX: 1.9,
}

const CaloriesRatio = {
  NORM: 1,
  MIN: 0.85,
  MAX: 1.15,
}

const GenderRatio = {
  MALE: 5,
  FEMALE: -161,
}

export class Calc {
  constructor(form) {
    this.form = form;
  }

  init() {
    console.log(`Init..`);
  }
}