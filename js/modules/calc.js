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
    this.elements = this.form.elements;
    this.parameters = this.elements.parameters.elements;
    this.submit = this.elements.submit;
    this.reset = this.elements.reset;

    this._onFormInput = this._onFormInput.bind(this);
    this._onFormSubmit = this._onFormSubmit.bind(this);
    this._onFormReset = this._onFormReset.bind(this);
  }

  _onFormInput(evt) {
    if (evt.target.type === 'text') evt.target.value = inputFormat(evt.target);
    if (evt.target.value && this.reset.disabled) this.reset.disabled = false;
    if ([...this.parameters].every(el => el.value)) this.submit.disabled = false;
  }

  _onFormSubmit(evt) {
    evt.preventDefault();
    console.log(`Submit..`);
  }

  _onFormReset() {
    console.log(`Reset..`);
    this.submit.disabled = true;
    this.reset.disabled = true;
    this.form.scrollIntoView({block: 'start', behavior: 'smooth'})
  }

  init() {
    console.log(`Init..`);
    // console.log([...this.parameters]);

    this.form.addEventListener('input', this._onFormInput);
    this.form.addEventListener('submit', this._onFormSubmit);
    this.form.addEventListener('reset', this._onFormReset);
  }
}