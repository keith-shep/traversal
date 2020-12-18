import { Controller } from "stimulus";
import MathQuill from 'mathquill';

export default class extends Controller {
  static targets = [ ]

  connect() {
    this.initMathQuill();
  }

  // call(e) {
  //   let inputLatex = document.querySelector('#step_latex');
  //   let rootMQ = document.querySelector('#mathquill-editable > .mq-root-block')
  //   // within the root -> inject the relevant html

  //   rootMQ.insertAdjacentHTML('beforeend', mathQuillCommands[`${e.currentTarget.dataset.mqId}`].html);
  //   // update the input value WITH THE ACTUAL STRING
  //   inputLatex.value += `${mathQuillCommands[e.currentTarget.dataset.mqId].value}`
  // }




  initMathQuill() {
  // var latexSpan = document.getElementById('latex');
  const MQ = MathQuill.getInterface(2); // for backcompat
  const mathFieldSpan = document.getElementById('mathquill-editable');

  const steps = document.querySelectorAll('.step');
  steps.forEach((step) => MQ.StaticMath(step));

  const mathField = MQ.MathField(mathFieldSpan, {
    spaceBehavesLikeTab: true, // configurable
    handlers: {
      edit: function()  { // useful event handlers
        const input = document.querySelector('#step_latex');
        const latexStr = mathField.latex()
        input.value = latexStr
      }
    }
    });
  this.addShortcuts(mathField)
  }

  addShortcuts(mathField) {
    const allShortCutsTable = document.querySelectorAll('tbody > tr');
    allShortCutsTable.forEach((tr) => {
      tr.addEventListener('click', () => {
        mathField.write(tr.cells[0].innerText);
      })
    })
  }

}
