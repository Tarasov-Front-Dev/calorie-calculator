import { Calc } from "./modules/calc.js";

const form = document.querySelector('.calc__form');

let calc = new Calc(form);
calc.init();