const ball = document.getElementById('ball');
document.addEventListener('keydown', handleKeyPress);
let leftPosition = 0;
let topPosition = 0;

function handleKeyPress(e) {
  if (e.code === 'ArrowLeft') {
    leftPosition = leftPosition - 10;
  }
  if (e.code === 'ArrowRight') {
    leftPosition = leftPosition + 10;
  }
  if (e.code === 'ArrowDown') {
    topPosition = topPosition + 10;
  }
  if (e.code === 'ArrowUp') {
    topPosition = topPosition - 10;
  }
  if (leftPosition < 0) {
    leftPosition = 0;
  }
  if (topPosition < 0) {
    topPosition = 0;
  }
  refresh();
}
function refresh() {
  ball.style.left = leftPosition + 'px';
  ball.style.top = topPosition + 'px';
}