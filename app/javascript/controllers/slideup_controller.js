import { Controller } from "stimulus";
import { fetchWithToken } from "../utils/fetch_with_token";
import MathQuill from 'mathquill';

export default class extends Controller {
  static targets = [ 'source', 'equationId'];

  connect() {
    console.log(this.sourceTarget);
  }

  submit(event) {
    event.preventDefault();

    const equationId = Number.parseInt(this.equationIdTarget.value, 10);
    const latexValue = document.getElementById('step_latex').value;
    const MQ = MathQuill.getInterface(2);

    console.log(latexValue);
    console.log(JSON.stringify({ step: { latex: latexValue }}));

    fetchWithToken(`/equations/${equationId}/steps`, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ step: { latex: latexValue }})
    })
      .then(response => response.json())
      .then((data) => {
        // handle JSON response from server
        console.log(data);
        const steps = document.querySelector(".steps");

        let stepHtml = `
        <div class="line d-flex">
          <div class="step text-dark new-step" data-slideup-target="source">
            ${latexValue}
          </div>
          <div class="icons ml-2">
            <i class="fas fa-edit text-muted"></i>
            <i class="fas fa-minus-circle text-muted"></i>
            <i class="far fa-comment-dots text-muted"></i></i>
          </div>
        </div>
        `

        steps.insertAdjacentHTML("beforeend", stepHtml);

        let newStep = document.querySelector('.new-step');
        newStep.classList.remove("new-step");
        MQ.StaticMath(newStep);
      });
  }
}
