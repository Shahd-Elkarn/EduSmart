
function getAllUsers() {
  const usersData = localStorage.getItem('users');
  if (!usersData) return [];
  try {
    return JSON.parse(usersData);
  } catch (err) {
    console.error("Error parsing users data:", err);
    return [];
  }
}

function saveAllUsers(users) {
  try {
    localStorage.setItem('users', JSON.stringify(users));
  } catch (err) {
    console.error("Error saving users data:", err);
  }
}

function getCurrentUser() {
  const userData = localStorage.getItem("currentUser");
  if (!userData) return null;

  try {
    return JSON.parse(userData);
  } catch (err) {
    console.error("Invalid currentUser data, clearing...", err);
    localStorage.removeItem("currentUser");
    return null;
  }
}

function updateCurrentUser(updatedData) {
  const currentUser = getCurrentUser();
  if (!currentUser) return false;

  const users = getAllUsers();
  const userIndex = users.findIndex(user => user.email === currentUser.email);

  if (userIndex === -1) return false;
  users[userIndex] = { ...users[userIndex], ...updatedData };

  saveAllUsers(users);

  localStorage.setItem("currentUser", JSON.stringify(users[userIndex]));

  return true;
}

function isLoggedIn() {
  return getCurrentUser() !== null;
}

function protectPage() {
  if (!isLoggedIn()) {
    window.location.href = "/Auth/Login/Login.html";
  }
}

function logout() {
  if (confirm("Do you want to log out?")) {
    localStorage.removeItem("currentUser");
    window.location.href = "/Auth/Login/Login.html";
  }
}

function showMessage(elementId, message, type = 'error') {
  const element = document.getElementById(elementId);
  if (!element) return;

  element.textContent = message;
  element.className = type; 
  element.style.display = 'block';

  setTimeout(() => {
    element.style.display = 'none';
  }, 5000);
}

function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
}

function renderNavbarUser() {
  const navLinks = document.querySelector(".nav-links");
  if (!navLinks) return;

  if (document.getElementById("userWelcomeItem")) return;

  const currentUser = getCurrentUser();
  if (!currentUser) return;

  const userItem = document.createElement("li");
  userItem.id = "userWelcomeItem"; 
  userItem.style.display = "flex";
  userItem.style.alignItems = "center";
  userItem.style.gap = "1rem";

  userItem.innerHTML = `
    <span style="color:white; font-weight:500;">
      Welcome, ${currentUser.name}
    </span>
    <button id="logoutBtn" style="
      background:white;
      color:#667eea;
      border:none;
      padding:0.5rem 1.5rem;
      border-radius:50px;
      cursor:pointer;
      font-weight:bold;
      transition: all 0.3s;
    ">
      Logout
    </button>
  `;

  navLinks.appendChild(userItem);

  const logoutBtn = document.getElementById("logoutBtn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", logout);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderNavbarUser();
});