var currentHour = parseInt(moment().format('H'))

var textInput = {
  task: {
  9: "",
  10: "",
  11: "",
  12: "",
  13: "",
  14: "",
  15: "",
  16: "",
  17: "",
  },
};


$(document).ready(function() {
    $('.saveBtn').on('click', function() {
        var time = $(this).val()
        console.log(time)
      })

      // get time and text values
      


      // save in localStorage
      $(".saveBtn").click(function (){
        // let time = $(this).parent().attr("id")
        // let task = $("#" + time).children()[1].value;

        //   time = parseInt(time.replace("hour-", ""));

        //   updateLocalStorage();
        console.log("buttonclicked")
      });
     
      
      // Timeout to remove 'show' class after 5 seconds
   

      function hourUpdater() {
      // get current number of hours
      
      
      // loop over time blocks
      console.log(currentHour)
      for(var i=9; i<18; i++) {

        if (currentHour < i){
          $("#hour-" +i).addClass("future")
        }
        else if(currentHour > i){
          $("#hour-" +i).addClass("past")
        }
        else if(currentHour === i){
          $("#hour-" +i).addClass("present")
        }
      }
      // check if we've moved past this time
    }
    hourUpdater();

    // load any saved data from localStorage
    $('.9AM').val(localStorage.getItem('9'))
    $('.10AM').val(localStorage.getItem('10'))
    $('.11AM').val(localStorage.getItem('11'))
    $('.12PM').val(localStorage.getItem('12'))
    $('.1PM').val(localStorage.getItem('13'))
    $('.2PM').val(localStorage.getItem('14'))
    $('.3PM').val(localStorage.getItem('15'))
    $('.4PM').val(localStorage.getItem('16'))
    $('.5PM').val(localStorage.getItem('17'))
    
    // display current day on page
    $('#currentDay').text(moment().format('dddd, MMMM Do'));
  });