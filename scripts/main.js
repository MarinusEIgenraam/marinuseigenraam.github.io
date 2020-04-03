let myButton = document.querySelector('button');
let myHeading = document.querySelector('h2');

function setUserName() {
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'I hope we can work together soon, ' + myName + '!';
  }

  function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName || myName === null) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = 'I hope we can work together soon, ' + myName + '!';
    }
  }

  myButton.onclick = function() {
    setUserName();
  }