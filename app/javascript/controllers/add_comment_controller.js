import { Controller } from "stimulus";
import { fetchWithToken } from "../utils/fetch_with_token";

import tippy from 'tippy.js';
import 'tippy.js/themes/light-border.css';
import 'tippy.js/animations/shift-away.css';

export default class extends Controller {
  static targets = [ 'title', 'newTitle', 'step', 'toggleForm'];
  allSteps = [];


  connect() {
    console.log('I am the add Comment Controller');
    this.loadPopOvers()
  }

  submit(e) {
    e.preventDefault();
    const newTitle = this.newTitleTarget.value;
    const stepId = this.stepTarget.dataset.step;
    console.log(newTitle);
    console.log(stepId);

    fetchWithToken(`/steps/${stepId}/comments`, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ comment: { message :newTitle }})
    })
      .then(response => response.json())
      .then((commentData) => this.updateTippy(commentData));
  }

  updateTippy(commentData) {
    console.log(commentData);
    this.newTitleTarget.value = "";
    let targetStep = this.allSteps.find((step) => { return step.reference.dataset.tippyId == commentData.comment.step_id })

    // in the targetStep
    // first - update the html of the target
    let targetTemplate = document.querySelector(`template[data-step-id="${commentData.comment.step_id}"]`)


    targetTemplate.content
                  .querySelector('ul') // gets us the first ul we can inspect it later
                  .insertAdjacentHTML('beforeend', `<li> ${commentData.comment.message} </li>`)

    targetStep.setContent('');

    targetStep.setContent(targetTemplate.innerHTML)

    targetStep.enable();
  }

  loadPopOvers() {
    this.allSteps = tippy(document.querySelectorAll('.step.text-dark'), {
      animation: 'shift-away',
      placement: 'left-start',
    });

    this.allSteps.forEach((step) => {

     let template = document.querySelector(`template[data-step-id="${step.reference.dataset.tippyId}"]`)

      step.setProps({allowHTML: true})
      step.setContent(template.innerHTML);

      if (!template.content.querySelector('li')) {
        step.disable();
      }

    })
  }


}
