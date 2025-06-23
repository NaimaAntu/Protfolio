let expression = '';

function append(value) {
  expression += value;
  document.getElementById('display').value = expression;
}

function calculate() {
  try {
    const result = eval(expression);
    document.getElementById('display').value = result;
    expression = result.toString();
  } catch {
    document.getElementById('display').value = 'Error';
    expression = '';
  }
}
