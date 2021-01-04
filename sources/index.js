let targetDate = new Date("December 03, 2021 00:00:00").getTime()
// let days = document.querySelector(".days");
// let hours = document.querySelector(".hours");
// let minutes = document.querySelector(".minutes");
let daysQuery = document.querySelector(".days");
let hoursQuery = document.querySelector(".hours");
let minutesQuery = document.querySelector(".minutes");
let secondsQuery = document.querySelector(".seconds");

let setTimeBtn = document.querySelector('.setTime');
let backgoundShadow = document.querySelector('.background-shadow');
let settingDate = document.querySelector(".settingTime")
let startCountDown = document.querySelector('.sendTime');
let closeWindow = document.querySelector(".close");


closeWindow.addEventListener('click',()=>{
  backgoundShadow.style.display = "none";
})

setTimeBtn.addEventListener('click',()=>{
  backgoundShadow.style.display = "block";
})


startCountDown.addEventListener('click',()=>{
  targetDate =new Date(Number(settingDate.value.split("-")[0]),Number(settingDate.value.split("-")[1])-1,Number(settingDate.value.split("-")[2]));
  backgoundShadow.style.display = "none";
})




function addZero(i) {
  if (i == -1 || i == 0) {
    i = "00";
  } else if (i < 10 && i != 0) {
    i = "0" + i
  } else if (i == 60) {
    i = "00"
  }


  return i;
}
function runAnimation(timeArr){

  daysQuery.querySelector(".days-number").innerHTML = `<p>${timeArr[0]}</p>`;

  hoursQuery.querySelector(".right-front").innerHTML = `<p>${timeArr[1].split("")[1]}</p>`;
  hoursQuery.querySelector(".left-front").innerHTML = `<p>${timeArr[1].split("")[0]}</p>`;

  minutesQuery.querySelector(".right-front").innerHTML = `<p>${timeArr[2].split("")[1]}</p>`;
  minutesQuery.querySelector(".left-front").innerHTML = `<p>${timeArr[2].split("")[0]}</p>`;


  secondsQuery.querySelector(".right-front").innerHTML = `<p>${timeArr[3].split("")[1]}</p>`
  secondsQuery.querySelector(".left-front").innerHTML = `<p>${timeArr[3].split("")[0]}</p>`
  


}




let finishCounDown = setInterval(() => {
  let now = new Date().getTime();
  let timeLess = targetDate - now;


  let days = addZero(Math.floor(timeLess / (1000 * 60 * 60 * 24)));
  let hours = addZero(Math.floor((timeLess % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  let minutes = addZero(Math.floor((timeLess % (1000 * 60 * 60)) / (1000 * 60)));
  let seconds = addZero(Math.floor((timeLess % (1000 * 60)) / 1000));

  // if (Number(seconds) == 59) {
  //   nextNumber = "00";
  // } else if (seconds == 0) {
  //   nextNumber = 59;
  // }else{
  //   nextNumber = Number(seconds) -1
  // }
  let timeArr = [days + "", hours + "", minutes + "", seconds + ""];
  runAnimation(timeArr);
}, 1000);

