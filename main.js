class FunctionButton {
  constructor (selector) {
    this.$el = document.querySelector(selector);
  }

  hide() {
    this.$el.style.display = 'none';
  }
  show() {
    this.$el.style.display = 'block';
  }
}


//  hide
document.getElementById('hideBtn').addEventListener('click', (event) => {
  let inputValue = document.getElementById('valueInput').value;
  const element = new FunctionButton('#' + inputValue);
  element.hide();
})

//  show
document.getElementById('showBtn').addEventListener('click', (event) => {
  let inputValue = document.getElementById('valueInput').value;
  const element = new FunctionButton('#' + inputValue);
  element.show();
})


