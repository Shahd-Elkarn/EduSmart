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

        strengthBar.className = "password-strength-bar";

        if (password.length === 0) {
            strengthText.textContent = "";
            return;
        }

        if (strength <= 2) {
            strengthBar.classList.add("weak");
            strengthText.textContent = "Weak";
            strengthText.style.color = "#e74c3c";
        } else if (strength <= 4) {
            strengthBar.classList.add("medium");
            strengthText.textContent = "Medium";
            strengthText.style.color = "#f39c12";
        } else {
            strengthBar.classList.add("strong");
            strengthText.textContent = "Strong";
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

        if (!validateEmail(email)) {
            showError("loginEmail", "loginEmailError", "Invalid email address");
            isValid = false;
        } else {
            showSuccess("loginEmail", "loginEmailError");
        }

        if (password.length < 8) {
            showError(
                "loginPassword",
                "loginPasswordError",
                "Password must be at least 8 characters"
            );
            isValid = false;
        } else {
            showSuccess("loginPassword", "loginPasswordError");
        }

        if (!isValid) return;

        const users = getAllUsers();
        const user = users.find(
            (u) => u.email === email && u.password === password
        );

        if (!user) {
            showError(
                "loginEmail",
                "loginEmailError",
                "Invalid email or password"
            );
            showError(
                "loginPassword",
                "loginPasswordError",
                "Invalid email or password"
            );
            return;
        }

        localStorage.setItem("currentUser", JSON.stringify(user));

        const successMsg = document.getElementById("loginSuccess");
        if (successMsg) {
            successMsg.textContent = "Login successful! ✓";
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
        const confirmPassword = document.getElementById(
            "registerConfirmPassword"
        ).value;

        let isValid = true;

        if (!validateName(name)) {
            showError(
                "registerName",
                "registerNameError",
                "Name must be at least 3 characters"
            );
            isValid = false;
        } else {
            showSuccess("registerName", "registerNameError");
        }

        if (!validateEmail(email)) {
            showError(
                "registerEmail",
                "registerEmailError",
                "Invalid email address"
            );
            isValid = false;
        } else {
            showSuccess("registerEmail", "registerEmailError");
        }

        const users = getAllUsers();
        if (users.some((u) => u.email === email)) {
            showError(
                "registerEmail",
                "registerEmailError",
                "This email is already registered"
            );
            isValid = false;
        }

        if (!validatePassword(password)) {
            showError(
                "registerPassword",
                "registerPasswordError",
                "Weak password: minimum 8 characters, uppercase, lowercase, number, and symbol"
            );
            isValid = false;
        } else {
            showSuccess("registerPassword", "registerPasswordError");
        }

        if (password !== confirmPassword) {
            showError(
                "registerConfirmPassword",
                "registerConfirmPasswordError",
                "Passwords do not match"
            );
            isValid = false;
        } else if (confirmPassword.length > 0) {
            showSuccess(
                "registerConfirmPassword",
                "registerConfirmPasswordError"
            );
        }

        if (!isValid) return;

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
            successMsg.textContent = "Account created successfully! ✓";
            successMsg.classList.add("show");
        }

        form.reset();
        setupPasswordStrength();

        setTimeout(() => {
            window.location.href = "/Auth/Login/Login.html";
        }, 1000);
    });
}

// ==================== Real-time Validation ====================
function setupRealTimeValidation() {
    const loginEmail = document.getElementById("loginEmail");
    if (loginEmail) {
        loginEmail.addEventListener("blur", function () {
            if (this.value.trim() && !validateEmail(this.value)) {
                showError(
                    "loginEmail",
                    "loginEmailError",
                    "Invalid email address"
                );
            } else if (this.value.trim()) {
                showSuccess("loginEmail", "loginEmailError");
            }
        });
    }

    const registerEmail = document.getElementById("registerEmail");
    if (registerEmail) {
        registerEmail.addEventListener("blur", function () {
            if (this.value.trim() && !validateEmail(this.value)) {
                showError(
                    "registerEmail",
                    "registerEmailError",
                    "Invalid email address"
                );
            } else if (this.value.trim()) {
                showSuccess("registerEmail", "registerEmailError");
            }
        });
    }

    const confirmPwd = document.getElementById("registerConfirmPassword");
    const passwordInput = document.getElementById("registerPassword");
    if (confirmPwd && passwordInput) {
        confirmPwd.addEventListener("input", function () {
            if (this.value && this.value !== passwordInput.value) {
                showError(
                    "registerConfirmPassword",
                    "registerConfirmPasswordError",
                    "Passwords do not match"
                );
            } else if (this.value) {
                showSuccess(
                    "registerConfirmPassword",
                    "registerConfirmPasswordError"
                );
            }
        });
    }
}

// ==================== Main Init ====================
document.addEventListener("DOMContentLoaded", () => {
    localStorage.removeItem("currentUser");

    setupFormSwitching();
    setupPasswordStrength();
    setupLoginForm();
    setupRegisterForm();
    setupRealTimeValidation();
});
