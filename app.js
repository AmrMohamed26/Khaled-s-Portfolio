// Auto Type

var typed = new Typed(".auto-type", {
  strings: ["Digital Marketer"],
  typeSpeed: 100,
  backSpeed: 80,
  loop: true,
});

// Open and Close Contact Form

var dialog = document.getElementById("contact");

function openContact() {
  dialog.showModal();
}

function closeContact() {
  dialog.close();
}

// Open and Close Contact Me

var div = document.getElementById("contact-me");

function openContactMe() {
  div.showModal();
}

function closeContactMe() {
  div.close();
}

// Responsive Navbar

const btn = document.getElementById("menu-btn");
const nav = document.getElementById("menu");

btn.addEventListener("click", () => {
  btn.classList.toggle("open");
  nav.classList.toggle("flex");
  nav.classList.toggle("hidden");
});

// To Top Button

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 400) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});

//Testimonial Data
const testimonials = [
  {
    name: "Thinesh Sevesankaran",
    job: "Head of Creative, Admiral Digital",
    image: "./testi-1.jpeg",
    testimonial:
      "It was a pleasure to work with Khaled and can say that his skills and abilities have been nothing but short of excellent. I would believe any organization to has him would be lucky because he is an invaluable asset that organisations of this generation desperately need.",
  },
  {
    name: "Ahmed Alfarra",
    job: "Data Analyst, Cognizant",
    image: "./testi-2.jpeg",
    testimonial:
      "Great dealing with Khaled, he is very talented professional. Helped me to take my business to the next level. Get the job done in a timely manner with high efficiency. Never let me down providing knowledgeable answers to my inquiries. Was my pleasure dealing with you!",
  },
  {
    name: "Maryam Abdelmaguid",
    job: "Head of UI/UX, ATEC",
    image: "./testi-3.jpeg",
    testimonial:
      "Hard working and well versed with digital marketing stratigic planning and the execution processes on different platforms. A great source to know the fundamentals of digital marketing and how it all works..",
  },
  {
    name: "Kalpana",
    job: "Regional Marketing Manager, ZALORA",
    image: "./testi-4.jpeg",
    testimonial:
      "Khaled is a pleasure to work with and a skilled technical marketer. He has fantastic attention to the details that really shines through during complex situation especially during crm setup. He's very vibrant, love to help his collugues and takes alot of pride in his work. Good luck Khaled!",
  },
  {
    name: "Jasmin Edgar",
    job: "Graphic Designer, Big Bash Media",
    image: "./testi-5.jpeg",
    testimonial:
      "We’ve joined hands on 2-3 projects, and Khaled is one of the people who would always do his best in everything. Our encounter was short, but it was a pleasure to be working with him.",
  },
  {
    name: "Samuel Kamugisha",
    job: "Founder, The African Journal",
    image: "./testi-6.jpeg",
    testimonial:
      "Working with Khaled is totally a breeze, with his sense of humour and high-level of professionalism, working with him on any project is really worthwhile. Khaled has extensive tactical and strategic experience in Digital marketing and his input to any project would bring it to a success.He is truly an asset to any team.",
  },
  {
    name: "Khaled Emdad",
    job: "Head of Performance, Admiral Digital",
    image: "./testi-7.jpeg",
    testimonial:
      "It was obvious from his name that he would be a great asset to the team! Worked with Khaled for a short span of time on a few projects, but was impressed by entrepreneurial thinking and capabilities. No doubt he is going to continue to polish himself with new skills and knowldege and thus add value to wherever he goes.",
  },
  {
    name: "Mo AlKhalifi",
    job: "Head of Analytics, BitOasis",
    image: "./testi-8.jpeg",
    testimonial:
      "I worked with Khaled for more than 4 years and the level of determination and the passion about digital marketing he showed is outstanding.Awesome technical technical skills and well versed in managing +15 performance marketing channels. If you give Khaled a channel or a platform to explore it would take him little time to master it!.Khaled is a perfect teammate and hire at any organization. His dedication, time management, management skills, and friendly manners prove that!",
  },
  {
    name: "Su Han Ong",
    job: "UI/UX, CR8 Consultancy",
    image: "./testi-9.jpeg",
    testimonial:
      "Khaled is always very patient and taking extra steps to provide guidance and helping others. He is very dedicated to his job and is always eager to learn as well. It has been a pleasure to be able to collaborate with him on a few projects. He will definitely be a great addition at any workplace.",
  },
  {
    name: "Michael Grossman",
    job: "Founder, Big Ocean Dive",
    image: "./testi-10.jpeg",
    testimonial:
      "Khaled helped us start our digital journey. Setting up very successful marketing campaigns. He always took the time to explain everything and share his professional opinion.",
  },
  {
    name: "Sri Yosephin",
    job: "General Manager, Elfo",
    image: "./testi-11.jpeg",
    testimonial:
      "I had the opportunity to have worked with Khaled for more than a year and he has been nothing short of an exemplary figure. He has then continued to outperform and excel in his department. Khaled is a person who has high moral values, takes proactive measures, high leadership attitude, and is always curious to learn more. His contributions to the team and the company will be greatly missed. I have nothing but great appreciation and high respect for Khaled. I highly believe that Khaled would bring determination in everything and will be a great asset to your company.",
  },
];

//Current Slide
let i = 0;

//Total Slides
let j = testimonials.length;

let testimonialContainer = document.getElementById("testimonial-container");
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");

nextBtn.addEventListener("click", () => {
  i = (j + i + 1) % j;
  displayTestimonial();
});
prevBtn.addEventListener("click", () => {
  i = (j + i - 1) % j;
  displayTestimonial();
});

let displayTestimonial = () => {
  testimonialContainer.innerHTML = `
    <p>${testimonials[i].testimonial}</p>
    <img src=${testimonials[i].image}>
    <h3>${testimonials[i].name}</h3>
    <h6>${testimonials[i].job}</h6>
  `;
};
window.onload = displayTestimonial;

// Animations

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});
const selectorElements = document.querySelectorAll(".selector");
selectorElements.forEach((el) => observer.observe(el));

// Validation Form

var nameError = document.getElementById("nameError");
var emailError = document.getElementById("emailError");
var messageError = document.getElementById("messageError");
var submitError = document.getElementById("submitError");
var button = document.getElementById("button");

function validateName() {
  var name = document.getElementById("contactName").value;

  if (name.length == 0) {
    nameError.innerHTML = "This field is required";
    return false;
  }

  if (name.length > 0) {
    nameError.innerHTML = "";
    return true;
  }
}

function validateEmail() {
  var email = document.getElementById("contactEmail").value;

  if (email.length == 0) {
    emailError.innerHTML = "This field is required";
    return false;
  }

  if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
    emailError.innerHTML = "Please enter a valid email";
    return false;
  }

  emailError.innerHTML = "";
  return true;
}

function validateMessage() {
  var message = document.getElementById("contactMessage").value;

  if (message.length == 0) {
    messageError.innerHTML = "This field is required";
    return false;
  }

  if (message.length > 0) {
    messageError.innerHTML = "";
    return true;
  }
}

function validateForm() {
  if (!validateName() || !validateEmail() || !validateMessage()) {
    submitError.style.display = "block";
    submitError.innerHTML = "Please fill all the required fields";
    setTimeout(function () {
      submitError.style.display = "none";
    }, 5000);
    return false;
  }
}

const scriptURL =
  "https://script.google.com/macros/s/AKfycbwOmnMxFExT-9bk4RLAK0ON77QL290ga03YB6DycCo-10mWx5RFIPuoq7pvDGAkbVxqHg/exec";
const form = document.forms["contact-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  button.innerHTML = "Sending...";
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then(() => {
      msg.innerHTML = "Thank you. Will reply ASAP";
      setTimeout(function () {
        msg.innerHTML = "";
        button.innerHTML = "Send Message";
      }, 1000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
