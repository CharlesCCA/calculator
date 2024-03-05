const header = 'CALCULATOR!';
document.querySelector('.header').innerHTML = header;

const number1Form = `<input class="numba1" type="number" required>`
document.querySelector('.number1').innerHTML = number1Form;

const operatorsForm = `
<div class = "smoothOperators">
  <input type="radio" class="sum" name="operation" value="plus" />
  <label for="sum">&plus;</label>
  <input type="radio" class="diff" name="operation" value="minus" />
  <label for="diff">&minus;</label>
  <br>
  <input type="radio" class="prod" name="operation" value="times" />
  <label for="prod">&times;</label>
  <input type="radio" class="quot" name="operation" value="divide" />
  <label for="divide">&divide;</label>
</div>
 `
document.querySelector('.operators').innerHTML = operatorsForm;

const number2Form = `<input class="numba2" type="number" required>`
document.querySelector('.number2').innerHTML = number2Form;

const equalsButton = `
  <button type="submit" class="submitButton">
    ENTER
  </button>
`
document.querySelector('.equals').innerHTML = equalsButton;

const clearButton = `
  <button type="submit" class="clearButton">
    CLEAR
  </button>
`
document.querySelector('.clear').innerHTML = clearButton;

function clearScreen() {
  document.querySelector('.numba1').value = '';
  document.querySelector('.numba2').value = '';
  document.querySelector('.answer').innerHTML = '';
}

document.querySelector('.clearButton').addEventListener('click', clearScreen)

function solveEquation() {
  event.preventDefault();
  let num1 = parseInt(document.querySelector('.numba1').value);
  let num2 = parseInt(document.querySelector('.numba2').value);
  let ans = 0;

  if (document.querySelector('.sum').checked === true) {
    ans = num1 + num2;
  } else if (document.querySelector('.diff').checked === true) {
    ans = num1 - num2;
  } else if (document.querySelector('.prod').checked === true) {
    ans = num1 * num2;
  } else {
    ans = num1 / num2;
  } 

  ansDisplay = ans.toFixed(4);

  document.querySelector('.answer').innerHTML = ansDisplay;
};

document.querySelector('.submitButton').addEventListener('click', solveEquation)
