// utils.js - ملف مساعد لنظام المستخدمين (User System)

// 1️⃣ جلب كل المستخدمين من localStorage
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

// 2️⃣ حفظ كل المستخدمين في localStorage
function saveAllUsers(users) {
  try {
    localStorage.setItem('users', JSON.stringify(users));
  } catch (err) {
    console.error("Error saving users data:", err);
  }
}

// 3️⃣ جلب المستخدم الحالي (اللي مسجل دخول)
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

// 4️⃣ تحديث بيانات المستخدم الحالي (اسم، صورة، إلخ)
function updateCurrentUser(updatedData) {
  const currentUser = getCurrentUser();
  if (!currentUser) return false;

  const users = getAllUsers();
  const userIndex = users.findIndex(user => user.email === currentUser.email);

  if (userIndex === -1) return false;

  // دمج البيانات الجديدة مع القديمة
  users[userIndex] = { ...users[userIndex], ...updatedData };

  // حفظ التغييرات في قاعدة البيانات الكلية
  saveAllUsers(users);

  // تحديث الـ currentUser في localStorage
  localStorage.setItem("currentUser", JSON.stringify(users[userIndex]));

  return true;
}

// 5️⃣ فحص إذا كان المستخدم مسجل دخول
function isLoggedIn() {
  return getCurrentUser() !== null;
}

// 6️⃣ حماية الصفحة - إعادة توجيه للـ Login إذا مش مسجل دخول
function protectPage() {
  if (!isLoggedIn()) {
    window.location.href = "/Auth/Login/Login.html";
  }
}

// 7️⃣ تسجيل الخروج (Logout)
function logout() {
  if (confirm("Do you want to log out?")) {
    localStorage.removeItem("currentUser");
    window.location.href = "/Auth/Login/Login.html";
  }
}

// 8️⃣ عرض رسالة نجاح أو خطأ (مع إخفاء تلقائي)
function showMessage(elementId, message, type = 'error') {
  const element = document.getElementById(elementId);
  if (!element) return;

  element.textContent = message;
  element.className = type; // 'error' أو 'success'
  element.style.display = 'block';

  // إخفاء الرسالة بعد 5 ثواني
  setTimeout(() => {
    element.style.display = 'none';
  }, 5000);
}

// 9️⃣ توليد ID فريد وآمن نسبيًا
function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
}

// 🔟 عرض اسم المستخدم وزر Logout في الـ Navbar
function renderNavbarUser() {
  const navLinks = document.querySelector(".nav-links");
  if (!navLinks) return;

  // إذا كان موجود بالفعل، متعملش حاجة (منع التكرار)
  if (document.getElementById("userWelcomeItem")) return;

  const currentUser = getCurrentUser();
  if (!currentUser) return;

  const userItem = document.createElement("li");
  userItem.id = "userWelcomeItem"; // ID لمنع التكرار
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

  // إضافة حدث الخروج
  const logoutBtn = document.getElementById("logoutBtn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", logout);
  }
}

// document.addEventListener("DOMContentLoaded", () => {
//   renderNavbarUser();
//   protectPage(); // لو الصفحة محتاجة حماية
// });