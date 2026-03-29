document.addEventListener('DOMContentLoaded', () => {
  const shape = document.querySelector('#shape-demo');
  const transformInputs = {
    rotate: document.querySelector('#rotate'),
    scale: document.querySelector('#scale'),
    translateX: document.querySelector('#translateX'),
    skew: document.querySelector('#skew'),
  };
  const outputFields = {
    rotate: document.querySelector('[data-output="rotate"]'),
    scale: document.querySelector('[data-output="scale"]'),
    translateX: document.querySelector('[data-output="translateX"]'),
    skew: document.querySelector('[data-output="skew"]'),
  };

  function paintTransform() {
    if (!shape || !transformInputs.rotate || !transformInputs.scale || !transformInputs.translateX || !transformInputs.skew) {
      return;
    }

    const rotate = Number(transformInputs.rotate.value);
    const scale = Number(transformInputs.scale.value) / 100;
    const translateX = Number(transformInputs.translateX.value);
    const skew = Number(transformInputs.skew.value);

    shape.style.transform = `translateX(${translateX}px) rotate(${rotate}deg) scale(${scale}) skew(${skew}deg)`;

    outputFields.rotate.textContent = `${rotate}deg`;
    outputFields.scale.textContent = scale.toFixed(2);
    outputFields.translateX.textContent = `${translateX}px`;
    outputFields.skew.textContent = `${skew}deg`;
  }

  Object.values(transformInputs).forEach(input => {
    input?.addEventListener('input', paintTransform);
  });

  paintTransform();
});
