// ==================== Validation Functions ====================
function validateName(name) {
    return name.trim().length >= 3;
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.trim());
}

function validatePassword(password) {
    if (password.length < 8) return false;
    if (!/[a-z]/.test(password)) return false;
    if (!/[A-Z]/.test(password)) return false;
    if (!/[0-9]/.test(password)) return false;
    if (!/[$@#&!]/.test(password)) return false;
    return true;
}

// ==================== Storage Helper Functions ====================
function getAllUsers() {
    const users = localStorage.getItem("users");
    return users ? JSON.parse(users) : [];
}

function saveAllUsers(users) {
    localStorage.setItem("users", JSON.stringify(users));
}

function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

// ==================== UI Helper Functions ====================
function showError(inputId, errorId, message) {
    const input = document.getElementById(inputId);
    const error = document.getElementById(errorId);
    if (input && error) {
        input.classList.add("error");
        input.classList.remove("success");
        error.textContent = message;
        error.classList.add("show");
    }
}

function showSuccess(inputId, errorId) {
    const input = document.getElementById(inputId);
    const error = document.getElementById(errorId);
    if (input && error) {
        input.classList.remove("error");
        input.classList.add("success");
        error.textContent = "";
        error.classList.remove("show");
    }
}

// ==================== Password Strength Indicator ====================
function setupPasswordStrength() {
    const passwordInput = document.getElementById("registerPassword");
    const strengthBar = document.getElementById("strengthBar");
    const strengthText = document.getElementById("strengthText");

    if (!passwordInput || !strengthBar || !strengthText) return;

    passwordInput.addEventListener("input", () => {
        const password = passwordInput.value;
        let strength = 0;

        if (password.length >= 8) strength++;
        if (/[a-z]/.test(password)) strength++;
        if (/[A-Z]/.test(password)) strength++;
        if (/[0-9]/.test(password)) strength++;
        if (/[$@#&!]/.test(password)) strength++;

        // Reset classes
        strengthBar.className = "password-strength-bar";

        if (password.length === 0) {
            strengthText.textContent = "";
            return;
        }

        if (strength <= 2) {
            strengthBar.classList.add("weak");
            strengthText.textContent = "ضعيف";
            strengthText.style.color = "#e74c3c";
        } else if (strength <= 4) {
            strengthBar.classList.add("medium");
            strengthText.textContent = "متوسط";
            strengthText.style.color = "#f39c12";
        } else {
            strengthBar.classList.add("strong");
            strengthText.textContent = "قوي";
            strengthText.style.color = "#2ecc71";
        }
    });
}

// ==================== Form Switching ====================
function setupFormSwitching() {
    const loginFormDiv = document.getElementById("loginForm");
    const registerFormDiv = document.getElementById("registerForm");
    const showRegisterBtn = document.getElementById("showRegister");
    const showLoginBtn = document.getElementById("showLogin");

    if (showRegisterBtn) {
        showRegisterBtn.addEventListener("click", (e) => {
            e.preventDefault();
            loginFormDiv?.classList.add("hidden");
            registerFormDiv?.classList.remove("hidden");
        });
    }

    if (showLoginBtn) {
        showLoginBtn.addEventListener("click", (e) => {
            e.preventDefault();
            registerFormDiv?.classList.add("hidden");
            loginFormDiv?.classList.remove("hidden");
        });
    }
}

// ==================== Login Form ====================
function setupLoginForm() {
    const form = document.getElementById("login");
    if (!form) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const email = document.getElementById("loginEmail").value.trim();
        const password = document.getElementById("loginPassword").value;

        let isValid = true;

        // Validate email
        if (!validateEmail(email)) {
            showError("loginEmail", "loginEmailError", "الإيميل غير صحيح");
            isValid = false;
        } else {
            showSuccess("loginEmail", "loginEmailError");
        }

        // Validate password length
        if (password.length < 8) {
            showError("loginPassword", "loginPasswordError", "كلمة المرور قصيرة جدًا (8 أحرف على الأقل)");
            isValid = false;
        } else {
            showSuccess("loginPassword", "loginPasswordError");
        }

        if (!isValid) return;

        const users = getAllUsers();
        const user = users.find(u => u.email === email && u.password === password);

        if (!user) {
            // رسالة عامة للأمان (ما نفرقش بين إيميل موجود أو كلمة مرور غلط)
            showError("loginEmail", "loginEmailError", "الإيميل أو كلمة المرور غير صحيحة");
            showError("loginPassword", "loginPasswordError", "الإيميل أو كلمة المرور غير صحيحة");
            return;
        }

        // حفظ المستخدم الحالي
        localStorage.setItem("currentUser", JSON.stringify(user));

        const successMsg = document.getElementById("loginSuccess");
        if (successMsg) {
            successMsg.textContent = "تم تسجيل الدخول بنجاح! ✓";
            successMsg.classList.add("show");
        }

        form.reset();

        setTimeout(() => {
            window.location.href = "/index.html";
        }, 1000);
    });
}

// ==================== Register Form ====================
function setupRegisterForm() {
    const form = document.getElementById("register");
    if (!form) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("registerName").value.trim();
        const email = document.getElementById("registerEmail").value.trim();
        const password = document.getElementById("registerPassword").value;
        const confirmPassword = document.getElementById("registerConfirmPassword").value;

        let isValid = true;

        // Name
        if (!validateName(name)) {
            showError("registerName", "registerNameError", "الاسم يجب أن يكون 3 أحرف على الأقل");
            isValid = false;
        } else {
            showSuccess("registerName", "registerNameError");
        }

        // Email
        if (!validateEmail(email)) {
            showError("registerEmail", "registerEmailError", "الإيميل غير صحيح");
            isValid = false;
        } else {
            showSuccess("registerEmail", "registerEmailError");
        }

        // Check if email already exists
        const users = getAllUsers();
        if (users.some(u => u.email === email)) {
            showError("registerEmail", "registerEmailError", "هذا الإيميل مسجل مسبقًا");
            isValid = false;
        }

        // Password
        if (!validatePassword(password)) {
            showError("registerPassword", "registerPasswordError", "كلمة المرور ضعيفة: يجب 8 أحرف، حرف كبير، صغير، رقم، ورمز");
            isValid = false;
        } else {
            showSuccess("registerPassword", "registerPasswordError");
        }

        // Confirm Password
        if (password !== confirmPassword) {
            showError("registerConfirmPassword", "registerConfirmPasswordError", "كلمتا المرور غير متطابقتين");
            isValid = false;
        } else if (confirmPassword.length > 0) {
            showSuccess("registerConfirmPassword", "registerConfirmPasswordError");
        }

        if (!isValid) return;

        // Create new user
        const newUser = {
            id: generateId(),
            name,
            email,
            password
        };

        users.push(newUser);
        saveAllUsers(users);

        const successMsg = document.getElementById("registerSuccess");
        if (successMsg) {
            successMsg.textContent = "تم إنشاء الحساب بنجاح! ✓";
            successMsg.classList.add("show");
        }

        form.reset();
        setupPasswordStrength(); // Reset strength indicator

        setTimeout(() => {
            window.location.href = "/Auth/Login/Login.html";
        }, 1000);
    });
}

// ==================== Real-time Validation ====================
function setupRealTimeValidation() {
    // Login Email
    const loginEmail = document.getElementById("loginEmail");
    if (loginEmail) {
        loginEmail.addEventListener("blur", function () {
            if (this.value.trim() && !validateEmail(this.value)) {
                showError("loginEmail", "loginEmailError", "الإيميل غير صحيح");
            } else if (this.value.trim()) {
                showSuccess("loginEmail", "loginEmailError");
            }
        });
    }

    // Register Email
    const registerEmail = document.getElementById("registerEmail");
    if (registerEmail) {
        registerEmail.addEventListener("blur", function () {
            if (this.value.trim() && !validateEmail(this.value)) {
                showError("registerEmail", "registerEmailError", "الإيميل غير صحيح");
            } else if (this.value.trim()) {
                showSuccess("registerEmail", "registerEmailError");
            }
        });
    }

    // Confirm Password match
    const confirmPwd = document.getElementById("registerConfirmPassword");
    const passwordInput = document.getElementById("registerPassword");
    if (confirmPwd && passwordInput) {
        confirmPwd.addEventListener("input", function () {
            if (this.value && this.value !== passwordInput.value) {
                showError("registerConfirmPassword", "registerConfirmPasswordError", "كلمتا المرور غير متطابقتين");
            } else if (this.value) {
                showSuccess("registerConfirmPassword", "registerConfirmPasswordError");
            }
        });
    }
}

// ==================== Main Init ====================
document.addEventListener("DOMContentLoaded", () => {
    // 🔹 مسح أي مستخدم حالي قديم عند تحميل صفحة الدخول/التسجيل
    localStorage.removeItem("currentUser");

    setupFormSwitching();
    setupPasswordStrength();
    setupLoginForm();
    setupRegisterForm();
    setupRealTimeValidation();
});