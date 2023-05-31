const modeToggle = document.getElementById('mode-toggle');
const body = document.body;

modeToggle.addEventListener('click', function() {
  body.classList.toggle('white-mode');
});

var area = document.getElementById("Message");
area.addEventListener("focus" , function(){
  area.style.background="white"
});

area.addEventListener("blur", function() {
  area.style.background=""
  
})

