import MathQuill from 'mathquill';

const initMathQuill = () => {
  // var latexSpan = document.getElementById('latex');

  const MQ = MathQuill.getInterface(2); // for backcompat
  const mathFieldSpan = document.getElementById('mathquill-editable');

  const steps = document.querySelectorAll('.step');
  steps.forEach((step) => MQ.StaticMath(step));

  const mathField = MQ.MathField(mathFieldSpan, {
    spaceBehavesLikeTab: true, // configurable
    handlers: {
      edit: function()  { // useful event handlers
        // latexSpan.textContent = mathField.latex(); // simple API
        const input = document.querySelector('#step_latex');
        const latexStr = mathField.latex()
        input.value = latexStr
      }
    }
  });
}

export { initMathQuill }


