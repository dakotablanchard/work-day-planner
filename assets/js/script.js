// Wrapping everything in a call to jquery so that the page renders first:
$(function () {

  var today = new Date() // Getting the current date and time and storing it in to a variable

  setInterval(function displayTime() { // setInterval() will run a function repeatedly at whatever rate we pass.
    var time = dayjs().format("MMM D, YYYY h:mm:ss") // Here we're getting the current date/time from dayjs() and formatting it,
    $("#current-day").text(time) // then here we are setting the text value to the element containing the current-day ID.
  }, 1000) // The 1000 is 1000 milliseconds (1 second). This means the text content gets updated ever second, updating the new current time.


  // The following variables grab the HTML of each time block container. These will be used in the checkTime() function
  // so that we can change the class and alter the CSS depending on what time it is.
  var hour9 = document.getElementById("hour-9")
  var hour10 = document.getElementById("hour-10")
  var hour11 = document.getElementById("hour-11")
  var hour12 = document.getElementById("hour-12")
  var hour1 = document.getElementById("hour-13")
  var hour2 = document.getElementById("hour-14")
  var hour3 = document.getElementById("hour-15")
  var hour4 = document.getElementById("hour-16")
  var hour5 = document.getElementById("hour-17")

  // Variable getting the current live hour as an integer
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

  // The following variables grab the HTML of the text area in each time block. These will be used 
  // to retrieve the users inputed text to local storage.
  var text9 = document.querySelector(".textarea-9")
  var text10 = document.querySelector(".textarea-10")
  var text11 = document.querySelector(".textarea-11")
  var text12 = document.querySelector(".textarea-12")
  var text1 = document.querySelector(".textarea-1")
  var text2 = document.querySelector(".textarea-2")
  var text3 = document.querySelector(".textarea-3")
  var text4 = document.querySelector(".textarea-4")
  var text5 = document.querySelector(".textarea-5")

  // The following block of code targets the class saveBtn which every save button has.
  // On click, a function is called to take the value of the text box (user input) from the container that was clicked, and store it into a variable called valueEl.
  // We also take the name of the ID of the parent container, and store that into a variable called time.
  // Lastly, the function calls local storage to save something. We set the key to the variable "time" (parent ID name) 
  // and the value to the variable "valueEl" (user input from text area).
  $(".saveBtn").on("click", function(){
    var valueEl = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id")
    localStorage.setItem(time, valueEl)
  })

  // Here we are setting the text content of the text areas to their corresponding key-value pair from local storage.
  // This ensures that when the page is refreshed, the content remains and will remain until the user updates the content of the text area
  // and hits the save button again.
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