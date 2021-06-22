var s = document.querySelectorAll('.grid-item');
s.forEach(div=>
  {
    div.addEventListener("click",function()
    {
      div.classList.toggle("clicked")
    })
  }
)  