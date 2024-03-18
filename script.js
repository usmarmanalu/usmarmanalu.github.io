var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for(tablink of tablinks) {
        tablink.classList.remove("active-link");
    }

    for(tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

var sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";
}

function closemenu() {
    sidemenu.style.right = "-200px";
}

  const scriptURL = 'https://script.google.com/macros/s/AKfycbyCB7smtVMAhO9aPBj3PEC8TPUu2YOprdJbxJiMxzPQ0rBbpwM89jyJCmi31pJlOJfVDQ/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Sukses!!, Pesan Anda telah terkirim."
        setTimeout(function() {
            msg.innerHTML = ""
        }, 5000)
        form.reset()

      })
      .catch(error => console.error('Error!', error.message))
  })

function showAlert() {
    alert("Maaf, link sertifikat ini belum tersedia.");
}

document.addEventListener("DOMContentLoaded", function() {
    var fab = document.getElementById("fab");
    var lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
    window.addEventListener("scroll", function() {
      var currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollTop > lastScrollTop) {
        // Scrolling down
        fab.style.bottom = "40px"; // Show FAB
      } else {
        // Scrolling up
        fab.style.bottom = "-60px"; // Hide FAB
      }
      lastScrollTop = currentScrollTop;
    });
  
    // Scroll to top when FAB is clicked
    fab.addEventListener("click", function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  });
  

