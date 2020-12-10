import { Controller } from "stimulus";
import { fetchWithToken } from "../utils/fetch_with_token";

export default class extends Controller {
  static targets = [ 'source', 'equationId'];

  connect() {
    console.log(this.sourceTarget);
  }

  submit(event) {
    event.preventDefault();
    console.log('Hello');

    const equationId = Number.parseInt(this.equationIdTarget.value, 10);
    const latexValue = document.getElementById('step_latex').value;

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
        console.log('yay');
        console.log(data);
      });
  }
}
