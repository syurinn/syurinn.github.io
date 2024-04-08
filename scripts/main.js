/*
let myHeading = document.querySelector("h1"); //let，var声明一个变量
myHeading.textContent = "Hello world!";
*/

/*
let iceCream = "chocolate";
if (iceCream === "chocolate") {
  alert("我最喜欢巧克力冰淇淋了。");
} else {
  alert("但是巧克力才是我的最爱呀……");
}
*/

/*
document.querySelector("html").addEventListener("click", function () {
    alert("别戳我，我怕疼");
});
*/

let myImage = document.querySelector("img");
myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/test1.jpg") {
    myImage.setAttribute("src", "images/test2.jpg");
  } else {
    myImage.setAttribute("src", "images/test1.jpg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    let myName = prompt("请输入你的名字。");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = "hello，" + myName;
    }
}
/*
if (!localStorage.getItem("name")) {
    setUserName();
} else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "hello，" + storedName;
}

myButton.onclick = function () {
    setUserName();
};
*/
  