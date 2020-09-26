let count = 1;
let count1 = 1;
let count2 = 1;
let dd = document.getElementById("displayData");
let btn = document.getElementById("clk");
let dd1 = document.getElementById("displayData1");
let btn1 = document.getElementById("clk1");
let btn2 = document.getElementById("clk2");
btn.addEventListener("click", Demo);
btn1.addEventListener("click", Demo1);
btn2.addEventListener("click", Demo2);

function Demo() {
  let ourRequest = new XMLHttpRequest();
  ourRequest.open("GET", "dta-" + count + ".json");
  ourRequest.onload = function () {
    //console.log(ourRequest.responseText);
    // let ourData = ourRequest.responseText;
    //console.log(ourData[0]);
    let ourData = JSON.parse(ourRequest.responseText);
    //console.log(ourData[0]);
    renderData(ourData);
  };
  ourRequest.send();
  count++;
  if (count > 2) {
    btn.classList.add("hide");
  }
}
function renderData(e) {
  let str = "";
  for (i = 0; i < e.length; i++) {
    str += "<p>" + e[i].name + " is " + e[i].age + "</p>";
    +"years old";
  }
  dd.insertAdjacentHTML("beforeend", str);
}

function Demo1() {
  let ourRequest1 = new XMLHttpRequest();
  ourRequest1.open("GET", "dta-" + count1 + ".json");
  ourRequest1.onload = function () {
    let ourData1 = JSON.parse(ourRequest1.responseText);
    renderData1(ourData1);
  };
  ourRequest1.send();
  count1++;
  if (count1 > 2) {
    btn1.classList.add("hide");
  }
}
function renderData1(e1) {
  let dat = "";
  for (i = 0; i < e1.length; i++) {
    dat += "<tr>";
    dat += "<td>" + e1[i].name + " </td>";
    dat += "<td>" + e1[i].age + " </td>";
    dat += "</tr>";
  }
  dd1.innerHTML += dat;
}

let ourData2 = "";
function Demo2() {
  let ourRequest2 = new XMLHttpRequest();
  ourRequest2.open("GET", "dta-" + count2 + ".json");
  ourRequest2.onload = function () {
    ourData2 = JSON.parse(ourRequest2.responseText);
    let ourRequest3 = new XMLHttpRequest();
    let jsonString = JSON.stringify(ourData2);
    console.log(jsonString);

    ourRequest3.open("POST", "receive.php");
    ourRequest3.setRequestHeader("Content-Type", "application/json");

    ourRequest3.send(jsonString);
  };
  ourRequest2.send();
}

count2++;
if (count2 > 2) {
  btn2.classList.add("hide");
}
