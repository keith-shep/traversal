
import tippy from 'tippy.js';

const loadPopOvers = () => {
  // const comments = document.getElementById('comments');
  // debugger;
  // const steps = document.querySelectorAll('.step.text-dark');

  const allSteps = tippy(document.querySelectorAll('.step.text-dark'));
  allSteps.forEach((step) => {
    let template = document.querySelector(`template[data-step-id="${step.reference.dataset.stepId}"]`)
    step.setProps({allowHTML: true})
    step.setContent(template.innerHTML);
  })
}

export { loadPopOvers }
