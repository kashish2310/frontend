var k = document.querySelectorAll('.grid-item');

var booked_seats = 0;
var remaining_seats = 36;
 document.getElementById("b").innerHTML= booked_seats+'';


 document.getElementById("b2").innerHTML= remaining_seats+'';



k.forEach(item=>
 {
    item.addEventListener("click",function()
    {
       
       
      if(item.classList.contains("clicked"))
      {
       item.classList.remove("clicked");

       booked_seats--;
       remaining_seats++;

       document.getElementById("b").innerHTML= booked_seats+'';
       document.getElementById("b2").innerHTML= remaining_seats+'';
      
       console.log("unclicked");
      }

      else{

        item.classList.add("clicked");

        booked_seats++;
        remaining_seats--;
        document.getElementById("b").innerHTML= booked_seats+'';
        document.getElementById("b2").innerHTML= remaining_seats+'';
        console.log("clicked");
      }

      console.log("Booked Seats:"+ booked_seats);
      console.log("Remaining Seats:" + remaining_seats);

     
    })

    
 }
 )
