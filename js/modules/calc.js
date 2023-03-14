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
    this.result = new Result();
    this.article = document.querySelector('.calc')
    this.heading = document.querySelector('.calc__heading');

    this._onFormInput = this._onFormInput.bind(this);
    this._onFormSubmit = this._onFormSubmit.bind(this);
    this._onFormReset = this._onFormReset.bind(this);
    this._scale = this._scale.bind(this);
  }

  _onFormInput(evt) {
    if (evt.target.type === 'text') evt.target.value = inputFormat(evt.target);
    if (evt.target.value && this.reset.disabled) this.reset.disabled = false;
    if ([...this.parameters].every(el => el.value)) this.submit.disabled = false;
  }

  _onFormSubmit(evt) {
    evt.preventDefault();
    // console.log(`Submit..`);

    const calloriesData = this.calcCalories();
    this.result.show(calloriesData);
  }

  _onFormReset() {
    // console.log(`Reset..`);
    this.submit.disabled = true;
    this.reset.disabled = true;
    this.heading.scrollIntoView({block: 'start', behavior: 'smooth'});

    this.result.hide();
  }

  init() {
    // console.log(`Init..`);
    // console.log(this.article);

    this.form.addEventListener('input', this._onFormInput);
    this.form.addEventListener('submit', this._onFormSubmit);
    this.form.addEventListener('reset', this._onFormReset);

    this._scale();
  }

  calcCalories() {    
    const norm = this.calcCaloriesNorm();
    const min = this.calcCaloriesMin(norm);
    const max = this.calcCaloriesMax(norm);
    
    return {norm, min, max};
  }

  calcCaloriesNorm() {
    const age = PhysicalParamRatio.AGE * this.parameters.age.value;
    const height = PhysicalParamRatio.HEIGHT * this.parameters.height.value;
    const weight = PhysicalParamRatio.WEIGHT * this.parameters.weight.value;
    const gender = GenderRatio[this.form.gender.value.toUpperCase()];
    const activity = ActivityRatio[this.form.activity.value.toUpperCase()];

    return Math.round((weight + height - age + gender) * activity);
  }

  calcCaloriesMin(norm) {
    return Math.round(norm * CaloriesRatio.MIN);
  }

  calcCaloriesMax(norm) {
    return Math.round(norm * CaloriesRatio.MAX);
  }

  _scale() {
    // Have to add scale coz it's a JS app, and I don't want to add @media in CSS. Now it looks cool!
    // console.log(this.form.getBoundingClientRect())
    // console.log(this.form.offsetWidth);
    // console.log(window.offsetWidth);

    const scaleRatio = window.outerHeight / (this.form.getBoundingClientRect().bottom + 15);
    this.article.style.scale = scaleRatio;
    this.heading.scrollIntoView({block: 'start'})
  }
}