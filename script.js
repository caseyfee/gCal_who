// Wrap all code that interacts with the DOM in a call to jQuery 
$(function () {

      var textInput = "";
      // A listener for click events on the save button. 

      var saveBtnEl = $(".saveBtn");

      saveBtnEl.on('click', function () {
            var time = $(this).parent().attr("id");
            textInput = $(this).siblings(".description").val();


            // Code to get any user input that was saved in localStorage and set the values of the corresponding textarea elements.
            localStorage.setItem(time, textInput);
      });

      $('#hour-6 .description').val(localStorage.getItem("hour-6"));
      $('#hour-7 .description').val(localStorage.getItem("hour-7"));
      $('#hour-8 .description').val(localStorage.getItem("hour-8"));
      $('#hour-9 .description').val(localStorage.getItem("hour-9"));
      $('#hour-10 .description').val(localStorage.getItem("hour-10"));
      $('#hour-11 .description').val(localStorage.getItem("hour-11"));
      $('#hour-12 .description').val(localStorage.getItem("hour-12"));
      $('#hour-13 .description').val(localStorage.getItem("hour-13"));
      $('#hour-14 .description').val(localStorage.getItem("hour-14"));
      $('#hour-15 .description').val(localStorage.getItem("hour-15"));
      $('#hour-16 .description').val(localStorage.getItem("hour-16"));
      $('#hour-17 .description').val(localStorage.getItem("hour-17"));
      $('#hour-18 .description').val(localStorage.getItem("hour-18"));
      $('#hour-19 .description').val(localStorage.getItem("hour-19"));
      $('#hour-20 .description').val(localStorage.getItem("hour-20"));
      $('#hour-21 .description').val(localStorage.getItem("hour-21"));
      $('#hour-22 .description').val(localStorage.getItem("hour-22"));
      $('#hour-23 .description').val(localStorage.getItem("hour-23"));


      // Code to apply the past, present, or future class to each time block by comparing the id to the current hour.        

      var hour = parseInt(dayjs().format('HH'));
      for (var i = 6; i <= 23; i++) {
            if (i === hour) {
                  $("#hour-" + i).addClass("present");
            }
            else if (i < hour) {
                  $("#hour-" + i).addClass("past");
            }
            else if (i > hour) {
                  $("#hour-" + i).addClass("future");
            }
      }


      // Code to display the current date in the header of the page.
      var currentTime = $('#currentDay');
      currentTime.text(dayjs().format('ddd, MMM DD YYYY, h:mm:ss a'));

}); 