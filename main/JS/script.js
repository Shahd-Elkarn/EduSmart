
      document.getElementById("ExamFeature").onclick = function () {
        window.location.href = "Generate Exam/Eindex.html";
      };
      document.getElementById("TaskFeature").onclick = function () {
        window.location.href = "Task Managment/Tindex.html";
      };
      const contactForm = document.querySelector(".contact-form");
      const contactOverlay = document.getElementById("contactSuccessOverlay");
      const closeBtn = document.getElementById("closeContactSuccess");

      contactForm.addEventListener("submit", function (e) {
        e.preventDefault(); // يمنع reload

        // (هنا ممكن في المستقبل تبعتي البيانات للسيرفر)

        contactOverlay.classList.remove("hidden");
        contactForm.reset();
      });

      closeBtn.addEventListener("click", function () {
        contactOverlay.classList.add("hidden");
      });