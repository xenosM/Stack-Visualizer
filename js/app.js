//* VARIABLE DECLARATION

let input = document.querySelector(".number_input");
let pushBtn = document.querySelector("#push_btn");
let popBtn = document.querySelector("#pop_btn");
let resetBtn = document.querySelector("#reset_btn");
let bucket = document.querySelector(".bucket");
let topOfStack = document.querySelector("#top_of_stack");
let lastItem = document.querySelector("#last_item");
let lastPoppedItem = document.querySelector("#last_popped_item");
let stackSize = document.querySelector("#stack_size");
let message = document.querySelector("#message");
let btns = document.querySelectorAll(".btn");
let array = [];
//* FUNCTION DECLARATION
function pushItem() {
  //   variable declaration
  let value = parseInt(input.value);
  if (array.length > 4) {
    message.innerText = "Stack Overflow";
  } else if (isNaN(value)) {
    message.innerText = "Please Enter a number";
  } else {
    // add item to array
    array.push(value);

    // create element
    let block = document.createElement("div");
    block.classList.add("block");
    block.innerText = value;
    bucket.appendChild(block);

    //reset input
    input.value = "";

    //show message
    message.innerText = `Item ${value} is pushed`;

    //show stat
    topOfStack.innerText = array[array.length - 1];
    lastItem.innerText = array[array.length - 1];
    stackSize.innerText = array.length;
  }
}
function popItem() {
  // Declaration
  let lastValue = array[array.length - 1];

  //show stack underflow
  if (array.length == 0) {
    message.innerText = "Stack Underflow";
  } else {
    // remove item
    bucket.removeChild(bucket.lastElementChild);

    // remove item from array
    array.splice(-1, 1);

    // show stat
    if (array.length == 0) {
      topOfStack.innerHTML = "";
    } else {
      topOfStack.innerHTML = array[array.length - 1];
      lastPoppedItem.innerHTML = lastValue;
    }
    stackSize.innerHTML = array.length;
  }
}
function reset() {
  array = [];
  topOfStack.innerText = "";
  lastItem.innerText = "";
  lastPoppedItem.innerText = "";
  stackSize.innerText = "";
  message.innerText = "";
  while (bucket.firstChild) {
    bucket.removeChild(bucket.firstChild);
  }
}

//* MAIN
pushBtn.onclick = () => {
  pushItem();
};
popBtn.onclick = () => {
  popItem();
};
resetBtn.onclick = () => {
  reset();
};
