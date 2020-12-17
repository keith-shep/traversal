import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "span" ]

  connect() {
    console.log('spanner is connected!');
  }


  adjustHeight() {
    const mathQuillRoot = this.spanTarget.children[1];
    this.spanTarget.style.height = `${mathQuillRoot.clientHeight + 10 }px`

  }
}
