import MathQuill from 'mathquill';

const initMathQuill = () => {
  // var latexSpan = document.getElementById('latex');

  const MQ = MathQuill.getInterface(2); // for backcompat
  const mathFieldSpan = document.getElementById('mathquill-editable');

  const steps = document.querySelectorAll('.step');
  steps.forEach((step) => MQ.StaticMath(step));

  // const field = document.querySelector(".mq-empty");
  // mathFieldSpan.addEventListener('click', () => {
  //   console.log("hi");
  // });

  const mathField = MQ.MathField(mathFieldSpan, {
    spaceBehavesLikeTab: true, // configurable
    handlers: {
      edit: function()  { // useful event handlers
        const input = document.querySelector('#step_latex');
        const latexStr = mathField.latex()
        input.value = latexStr
      }
    }
  });
}

export { initMathQuill }


