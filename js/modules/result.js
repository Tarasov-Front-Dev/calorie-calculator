import { numberFormat } from "../utils/numberFormat.js";

export class Result {
  constructor() {
    this.root = document.querySelector('.calc__result');
    this.norm = this.root.querySelector('#calories-norm');
    this.min = this.root.querySelector('#calories-minimal');
    this.max = this.root.querySelector('#calories-maximal');
  }

  show(data){
    // console.log(`In show..`);
    // console.log(data);
    this.norm.textContent = numberFormat(data.norm);
    this.min.textContent = numberFormat(data.min);
    this.max.textContent = numberFormat(data.max);

    this.root.classList.remove('calc__result--hidden');
    this.root.scrollIntoView({block: 'center', behavior: 'smooth'})
  }

  hide() {
    // console.log('In hide..')
    this.root.classList.add('calc__result--hidden');
  }
}