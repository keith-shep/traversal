import { Controller } from "stimulus";
import { fetchWithToken } from "../utils/fetch_with_token";

import tippy from 'tippy.js';
import 'tippy.js/themes/light-border.css';
import 'tippy.js/animations/shift-away.css';
import 'tippy.js/dist/svg-arrow.css';

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
    let targetStep = this.allSteps.find((step) => {return step.reference.dataset.tippyId == commentData.comment.step_id })
    // const stepCommentTemplate = document.querySelector(`template[data-step-id="${stepId}"]`);
    // const commentList = stepCommentTemplate.content.querySelector('.step-comments')
    // commentList.insertAdjacentHTML("beforeend", `<ul style='list-style: none'> <li>${newTitle}</li>  </ul> `);
    // debugger
  }

  loadPopOvers() {
    this.allSteps = tippy(document.querySelectorAll('.step.text-dark'), {
      theme: 'light-border',
      animation: 'shift-away',
      placement: 'bottom',
    });

    this.allSteps.forEach((step) => {

     let template = document.querySelector(`template[data-step-id="${step.reference.dataset.tippyId}"]`)

      step.setProps({allowHTML: true})
      step.setContent(template.innerHTML);
    })
  }


}
