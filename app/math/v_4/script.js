document.getElementById('BtnPause').style.display = 'none';
w3.hide('span')
document.getElementById('result').style.display = 'none';
var counts = 0;
var Lab = 0;
var t;
var input = document.getElementById("result");
var result_true = 0;
var result_false = 0;
var min = new Number(document.getElementById("number_min").value);
var max = new Number(document.getElementById("number_max").value);
var outputs = "<div class='flex-container'><br>";
var results = "";
var txt_answers = document.getElementById("numbers");


// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function (event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    var displays = document.getElementById("BtnPause");
    if (displays.style.display == "") {
      document.getElementById("BtnPause").click();
    } else {
      document.getElementById("myBtn").click();
    }
  }
});






function myStart() {
  if (counts > 9) {
    location.reload();
  } else {
  txt_answers.innerHTML = ""
  txt_answers.style.background = 'white';
  var space = "";
  w3.hide('span')

  min = localStorage.getItem("min");
  max = localStorage.getItem("max");
  document.getElementById('myBtn').style.display = 'none';
  document.getElementById('BtnPause').style.display = "";
  document.getElementById("result").value = space;


  var pos = 0;
  var id = setInterval(frame, 50);

  function frame() {
    if (pos > 35) {
      clearInterval(id);
      w3.show('span')
      document.getElementById('result').style.display = '';
      document.getElementById("result").focus();
      timer(t);

    } else {
      pos++;
      var random_one = getRandomInteger(min, max);
      var random_two = getRandomInteger(min, max);
      var random_three = getRandomInteger(min, max);
      var random_four = getRandomInteger(min, max);

      document.getElementById("one").innerHTML = random_one;
      document.getElementById("two").innerHTML = random_two;
      document.getElementById("three").innerHTML = random_three;
      document.getElementById("four").innerHTML = random_four;



    }
  }
}
}

function CheckAnswer() {
  document.getElementById('myBtn').style.display = '';
  document.getElementById('BtnPause').style.display = "none";
  clearTime(t);

  var num_result = Number(document.getElementById("result").value);


  var one = document.getElementById("one").innerHTML;
  var two = document.getElementById("two").innerHTML;
  var three = document.getElementById("three").innerHTML;
  var four = document.getElementById("four").innerHTML;

  var answers = Number(one) + Number(two) + Number(three) + Number(four);
  counts++;
  if (num_result == answers) {
    results = "<a href='#'  class='w3-button cdp_i w3-green'>" + counts + "</a>";
    document.getElementById('btn_success').style.display = "";
    document.getElementById("btn_success").click();
    
    result_true++;





  } else {
    results = "<a href='#'  class='w3-button cdp_i w3-red'>" + counts + "</a>";
    document.getElementById('btn_error').style.display = "";
    document.getElementById("btn_error").click();

    






  }

  

 
  

  
  var adds = document.getElementById("txt_results").innerHTML;
  document.getElementById('myBtn').style.display = "";
  document.getElementById('BtnPause').style.display = "none";
  setTimeout(function () {
   
    
    document.getElementById("txt_results").innerHTML = adds + results;
  }, 4000);
    

}


  function getRandomInteger(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
    //  return Math.floor(Math.random() * (+max - +min)) + +min;
  }



  timer();

  function timer() {
    var t = setTimeout(add, 10);
  }

  function clearTime(t) {
    clearTimeout(t);

  }

  function SaveData() {
    var min = new Number(document.getElementById("number_min").value);
    var max = new Number(document.getElementById("number_max").value);

    localStorage.setItem("min", min);
    localStorage.setItem("max", max);
  }