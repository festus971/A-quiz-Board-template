function scoreLine() {
  // content here

  var quiz1 = document.myForm.q1.value;
  var quiz2 = document.myForm.q2.value;
  var quiz3 = document.myForm.q3.value;
  var quiz4 = document.myForm.q4.value;
  var quiz5 = document.myForm.q5.value;
  var result = 0;

  var displayForm = document.getElementById("displayForm");
  var display = document.getElementById("display");
  display.style.display = "not visible";

  if (quiz1 == "A") {
    result++;
  }
  if (quiz2 == "A") {
    result++;
  }
  if (quiz3 == "C") {
    result++;
  }
  if (quiz4 == "A") {
    result++;
  }
  if (quiz5 == "C") {
    result++;
  }

  if (quiz1 == "" || quiz2 == "" || quiz3 == "" || quiz4 == "" || quiz5 == "") {
    alert("please Answer All the questions");
  }
  var finalScore = result * 33;
  if (finalScore >= 70) {
    displayForm.innerHTML = "your score is" + finalScore + "%" + "excelent";
  } else if (finalScore >= 33 && finalScore < 70) {
    displayForm.innerHTML = "your score is" + finalScore + "%" + "fairly done";
  } else if (finalScore >= 0 && finalScore < 33) {
    displayForm.innerHTML = "your score is" + finalScore + "%" + "poor score!";
  }
}
function myComments() {
  myComments = finalScore;
  var displayComments = document.getElementById("displayComments");

  // displayComments.innerHTML="Good work"
  if (myComments >= 60) {
    displayComments.innerHTML = "Good work";
  } else if (myComments >= 0 && myComments < 60) {
    displayComments.innerHTML = "nice work";
  }
}
