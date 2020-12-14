
import tippy from 'tippy.js';

const loadPopOvers = () => {
  // const comments = document.getElementById('comments');
  // // debugger;
  // tippy('#popover_comments', {
  //    content: comments.value,
  //    // content: console.log("hey"),
  //    allowHTML: true,
  //   });
  // Select All the steps
  console.log('I cannot find tippy JS');
  const allSteps = document.querySelectorAll('.step.text-dark')
  // Iterate through them
  allSteps.forEach((step) => {
    tippy(`[data-tippy-id]=${step.dataset.tippyId}`), {
      content: "This is is somewhat working!"
    }
  })
  // For each step
  //  -> Invoke a tippy
  //  -> Render the comments from the corresponding step

  // That means that those comments needs to be somewhere hidden
  // in the html, otherwise I cannot get them
}

export { loadPopOvers }
