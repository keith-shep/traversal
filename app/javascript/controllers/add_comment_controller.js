import { Controller } from "stimulus";
import { fetchWithToken } from "../utils/fetch_with_token";


export default class extends Controller {
  static targets = [ 'title', 'newTitle', 'step', 'toggleForm'];

  connect() {
    console.log('I am the add Comment Controller');
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
      .then((data) => {
        // handle JSON response from server
        console.log(data);
        this.newTitleTarget.value = "";
        console.log(newTitle);
        const stepCommentTemplate = document.querySelector(`template[data-step-id="${stepId}"] div.step-comments`);
        stepCommentTemplate.insertAdjacentHTML("beforeend", `<ul style='list-style: none'> <li>${newTitle}</li>  </ul> `);
      });
  }

}
