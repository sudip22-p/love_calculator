let button = document.querySelector("#calculate");
button.addEventListener("click", calculateLove);
let inputBtns=document.querySelectorAll("input");
inputBtns.forEach(input => {
  input.addEventListener("input", handleNameInput);
});
function handleNameInput(){
  document.querySelector("#resultMsg").innerHTML ="";
    document.querySelector("#showPercentage").innerHTML ="";
}
function calculateLove() {
  let yourName = document.querySelector("#your-name").value;
  let crushName = document.querySelector("#crush-name").value;
  if (yourName != "" && crushName != "") {
    let percentage = calculateLovePercentage(yourName,crushName);
    document.querySelector("#resultMsg").innerHTML =
      "Love Forecaster says " + yourName + " and " + crushName + "'s chance of love as::";
    document.querySelector("#showPercentage").innerHTML =
      percentage.toString() + "%";
  } else {
    document.querySelector("#resultMsg").innerHTML =
      "Please fill both the names to proceed further!";
  }
}
function calculateLovePercentage(name1, name2) {
  const combinedName = (name1 + name2).toLowerCase().replace(/[^a-z]/g, "");
  const uniqueChars = new Set(combinedName);
  const totalChars = uniqueChars.size;

  let charSum = 0;
  for (let char of uniqueChars) {
    if (char.match(/[aeiou]/)) {
      charSum += 1; // Vowel
    } else {
      charSum += 2; // Consonant
    }
  }

  let percentage = (totalChars / charSum) * 100;
  let lovePercentage = Math.round(percentage);
  lovePercentage=lovePercentage%100;
  if(lovePercentage>100){
    lovePercentage=100;
  }
  if(lovePercentage<60){
    lovePercentage=lovePercentage+25;
  }
  if(lovePercentage<0){
    lovePercentage=25;
  }
  return lovePercentage;
}



