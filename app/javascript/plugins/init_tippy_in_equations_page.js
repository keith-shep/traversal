
import tippy from 'tippy.js';

const loadPopOvers = () => {
  const comments = document.getElementById('comments');
  // debugger;
  tippy('#popover_comments', {
     content: console.log(comments),
     // content: console.log("hey"),
     allowHTML: true,
    });
}

export { loadPopOvers }
