import { Controller } from "stimulus"
import { mathQuillCommands } from "../utils/mathquill_commands.js"

export default class extends Controller {
  static targets = [ ]

  connect() {
    console.log('collapsable is connected!');
  }

  call(e) {
    let inputLatex = document.querySelector('#step_latex');
    let rootMQ = document.querySelector('#mathquill-editable > .mq-root-block')
    // within the root -> inject the relevant html

    rootMQ.insertAdjacentHTML('beforeend', mathQuillCommands[`${e.currentTarget.dataset.mqId}`].html);
    // update the input value WITH THE ACTUAL STRING
    inputLatex.value += `${mathQuillCommands[e.currentTarget.dataset.mqId].value}`
  }

}
