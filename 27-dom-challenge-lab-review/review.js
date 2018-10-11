//
// As a user, i should see the timer increment every second once the page has loaded
// As a user, i can manually increment and decrement the counter as i like
// As a user, i can like an individual number of the counter. I should see the appropriate number of likes associated with that particular number
// As a user I can pause the game, which should disable all buttons except the pause button, which should now show the text 'resume'
// As a user I can leave comments on my gameplay, such as "Wow, what a fun game this is"?
let count = 0;
let paused = false;
// let likeTracker = {}
//
// if(!likeTracker[count]) {
//   likeTracker[count] = 1
// } else {
//   likeTracker[count] += 1
// }

document.addEventListener("DOMContentLoaded", function() {
  // add event listeners for plus and minus buttons
  let plusButton = document.getElementById("+");
  let minusButton = document.getElementById("-");
  let pauseButton = document.getElementById("pause");
  let commentForm = document.getElementById("comment-form");
  plusButton.addEventListener("click", incrementHandler);
  minusButton.addEventListener("click", decrementHandler);
  pauseButton.addEventListener("click", togglePaused);
  commentForm.addEventListener("submit", commentSubmissionHandler);
});

setInterval(tickingClock, 1000);

function incrementHandler(e) {
  increment();
  let counter = document.querySelector("#counter");
  counter.innerText = count;
}

function decrementHandler() {
  decrement();
  let counter = document.querySelector("#counter");
  counter.innerText = count;
}

function tickingClock() {
  // console.log("inside of ticking clock");
  if (!paused) {
    increment();
  }
  let counter = document.querySelector("#counter");
  counter.innerText = count;
}

function increment() {
  count += 1;
}

function decrement() {
  count -= 1;
}

function togglePaused() {
  paused = !paused;
  let btns = document.querySelectorAll(".disable-me");
  let pauseButton = document.getElementById("pause");

  if (paused) {
    btns.forEach(btn => (btn.disabled = true));
    pauseButton.innerText = "resume";
  } else {
    pauseButton.innerText = "pause";
    btns.forEach(btn => (btn.disabled = false));
  }
  console.log(paused);
}

// when the form is submitted:

function commentSubmissionHandler(e) {
  debugger;
  event.preventDefault();
  // grab the value of the form's input field
  let comment = document.getElementById("comment-input").value;
  // display this grabbed value on Dom
  //put comment value inside of a list item
  let commentList = document.getElementById("list");
  let li = document.createElement("li");
  li.innerText = comment;
  commentList.appendChild(li);
  event.target.reset();
}
