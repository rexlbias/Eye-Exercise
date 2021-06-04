// array of elements that match class name ball and are stored in ball variable
const balls = document.getElementsByClassName('ball');

// any time mouse is moved, run this function
document.onmousemove = (event) => {
  const x = (event.clientX * 100) / window.innerWidth + '%'; 
  const y = (event.clientY * 100) / window.innerHeight + '%';
  // this converts the position of the mouse into a percentage 
  // relative to the screen size

  // for each ball of the balls array, set the properties to this 
  // as you loop through the array
  for (let i = 0; i < balls.length; i++) {
    balls[i].style.left = x;
    balls[i].style.top = y;
    balls[i].transform = 'translate(-' + x + ',-' + y + ')';
  }
};