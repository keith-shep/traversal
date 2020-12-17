import { Controller } from "stimulus";
import { fetchWithToken } from "../utils/fetch_with_token";


export default class extends Controller {
  static targets = [ 'title'];

  connect() {
    console.log('equation title controller connected!');
  }

  update(e) {
    console.log(this.titleTarget.innerText)
    fetchWithToken(`/equations/${this.titleTarget.dataset.equationId}`, {
      method: "PATCH",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ equation: { title: this.titleTarget.innerText }})
    })
      .then(response => response.json())
      .then((data) => {
        // handle JSON response from server
        console.log(data);
        // this.titleTarget.innerText = newTitle;
        // this.toggleFormTarget.classList.add('d-none');

      });
  }

}

