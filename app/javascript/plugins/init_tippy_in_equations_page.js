
import tippy from 'tippy.js';
import 'tippy.js/themes/light-border.css';
import 'tippy.js/animations/shift-away.css';
import 'tippy.js/dist/svg-arrow.css';

const loadPopOvers = () => {

  const allSteps = tippy(document.querySelectorAll('.step.text-dark'), {

  });

  allSteps.forEach((step) => {

   let template = document.querySelector(`template[data-step-id="${step.reference.dataset.tippyId}"]`)

    step.setProps({allowHTML: true})
    step.setContent(template.innerHTML);
  })
}

export { loadPopOvers }
