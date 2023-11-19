# Project link
[Click here](https://stackblitz.com/edit/web-platform-j6w3sh?file=index.html)

# Solution Code

## project 1

```javascript
const buttons = document.getElementById('buttons').childNodes;
let main = document.querySelector('body');

console.log(buttons);
buttons.forEach(function (button) {
  button.addEventListener('click', function (e) {
    console.log(e.target);
    if (e.target.id === 'grey') {
      main.style.backgroundColor = e.target.id;
    }

    if (e.target.id === 'orange') {
      main.style.backgroundColor = e.target.id;
    }

    if (e.target.id === 'blue') {
      main.style.backgroundColor = e.target.id;
    }

    if (e.target.id === 'yellow') {
      main.style.backgroundColor = e.target.id;
    }
  });
});
```

## project 2

```javascript
const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseFloat(document.querySelector('#height').value);
  //console.log(height);
  //console.log(typeof height);
  //console.log(typeof NaN);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height <= 0 || isNaN(height) === true) {
    results.innerHTML = `Please provide a valid height ${height}`;
  } else if (weight === '' || weight <= 0 || isNaN(weight) === true) {
    results.innerHTML = `Please provide a valid weight ${weight}`;
  } else {
    const BMI = (weight / (height * height)).toFixed(3);
    results.innerHTML = `The calculated BMI is ${BMI}`;
    if (BMI < 18.6) {
      message.innerHTML = `The individual is under-weight`;
    } else if (BMI >= 18.6 && BMI <= 24.9) {
      message.innerHTML = `The individual is healthy and fit !!`;
    } else {
      message.innerHTML = `The individual is over-weight`;
    }
  }
});
```

