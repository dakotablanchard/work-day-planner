
$(function () {

  var today = new Date() // Getting the current date and time and storing it in to a variable
  var currentDayEl = $("#currentDay") // Selecting the element that will display date and time
  currentDayEl.text(today) // Setting the elements text content to the current date and time

  var hour9 = document.getElementById("hour-9")
  var hour10 = document.getElementById("hour-10")
  var hour11 = document.getElementById("hour-11")
  var hour12 = document.getElementById("hour-12")
  var hour1 = document.getElementById("hour-13")
  var hour2 = document.getElementById("hour-14")
  var hour3 = document.getElementById("hour-15")
  var hour4 = document.getElementById("hour-16")
  var hour5 = document.getElementById("hour-17")

  // Variable getting the current live hour
  var hour = today.getHours()

  // Checks live time and applys styling according to the current time:
  function checkTime() {
    if (hour < 9) {

      hour9.classList = "future row time-block"

    } else if (hour === 9) {

      hour9.classList = "present row time-block"

    } else {

      hour9.classList = "past row time-block"

    }

    if (hour < 10) {

      hour10.classList = "future row time-block"

    } else if (hour === 10) {

      hour10.classList = "present row time-block"

    } else {

      hour10.classList = "past row time-block"

    }

    if (hour < 11) {

      hour11.classList = "future row time-block"

    } else if (hour === 11) {

      hour11.classList = "present row time-block"

    } else {

      hour11.classList = "past row time-block"

    }

    if (hour < 12) {

      hour12.classList = "future row time-block"

    } else if (hour === 12) {

      hour12.classList = "present row time-block"

    } else {

      hour12.classList = "past row time-block"

    }

    if (hour < 13) {

      hour1.classList = "future row time-block"

    } else if (hour === 13) {

      hour1.classList = "present row time-block"

    } else {

      hour1.classList = "past row time-block"

    }

    if (hour < 14) {

      hour2.classList = "future row time-block"

    } else if (hour === 14) {

      hour2.classList = "present row time-block"

    } else {

      hour2.classList = "past row time-block"

    }

    if (hour < 15) {

      hour3.classList = "future row time-block"

    } else if (hour === 15) {

      hour3.classList = "present row time-block"

    } else {

      hour3.classList = "past row time-block"

    }

    if (hour < 16) {

      hour4.classList = "future row time-block"

    } else if (hour === 16) {

      hour4.classList = "present row time-block"

    } else {

      hour4.classList = "past row time-block"

    }

    if (hour < 17) {

      hour5.classList = "future row time-block"

    } else if (hour === 17) {

      hour5.classList = "present row time-block"

    } else {

      hour5.classList = "past row time-block"

    }
  }

  checkTime() // Calling the above function

  var text9 = document.querySelector(".textarea-9")
  var text10 = document.querySelector(".textarea-10")
  var text11 = document.querySelector(".textarea-11")
  var text12 = document.querySelector(".textarea-12")
  var text1 = document.querySelector(".textarea-1")
  var text2 = document.querySelector(".textarea-2")
  var text3 = document.querySelector(".textarea-3")
  var text4 = document.querySelector(".textarea-4")
  var text5 = document.querySelector(".textarea-5")

  $(".saveBtn").on("click", function(){
    var valueEl = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id")
    localStorage.setItem(time, valueEl)
  })

  text9.innerHTML = localStorage.getItem("hour-9")
  text10.innerHTML = localStorage.getItem("hour-10")
  text11.innerHTML = localStorage.getItem("hour-11")
  text12.innerHTML = localStorage.getItem("hour-12")
  text1.innerHTML = localStorage.getItem("hour-13")
  text2.innerHTML = localStorage.getItem("hour-14")
  text3.innerHTML = localStorage.getItem("hour-15")
  text4.innerHTML = localStorage.getItem("hour-16")
  text5.innerHTML = localStorage.getItem("hour17")

});