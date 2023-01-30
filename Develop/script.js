// Wrap all code that interacts with the DOM in a call to jQuery 
      $(document).ready(function(){

      var textInput = "";
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  
  
  var saveBtnEl = $("#saveBtn");

  saveBtnEl.on('click', function () {
      var time = $(this).parent().attr("id");
      console.log(this);
      var textInput = $(this).siblings(".description").val();
      console.log(this);
      
      
      localStorage.setItem("time", "textInput");
      // $('#hour-6 .description').val(localStorage.getItem("hour-6"));
      // $('#hour-7 .description').val(localStorage.getItem("hour-7"));
      // $('#hour-8 .description').val(localStorage.getItem("hour-8"));
      // $('#hour-9 .description').val(localStorage.getItem("hour-9"));
      // $('#hour-10 .description').val(localStorage.getItem("hour-10"));
      // $('#hour-11 .description').val(localStorage.getItem("hour-11"));
      // $('#hour-12 .description').val(localStorage.getItem("hour-12"));
      // $('#hour-13 .description').val(localStorage.getItem("hour-13"));
      // $('#hour-14 .description').val(localStorage.getItem("hour-14"));
      // $('#hour-15 .description').val(localStorage.getItem("hour-15"));
      // $('#hour-16 .description').val(localStorage.getItem("hour-16"));
      // $('#hour-17 .description').val(localStorage.getItem("hour-17"));
      // $('#hour-18 .description').val(localStorage.getItem("hour-18"));
      // $('#hour-19 .description').val(localStorage.getItem("hour-19"));
      // $('#hour-20 .description').val(localStorage.getItem("hour-20"));
      // $('#hour-21 .description').val(localStorage.getItem("hour-21"));
      // $('#hour-22 .description').val(localStorage.getItem("hour-22"));
      // $('#hour-23 .description').val(localStorage.getItem("hour-23"));

    });
      // var textInput = $("#hour-"+i)

      //   $(function () {
      //       $("#hour-"+i).('click', function(){
      //       var textArea ="";
      //       $(".description").each(function(key,value) {
      //             var text = $(this).find()
      //       })

      //       })
      //     saveBtn.onclick = 
      //   })

          // text area class= description, id/key = "#hour-"+i


  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour.        
         

  
  var hour = parseInt(dayjs().format('HH'));
  for (var i=6; i<=23; i++) {
      if (i===hour) {
           $("#hour-"+i).addClass("present"); 
      }
      else if(i<hour) {
            $("#hour-"+i).addClass("past");
      }
      else if(i>hour) {
            $("#hour-"+i).addClass("future");
      }
  }
        


  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
      
// var key = $("#hour-"+i)

// text area class= description, id = "#hour-"+i

// function addHighScore() {
//       var highScores =
//           JSON.parse(window.localStorage.getItem("highscores")) || [];
//       var initials = initialsEl.value.trim();
//       if (initials !== "") {
//           var newScore = {
//               score, initials
//           };
//           // Saves information to localStorage
//           highScores.push(newScore);
//           window.localStorage.setItem("highscores", JSON.stringify(highScores))
//       }
//       viewHighScore();
//   }
  

  

      

// TODO: Add code to display the current date in the header of the page.
      var currentTime = $('#currentDay');
      currentTime.text(dayjs().format('ddd, MMM DD YYYY, h:mm:ss a'));
   
}); 