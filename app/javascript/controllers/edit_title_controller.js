import { Controller } from "stimulus";
import { fetchWithToken } from "../utils/fetch_with_token";


export default class extends Controller {
  static targets = [ 'title', 'newTitle', 'equation', 'toggleForm'];

  connect() {
    console.log('connected');
  }

  submit(e) {
    e.preventDefault();
    const newTitle = this.newTitleTarget.value;
    const equationId = this.equationTarget.dataset.equation;
    console.log(newTitle);
    console.log(equationId);
    fetchWithToken(`/equations/${equationId}`, {
      method: "PATCH",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ equation: { title: newTitle }})
    })
      .then(response => response.json())
      .then((data) => {
        // handle JSON response from server
        console.log(data);
        this.titleTarget.innerText = newTitle;
        this.toggleFormTarget.classList.add('d-none');
        // const steps = document.querySelector(".steps");

        // let stepHtml = `
        // <div class="line d-flex">
        //   <div class="step text-dark new-step" data-slideup-target="source">
        //     ${latexValue}
        //   </div>
        //   <div class="icons ml-2">
        //     <i class="fas fa-edit text-muted"></i>
        //     <i class="fas fa-minus-circle text-muted"></i>
        //     <i class="far fa-comment-dots text-muted"></i></i>
        //   </div>
        // </div>
        // `

        // steps.insertAdjacentHTML("beforeend", stepHtml);

        // let newStep = document.querySelector('.new-step');
        // newStep.classList.remove("new-step");
        // MQ.StaticMath(newStep);
      });
  }

}
