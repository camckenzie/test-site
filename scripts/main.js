// Image switcher code

const myImage = document.querySelector('img');

myImage.onclick = () => {
  const mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/shiba.png') {
    myImage.setAttribute('src','images/shiba2.png');
  } else {
    myImage.setAttribute('src','images/shiba.png');
  }
}

let myButton = document.querySelector('button');
myButton.onclick = () => {
    setUserName();
}

let myHeading = document.querySelector('h1');

function setUserName() {
    const myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = `Welcome, ${myName}!`;
}

// if name data doesn't exist, we prompt for it.
// Otherwise, retrieve the name and set it for welcome page
if (!localStorage.getItem('name')) {
    setUserName();
} else {
    const storedName = localStorage.getItem('name');
    myHeading.textContent = `Welcome, ${myName}!`;

}