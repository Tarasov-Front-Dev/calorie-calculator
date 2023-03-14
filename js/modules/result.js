export class Result {
  constructor() {
    this.root = document.querySelector('.calc__result');
    this.norm = this.root.querySelector('#calories-norm');
    this.min = this.root.querySelector('#calories-minimal');
    this.max = this.root.querySelector('#calories-maximal');
  }

  show(data){
    console.log(`In show..`);
    console.log(data);
    this.norm.textContent = data.norm;
    this.min.textContent = data.min;
    this.max.textContent = data.max;

    this.root.classList.remove('calc__result--hidden');
    this.root.scrollIntoView({block: 'center', behavior: 'smooth'})
  }

  hide() {
    console.log('In hide..')
    this.root.classList.add('calc__result--hidden');
  }
}