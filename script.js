    function toggleMenu() {
      const menu = document.getElementById('menu');
      menu.classList.toggle('active');
    }

//Time
     function showTime() {
      let date = new Date();
      let h = date.getHours(); 
      let m = date.getMinutes(); 
      let s = date.getSeconds(); 
      let session = "AM";

      if(h == 0){
        h = 12;
      }

      if(h > 12){
        h = h - 12;
        session = "PM";
      }

      h = (h < 10) ? "0" + h : h;
      m = (m < 10) ? "0" + m : m;
      s = (s < 10) ? "0" + s : s;

      let time = h + ":" + m + ":" + s + " " + session;
      document.getElementById("clock").innerText = time;
      document.getElementById("clock").textContent = time;

      setTimeout(showTime, 1000);
    }
    

    showTime();
    //Greetimgs
    const greetingElement = document.getElementById('greeting');
    function updateGreeting() {
      const currentHour = new Date().getHours();
      let greeting;
      if (currentHour >= 0 && currentHour < 6) {
        greeting = 'Good night!'+" ";
      } else if (currentHour >= 6 && currentHour < 12) {
        greeting = 'Good morning!'+" ";
      } else if (currentHour >= 12 && currentHour < 18) {
        greeting = 'Good afternoon!'+" ";
      } else {
        greeting = 'Good evening!'+" ";
      }
      greetingElement.textContent = greeting;
    }
    updateGreeting();
    setInterval(updateGreeting, 3600000);
    const tim = new Date();
        const date =document.getElementById('date').innerHTML=
"Date Today is:"+" "+tim;
        const thx =document.getElementById('Thanks').innerHTML=
    "Thank you for Using Adventists Online App"+", "+" Please recommend the app to others!";
    
    // typewriter
    const typedText = document.querySelector('.typed-text');
const text = 'dventists Online';
let index = 0;

function typeWriter() {
  typedText.textContent += text[index];
  index++;
  if (index === text.length) {
    clearInterval(intervalId);
  }
}
const intervalId = setInterval(typeWriter, 300);




	// internet connection
// Get the loader container, loader, and error message elements
        const loader = document.querySelector('.loader');
        const errorMessage = document.querySelector('.error-message');
        const content = document.querySelector('.content');
        function showLoader() {
            loader.style.display = 'block';
            errorMessage.style.display = 'none';
            content.style.display = 'none';
        }
        function showError() {
            loader.style.display = 'none';
            errorMessage.style.display = 'block';
            content.style.display = 'none';
        }
        function showContent() {
            loader.style.display = 'none';
         errorMessage.style.display = 'none';
            content.style.display = 'block';
        }
        function checkConnectivity() {
            if (navigator.onLine) {
           showLoader();        setTimeout(() => {              showContent();
                }, 1000);
            } else {
                  showLoader();
           setTimeout(() => {
                   showError();
                }, 2000);
            }
        }
        window.addEventListener('online', checkConnectivity);
        window.addEventListener('offline', checkConnectivity); checkConnectivity();
        
        
  //To Top button function
var backBtn = document.querySelector(".back-btn");
window.addEventListener("scroll", function() {
if (this.pageYOffset > 100) {
backBtn.classList.add("active");
} else {
backBtn.classList.remove("active");
}
});
backBtn.addEventListener("click", function() {
window.scrollTo({
top: 0,
behavior: 'smooth'
})
});
//redirectToSearchPage()

document.getElementById('searchit').addEventListener('click', function() {
  const searchInput = this.querySelector('input');
  if (!searchInput.disabled) {
    window.location.href = 'search page.html';
  }
});



