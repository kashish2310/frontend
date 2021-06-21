var s = document.querySelectorAll('.grid-item , .color');
s.forEach(div=>
  {
    div.addEventListener("click",function()
    {
      div.classList.toggle("clicked")
    })
  }
)  