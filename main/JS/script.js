// main/JS/script.js - Landing Page
// ⚠️ تأكدي إن utils.js محمل قبل الملف ده

document.addEventListener('DOMContentLoaded', function() {
  
  protectPage();       // يحمي الصفحة
  renderNavbarUser();
  // 1️⃣ Check login and show logout button
  // checkLoginStatus();
  
  // 2️⃣ Exam Feature - Protected
  const examFeature = document.getElementById("ExamFeature");
  if (examFeature) {
    examFeature.onclick = function () {
      if (typeof isLoggedIn === 'function' && isLoggedIn()) {
        window.location.href = "/GenerateExam/Eindex.html";
      } else {
        alert("You must log in first to access the exam generator");
        window.location.href = "/Auth/Login/Login.html";
      }
    };
  }
  // 2️⃣ Borrow Feature - Protected
  const borrowFeature = document.getElementById("BorrowFeature");
  if (borrowFeature) {
    borrowFeature.onclick = function () {
      if (typeof isLoggedIn === 'function' && isLoggedIn()) {
        window.location.href = "/Borrow/library.html";
      } else {
        alert("You must log in first to access the exam generator");
        window.location.href = "/Auth/Login/Login.html";
      }
    };
  }
  
  // 3️⃣ Task Feature - Protected
  const taskFeature = document.getElementById("TaskFeature");
  if (taskFeature) {
    taskFeature.onclick = function () {
      if (typeof isLoggedIn === 'function' && isLoggedIn()) {
        window.location.href = "/TaskManagment/Tindex.html";
      } else {
        alert("You must log in first to access task management");
        window.location.href = "/Auth/Login/Login.html";
      }
    };
  }
  
  // 4️⃣ Get Started Button
  const getStartedBtns = document.querySelectorAll('.btn-primary');
  if (getStartedBtns[0]) {
    getStartedBtns[0].addEventListener('click', function() {
      if (typeof isLoggedIn === 'function' && isLoggedIn()) {
        window.location.href = "/index.html";
      } else {
        window.location.href = "/Auth/Login/Login.html";
      }
    });
  }
  
    // 5️⃣ Watch Demo Video Modal
  const openVideoBtn = document.getElementById("openVideo");
  const videoModal = document.getElementById("videoModal");
  const closeVideoBtn = document.querySelector(".close");
  const demoVideo = document.getElementById("demoVideo");

  if (openVideoBtn && videoModal) {
    openVideoBtn.addEventListener("click", function () {
      videoModal.style.display = "flex";
       document.body.style.overflow = 'hidden';
      if (demoVideo) demoVideo.play();
    });
  }

  if (closeVideoBtn) {
    closeVideoBtn.addEventListener("click", function () {
      videoModal.style.display = "none";
       document.body.style.overflow = 'auto';
      if (demoVideo) {
        demoVideo.pause();
        demoVideo.currentTime = 0;
      }
    });
  }

  window.addEventListener("click", function (e) {
    if (e.target === videoModal) {
      videoModal.style.display = "none";
      if (demoVideo) {
        demoVideo.pause();
        demoVideo.currentTime = 0;
      }
    }
  });



  // 5️⃣ Contact Form
  const contactForm = document.querySelector(".contact-form");
  const contactOverlay = document.getElementById("contactSuccessOverlay");
  const closeBtn = document.getElementById("closeContactSuccess");

  if (contactForm && contactOverlay && closeBtn) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      contactOverlay.classList.remove("hidden");
      contactForm.reset();
    });

    closeBtn.addEventListener("click", function () {
      contactOverlay.classList.add("hidden");
    });
  }
});

// 6️⃣ Check Login Status
function checkLoginStatus() {
  const navLinks = document.querySelector('.nav-links');
  if (!navLinks) return;
  
  // Check if utils.js functions are available
  if (typeof isLoggedIn !== 'function' || typeof getCurrentUser !== 'function') {
    console.error('utils.js not loaded properly');
    return;
  }
  
  if (isLoggedIn()) {
    const currentUser = getCurrentUser();
    
    if (!currentUser) return;
    
    // Add user info and logout button
    const userInfo = document.createElement('li');
    userInfo.style.display = 'flex';
    userInfo.style.alignItems = 'center';
    userInfo.style.gap = '1rem';
    userInfo.innerHTML = `
      <span style="color: white; font-weight: 500;">
        Welcome, ${currentUser.username}
      </span>
      <button id="logoutBtn" style="
        background: white;
        color: #667eea;
        border: none;
        padding: 0.5rem 1.5rem;
        border-radius: 50px;
        cursor: pointer;
        font-weight: bold;
        transition: transform 0.3s;
      ">
        Logout
      </button>
    `;
    
    navLinks.appendChild(userInfo);
    
    // Logout button
    const logoutBtn = document.getElementById('logoutBtn');
    logoutBtn.addEventListener('click', function() {
      if (confirm('Do you want to log out?')) {
        if (typeof logout === 'function') {
          logout();
        }
      }
    });
    
    // Hover effect
    logoutBtn.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-2px)';
    });
    logoutBtn.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
    
  } else {
    // Add Login button
    const loginBtn = document.createElement('li');
    loginBtn.innerHTML = `
      <a href="/Auth/Login/Login.html" style="
        background: white;
        color: #667eea;
        padding: 0.5rem 1.5rem;
        border-radius: 50px;
        font-weight: bold;
        transition: transform 0.3s;
        text-decoration: none;
        display: inline-block;
      ">
        Login
      </a>
    `;
    
    navLinks.appendChild(loginBtn);
  }
}