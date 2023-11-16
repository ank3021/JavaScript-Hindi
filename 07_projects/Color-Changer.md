##project link
[Click here](https://stackblitz.com/edit/web-platform-j6w3sh?file=index.html)

#Solution Code

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

