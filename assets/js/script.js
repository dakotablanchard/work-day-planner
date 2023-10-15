
$(function () {



  var today = new Date() // Getting the current date and time and storing it in to a variable
  var currentDayEl = $("#currentDay") // Selecting the element that will display date and time
  currentDayEl.text(today) // Setting the elements text content to the current date and time

  var hour9 = document.getElementById("hour-9am")
  var hour10 = document.getElementById("hour-10am")
  var hour11 = document.getElementById("hour-11am")
  var hour12 = document.getElementById("hour-12pm")
  var hour1 = document.getElementById("hour-1pm")
  var hour2 = document.getElementById("hour-2pm")
  var hour3 = document.getElementById("hour-3pm")
  var hour4 = document.getElementById("hour-4pm")
  var hour5 = document.getElementById("hour-5pm")



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

  checkTime()


  var text9 = document.querySelector(".textarea-9")
  var text10 = document.querySelector(".textarea-10")
  var text11 = document.querySelector(".textarea-11")
  var text12 = document.querySelector(".textarea-12")
  var text1 = document.querySelector(".textarea-1")
  var text2 = document.querySelector(".textarea-2")
  var text3 = document.querySelector(".textarea-3")
  var text4 = document.querySelector(".textarea-4")
  var text5 = document.querySelector(".textarea-5")

  text9.innerHTML = localStorage.getItem("hour9")
  text10.innerHTML = localStorage.getItem("hour10")
  text11.innerHTML = localStorage.getItem("hour11")
  text12.innerHTML = localStorage.getItem("hour12")
  text1.innerHTML = localStorage.getItem("hour1")
  text2.innerHTML = localStorage.getItem("hour2")
  text3.innerHTML = localStorage.getItem("hour3")
  text4.innerHTML = localStorage.getItem("hour4")
  text5.innerHTML = localStorage.getItem("hour5")

  var btn9 = document.querySelector(".btn9")
  var btn10 = document.querySelector(".btn10")
  var btn11 = document.querySelector(".btn11")
  var btn12 = document.querySelector(".btn12")
  var btn1 = document.querySelector(".btn1")
  var btn2 = document.querySelector(".btn2")
  var btn3 = document.querySelector(".btn3")
  var btn4 = document.querySelector(".btn4")
  var btn5 = document.querySelector(".btn5")


  btn9.addEventListener("click", function () {

    localStorage.setItem("hour9", text9.value)
  })

  btn10.addEventListener("click", function () {

    localStorage.setItem("hour10", text10.value)
  })

  btn11.addEventListener("click", function () {

    localStorage.setItem("hour11", text11.value)
  })

  btn12.addEventListener("click", function () {

    localStorage.setItem("hour12", text12.value)
  })

  btn1.addEventListener("click", function () {

    localStorage.setItem("hour1", text1.value)
  })

  btn2.addEventListener("click", function () {

    localStorage.setItem("hour2", text2.value)
  })

  btn3.addEventListener("click", function () {

    localStorage.setItem("hour3", text3.value)
  })

  btn4.addEventListener("click", function () {

    localStorage.setItem("hour4", text4.value)
  })

  btn5.addEventListener("click", function () {

    localStorage.setItem("hour5", text5.value)
  })
});

// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?
//
// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?
//
// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
//
// TODO: Add code to display the current date in the header of the page.