// Wrap all code that interacts with the DOM in a call to jQuery 
      $(document).ready(function(){
            // Write code here
        

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //

        // $(function () {
          // saveBtn.onclick = 

      //     var SaveButton = $('#button-sm');
      //     SaveButton.hide();

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?



// for (var i=6; i<11,i++ ) {
//       // If time is <= ("hour-"+i) to current time, add/remove class
      
      // $("hour-"[i]).click(function(){
      //       $("hour-"[i]).addClass("past");
      // });

//       //  if time hour = current time, use present class 

//         // if time hour >= to current time , use future class
// }
        

        
  
  // eventDetails{  // }

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
        // 



  

      

// TODO: Add code to display the current date in the header of the page.
      var currentTime = $('#currentDay');
      currentTime.text(dayjs().format('ddd, MMM DD YYYY, h:mm:ss a'));
      console.log(dayjs().hour);

      
}); 