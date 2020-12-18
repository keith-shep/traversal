import { Controller } from "stimulus";
import { fetchWithToken } from "../utils/fetch_with_token";
import MathQuill from 'mathquill';

export default class extends Controller {
  static targets = [ 'source', 'equationId', 'errors'];

  connect() {
    console.log(this.sourceTarget);
  }

  sendStepToServer() {
    const equationId = Number.parseInt(this.equationIdTarget.value, 10);
    const latexValue = document.getElementById('step_latex').value;
    const MQ = MathQuill.getInterface(2);

    fetchWithToken(`/equations/${equationId}/steps`, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ step: { latex: latexValue }})
    }).then(response => response.json()).then((data) => {
        // handle JSON response from server
        console.log(data);
        if (data.errors) {
          this.errorsTarget.innerText = "Equation cannot be empty!";
        } else {
        this.errorsTarget.innerText = '';
        const steps = document.querySelector(".steps");

        let stepHtml = `
        <div class="line d-flex">
          <div class="step text-dark new-step" data-slideup-target="source">
            ${latexValue}
          </div>
          <div class="icons ml-2">
            <a class="text-muted" href="/steps/${data.stepId}/edit"><i class="fas fa-edit"></i></a>
            <a class="text-muted" data-remote="true" rel="nofollow" data-method="delete" href="/steps/${data.stepId}"><i class="fas fa-minus-circle"></i></a>
            <a class="text-muted" href="/steps/${data.stepId}/comments/new"><i class="far fa-comment-dots"></i></i></a>
          </div>
        </div>
        `
        steps.insertAdjacentHTML("beforeend", stepHtml);

        let newStep = document.querySelector('.new-step');
        newStep.classList.remove("new-step");
        MQ.StaticMath(newStep);
      }
    });
  }

  submit(event) {
      event.preventDefault();
      this.sendStepToServer();
  }

  submitWithEnter(e) {
    if (e.keyCode == 13) {
      this.sendStepToServer();
    }
  }
}
