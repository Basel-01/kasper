// Responsive Nav
let burger = document.querySelector(".toggle-menue");
let mainNav = document.querySelector("header ul");

burger.onclick = () => {
  mainNav.classList.toggle("show");
};

// Slider
let landing = document.querySelector(".landing");
let images = ["url('image/landing1.jpg')", "url('image/landing2.jpg')", "url('image/landing3.jpg')"];
let arrowRight = document.querySelector(".landing .fa-angle-right");
let arrowLeft = document.querySelector(".landing .fa-angle-left");
let bullets = document.querySelectorAll(".landing .bullets li");
let activeSlide = 1;

arrowRight.addEventListener("click", () => {
  activeSlide++;
  if (activeSlide > images.length - 1) {
    activeSlide = 0;
  }
  setBg();
});
arrowLeft.addEventListener("click", () => {
  activeSlide--;
  if (activeSlide < 0) {
    activeSlide = images.length - 1;
  }
  setBg();
});
bullets.forEach(el => {
  el.addEventListener("click", e => {
    bullets.forEach(el => {
      el.classList.remove("active");
    });
    e.target.classList.add("active");
    activeSlide = +e.target.dataset.bg;
    setBg();
  });
});
function setBg () {
  bullets.forEach(el => {
    if (+el.dataset.bg === activeSlide) {
      el.classList.add("active");
    } else {
      el.classList.remove("active");
    }
  });
  landing.style.backgroundImage = images[activeSlide];
}

// Scroll Btn
let scrollBtn = document.querySelector(".landing .scroll-btn");

window.addEventListener("scroll", () => {
  if (this.scrollY >= 600) {
    scrollBtn.classList.add("show");
  } else {
    scrollBtn.classList.remove("show");
  }
});
scrollBtn.onclick = () => {
  window.scrollTo ({
    top: 0,
    behavior:"smooth"
  });
};

// Search btn
let searchBtn = document.querySelector("header nav .search");
let searchHide = document.createElement("div");
let searchForm = document.createElement("form");
let searchText = document.createElement("input");
let searchSub = document.createElement("input");

searchBtn.addEventListener("click", () => {
  searchHide.classList.add("hide");
  searchText.setAttribute("type", "text");
  searchSub.setAttribute("type", "submit");
  searchSub.value = "Search";
  searchForm.appendChild(searchText);
  searchForm.appendChild(searchSub);
  searchHide.appendChild(searchForm);
  document.querySelector("header").appendChild(searchHide);
  document.body.style.overflow = "hidden";
});
searchHide.addEventListener("click", e => {
  if (e.target.classList.contains("hide") || e.target === searchSub) {
    searchHide.remove();
    document.body.style.overflow = "visible";
  }
});

// Features Animate
let featureSection = document.querySelector(".features");
let featureText = document.querySelector(".features .text");
window.addEventListener("scroll", () => {
  if (scrollY >= featureSection.offsetTop-600) {
    featureText.style.transform = "translateX(0%)";
  }
});

// Shuffle Portfolio
let switcher = document.querySelectorAll(".portfolio .filter-menu li");
let works = document.querySelectorAll(".portfolio .filter-items > div");

switcher.forEach(li => {
  li.addEventListener("click", e => {
    switcher.forEach(el => {
      el.classList.remove("active");
    });
    e.target.classList.add("active");
    let targetData = e.target.dataset.target;
    works.forEach(work => {
      work.classList.remove("active");
      work.classList.add("delete");
      if (work.dataset.item === targetData || targetData === "all") {
        work.classList.add("active");
        work.classList.remove("delete");
      }
    });
  });
});

// Form Session 
let form = document.querySelector(".contact-us form");
let inputs = document.querySelectorAll(".contact-us [name]");

window.onload = () => {
  inputs.forEach(input => {
    input.value = window.sessionStorage.getItem(input.name)
  });
};
form.onsubmit = () => {
  window.sessionStorage.clear();
};
inputs.forEach(input => {
  input.oninput = () => {
    window.sessionStorage.setItem(input.name, input.value)
  }
})

// Statistics Numbers increasing
let statisticsSection = document.querySelector(".statistics");
let statisticsNumbers = document.querySelectorAll(".statistics p.number");
let started = false;

window.addEventListener("scroll", () => {
  if (window.scrollY >= statisticsSection.offsetTop-400) {
    if (!started) {
      statisticsNumbers.forEach(num => {
        let goal = num.dataset.number;
        let count = setInterval(() => {
          num.textContent++;
          if (num.textContent == goal) {
            clearInterval(count);
          }
        }, 1000 / goal);
      });
      started = true;
    }
  }
});

// Progress & Numbers Animation
// Progress Animation
let barsSection = document.querySelector(".skills");
let bars = document.querySelectorAll(".skills .color");

window.addEventListener("scroll", () => {
  if (window.scrollY >= barsSection.offsetTop-400) {
    bars.forEach(bar => {
      bar.style.width = `${bar.dataset.progress}%`;
    });
  }
});
// Skills Numbers increasing
let skillsNumbers = document.querySelectorAll(".skills .color span");
let startedTwo = false;

window.addEventListener("scroll", function () {
  if (window.scrollY >= barsSection.offsetTop-400) {
    if (!startedTwo) {
      skillsNumbers.forEach(num => {
        let goal = num.parentNode.parentNode.dataset.progress;
        let count = setInterval(() => {
          num.textContent++;
          if (num.textContent == goal) {
            clearInterval(count);
          }
        }, 1000 / goal);
        num.nextElementSibling.innerHTML = "%";
      }
      );
      startedTwo = true;
    }
  }
});