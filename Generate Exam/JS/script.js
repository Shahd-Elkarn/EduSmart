 
      const questionsData = [
        {
          question: "What does SQL stand for?",
          choices: [
            "Structured Query Language",
            "Simple Query Language",
            "Standard Query Language",
            "System Query Language",
          ],
          correctAnswer: "Structured Query Language",
          course: "Database",
          marks: 1,
        },
        {
          question: "Which command is used to retrieve data?",
          choices: ["GET", "SELECT", "FETCH", "OPEN"],
          correctAnswer: "SELECT",
          course: "Database",
          marks: 1,
        },
        {
          question: "Which keyword removes duplicates?",
          choices: ["DELETE", "DISTINCT", "REMOVE", "UNIQUE"],
          correctAnswer: "DISTINCT",
          course: "Database",
          marks: 1,
        },
        {
          question: "Primary key must be?",
          choices: ["Nullable", "Unique", "Duplicate", "Optional"],
          correctAnswer: "Unique",
          course: "Database",
          marks: 1,
        },
        {
          question: "Which SQL clause is used to filter records?",
          choices: ["WHERE", "ORDER", "GROUP", "FILTER"],
          correctAnswer: "WHERE",
          course: "Database",
          marks: 1,
        },
        {
          question: "Which command deletes a table?",
          choices: ["REMOVE", "DROP", "DELETE", "CLEAR"],
          correctAnswer: "DROP",
          course: "Database",
          marks: 1,
        },
        {
          question: "Which joins returns all records?",
          choices: ["INNER", "LEFT", "RIGHT", "FULL"],
          correctAnswer: "FULL",
          course: "Database",
          marks: 1,
        },
        {
          question: "Which constraint enforces uniqueness?",
          choices: ["PRIMARY", "UNIQUE", "FOREIGN", "CHECK"],
          correctAnswer: "UNIQUE",
          course: "Database",
          marks: 1,
        },
        {
          question: "Which datatype stores text?",
          choices: ["INT", "VARCHAR", "FLOAT", "DATE"],
          correctAnswer: "VARCHAR",
          course: "Database",
          marks: 1,
        },
        {
          question: "Which command updates data?",
          choices: ["UPDATE", "MODIFY", "SET", "CHANGE"],
          correctAnswer: "UPDATE",
          course: "Database",
          marks: 1,
        },
        {
          question: "Which clause sorts data?",
          choices: ["SORT", "ORDER BY", "GROUP BY", "WHERE"],
          correctAnswer: "ORDER BY",
          course: "Database",
          marks: 1,
        },
        {
          question: "Foreign key is used to?",
          choices: [
            "Identify rows",
            "Link tables",
            "Sort data",
            "Delete records",
          ],
          correctAnswer: "Link tables",
          course: "Database",
          marks: 1,
        },
        {
          question: "Which command adds data?",
          choices: ["INSERT", "ADD", "PUT", "STORE"],
          correctAnswer: "INSERT",
          course: "Database",
          marks: 1,
        },
        {
          question: "Which SQL is used to create table?",
          choices: ["MAKE", "NEW", "CREATE", "BUILD"],
          correctAnswer: "CREATE",
          course: "Database",
          marks: 1,
        },
        {
          question: "Which clause groups records?",
          choices: ["GROUP BY", "ORDER BY", "WHERE", "JOIN"],
          correctAnswer: "GROUP BY",
          course: "Database",
          marks: 1,
        },
        {
          question: "What is the brain of the operating system?",
          choices: ["CPU", "Kernel", "Shell", "Hardware"],
          correctAnswer: "Kernel",
          course: "Operating System",
          marks: 1,
        },
        {
          question: "Which process scheduling algorithm is preemptive?",
          choices: ["FCFS", "SJF", "Round Robin", "Priority"],
          correctAnswer: "Round Robin",
          course: "Operating System",
          marks: 1,
        },
        {
          question: "What manages memory in OS?",
          choices: [
            "File Manager",
            "Process Manager",
            "Memory Manager",
            "Device Manager",
          ],
          correctAnswer: "Memory Manager",
          course: "Operating System",
          marks: 1,
        },
        {
          question: "Deadlock occurs when?",
          choices: [
            "Processes wait for each other",
            "One process terminates",
            "Resources are free",
            "No processes running",
          ],
          correctAnswer: "Processes wait for each other",
          course: "Operating System",
          marks: 1,
        },
        {
          question: "Which is a type of file system?",
          choices: ["FAT", "RAM", "CPU", "ROM"],
          correctAnswer: "FAT",
          course: "Operating System",
          marks: 1,
        },
        {
          question: "Command to list files in Linux?",
          choices: ["dir", "ls", "list", "show"],
          correctAnswer: "ls",
          course: "Operating System",
          marks: 1,
        },
        {
          question: "What is multitasking?",
          choices: [
            "Single task",
            "Multiple tasks simultaneously",
            "Sequential tasks",
            "No tasks",
          ],
          correctAnswer: "Multiple tasks simultaneously",
          course: "Operating System",
          marks: 1,
        },
        {
          question: "Virtual memory uses?",
          choices: ["RAM only", "Hard disk", "CPU", "Cache"],
          correctAnswer: "Hard disk",
          course: "Operating System",
          marks: 1,
        },
        {
          question: "Which is not an operating system?",
          choices: ["Windows", "Linux", "Android", "Oracle"],
          correctAnswer: "Oracle",
          course: "Operating System",
          marks: 1,
        },
        {
          question: "Thrashing happens due to?",
          choices: [
            "Excessive paging",
            "Low CPU usage",
            "High disk space",
            "Network issues",
          ],
          correctAnswer: "Excessive paging",
          course: "Operating System",
          marks: 1,
        },
        {
          question: "What is used to declare a variable in modern JS?",
          choices: ["var", "let", "const", "both let and const"],
          correctAnswer: "both let and const",
          course: "JavaScript",
          marks: 1,
        },
        {
          question: "Which method adds to end of array?",
          choices: ["push", "pop", "shift", "unshift"],
          correctAnswer: "push",
          course: "JavaScript",
          marks: 1,
        },
        {
          question: "What does === mean?",
          choices: [
            "Assignment",
            "Loose equality",
            "Strict equality",
            "Addition",
          ],
          correctAnswer: "Strict equality",
          course: "JavaScript",
          marks: 1,
        },
        {
          question: "Which is not a JS data type?",
          choices: ["String", "Number", "Boolean", "Character"],
          correctAnswer: "Character",
          course: "JavaScript",
          marks: 1,
        },
        {
          question: "Function to parse JSON?",
          choices: ["JSON.parse", "JSON.stringify", "parseJSON", "stringify"],
          correctAnswer: "JSON.parse",
          course: "JavaScript",
          marks: 1,
        },
        {
          question: "What is closure in JS?",
          choices: ["Function inside function", "Loop", "Object", "Array"],
          correctAnswer: "Function inside function",
          course: "JavaScript",
          marks: 1,
        },
        {
          question: "Which event for click?",
          choices: ["onchange", "onclick", "onload", "onsubmit"],
          correctAnswer: "onclick",
          course: "JavaScript",
          marks: 1,
        },
        {
          question: "Array method to loop?",
          choices: ["map", "filter", "reduce", "forEach"],
          correctAnswer: "forEach",
          course: "JavaScript",
          marks: 1,
        },
        {
          question: "What is 'this' keyword?",
          choices: [
            "Current object",
            "Global object",
            "Depends on context",
            "Always window",
          ],
          correctAnswer: "Depends on context",
          course: "JavaScript",
          marks: 1,
        },
        {
          question: "Async function returns?",
          choices: ["Promise", "Void", "String", "Nothing"],
          correctAnswer: "Promise",
          course: "JavaScript",
          marks: 1,
        },
        {
          question: "What does HTML stand for?",
          choices: [
            "HyperText Markup Language",
            "HighText Machine Language",
            "Hyper Transfer Markup Language",
            "None",
          ],
          correctAnswer: "HyperText Markup Language",
          course: "HTML",
          marks: 1,
        },
        {
          question: "Tag for paragraph?",
          choices: ["p", "br", "div", "span"],
          correctAnswer: "p",
          course: "HTML",
          marks: 1,
        },
        {
          question: "Attribute for image source?",
          choices: ["src", "alt", "href", "link"],
          correctAnswer: "src",
          course: "HTML",
          marks: 1,
        },
        {
          question: "Tag for unordered list?",
          choices: ["ol", "ul", "li", "dl"],
          correctAnswer: "ul",
          course: "HTML",
          marks: 1,
        },
        {
          question: "Which tag is for hyperlink?",
          choices: ["link", "a", "href", "url"],
          correctAnswer: "a",
          course: "HTML",
          marks: 1,
        },
        {
          question: "Doctype declaration in HTML5?",
          choices: ["!DOCTYPE html", "!DOCTYPE HTML5", "!DOCTYPE", "None"],
          correctAnswer: "!DOCTYPE html",
          course: "HTML",
          marks: 1,
        },
        {
          question: "Tag for table row?",
          choices: ["tr", "td", "th", "table"],
          correctAnswer: "tr",
          course: "HTML",
          marks: 1,
        },
        {
          question: "Semantic tag for header?",
          choices: ["head", "header", "top", "nav"],
          correctAnswer: "header",
          course: "HTML",
          marks: 1,
        },
        {
          question: "Input type for email?",
          choices: ["text", "email", "mail", "input"],
          correctAnswer: "email",
          course: "HTML",
          marks: 1,
        },
        {
          question: "Tag to embed video?",
          choices: ["video", "media", "embed", "object"],
          correctAnswer: "video",
          course: "HTML",
          marks: 1,
        },
      ];

      let selectedQuestions = [];

      window.onload = function () {
        loadCourses();
      };

      function loadCourses() {
        const courses = [...new Set(questionsData.map((q) => q.course))];
        const courseSelect = document.getElementById("course");

        courses.forEach((course) => {
          const option = document.createElement("option");
          option.value = course;
          option.textContent = course;
          courseSelect.appendChild(option);
        });
      }

      function showSetup() {
        document.getElementById("startScreen").classList.add("hidden");
        document.getElementById("setupScreen").classList.remove("hidden");
      }

      function generateExam() {
        const num = parseInt(document.getElementById("numQuestions").value);
        const course = document.getElementById("course").value;

        if (isNaN(num) || num <= 0) {
          alert("Please enter a valid number of questions greater than zero.");
          return;
        }

        if (!course) {
          alert("Please select a course first.");
          return;
        }

        const filtered = questionsData.filter((q) => q.course === course);

        if (filtered.length === 0) {
          alert("No questions are currently available for this course.");
          return;
        }

        // New validation: if requested number is greater than available questions
        if (num > filtered.length) {
          alert(
            `The entered number (${num}) is greater than the available questions for the "${course}" course.\n\n` +
              `Available: ${filtered.length} questions only.\n` +
              `Please enter a number less than or equal to ${filtered.length}.`
          );

          // Focus back on the number input for quick correction
          document.getElementById("numQuestions").focus();
          return;
        }

        // If everything is valid, continue
        selectedQuestions = filtered
          .sort(() => 0.5 - Math.random())
          .slice(0, num); // num is guaranteed to be ≤ filtered.length

        const examForm = document.getElementById("examForm");
        examForm.innerHTML = "";

        selectedQuestions.forEach((q, index) => {
          let questionDiv = document.createElement("div");
          questionDiv.className = "question-card";

          let headerHTML = `
      <div class="question-header">
        <div class="question-number">${index + 1}</div>
        <div class="question-text">${q.question}</div>
      </div>
    `;

          let optionsHTML = '<div class="options">';

          q.choices.forEach((choice, choiceIdx) => {
            const safeChoice = choice
              .replace(/"/g, "&quot;")
              .replace(/'/g, "&#39;");

            optionsHTML += `
        <div class="option" onclick='selectOption(${index}, \`${choice}\`, this)'>
          <input
            type="radio"
            name="q${index}"
            value="${safeChoice}"
            id="q${index}choice${choiceIdx}"
            onchange="checkAllAnswered()"
          >
          <label for="q${index}choice${choiceIdx}">${choice}</label>
        </div>
      `;
          });

          optionsHTML += "</div>";

          questionDiv.innerHTML = headerHTML + optionsHTML;
          examForm.appendChild(questionDiv);
        });

        const submitBtn = document.getElementById("submitBtn");
        submitBtn.disabled = true;
        submitBtn.style.opacity = "0.6";
        submitBtn.style.cursor = "not-allowed";

        document.getElementById("setupScreen").classList.add("hidden");
        document.getElementById("examScreen").classList.remove("hidden");
        document.getElementById("examTitle").textContent = course + " Exam";
        document.getElementById("questionCount").textContent =
          selectedQuestions.length + " Questions";
      }

      // New function: check if all questions are answered
      function checkAllAnswered() {
        let allAnswered = true;

        selectedQuestions.forEach((_, index) => {
          const answered = document.querySelector(
            `input[name="q${index}"]:checked`
          );
          if (!answered) {
            allAnswered = false;
          }
        });

        const submitBtn = document.getElementById("submitBtn");
        if (allAnswered) {
          submitBtn.disabled = false;
          submitBtn.style.opacity = "1";
          submitBtn.style.cursor = "pointer";
        } else {
          submitBtn.disabled = true;
          submitBtn.style.opacity = "0.6";
          submitBtn.style.cursor = "not-allowed";
        }
      }

      // Update selectOption to refresh state
      function selectOption(questionIndex, element) {
        const parentCard = element.closest(".question-card");
        parentCard.querySelectorAll(".option").forEach((opt) => {
          opt.classList.remove("selected");
        });
        element.classList.add("selected");

        // Update submit button state after each selection
        checkAllAnswered();
      }

      // Update submitExam to prevent submission if questions are unanswered
      function submitExam() {
        let allAnswered = true;
        selectedQuestions.forEach((_, index) => {
          const answered = document.querySelector(
            `input[name="q${index}"]:checked`
          );
          if (!answered) allAnswered = false;
        });

        if (!allAnswered) {
          alert("⚠️ You must answer all questions before submitting the exam!");
          return;
        }

        let score = 0;
        let correct = 0;

        selectedQuestions.forEach((q, index) => {
          const answer = document.querySelector(
            `input[name="q${index}"]:checked`
          );
          if (answer && answer.value === q.correctAnswer) {
            score += q.marks;
            correct++;
          }
        });

        showResults(score, correct);
      }

      function showResults(score, correct) {
        document.getElementById("examScreen").classList.add("hidden");
        document.getElementById("resultScreen").classList.remove("hidden");

        const totalPoints = selectedQuestions.length;
        const percentage = ((score / totalPoints) * 100).toFixed(1);
        const passed = percentage >= 50;
        const wrong = selectedQuestions.length - correct;

        document.getElementById("resultIcon").textContent = passed
          ? "✅"
          : "❌";
        document.getElementById("resultTitle").textContent = passed
          ? "Congratulations! You Passed 🎉"
          : "Try Again 💪";
        document.getElementById("scoreNumber").textContent = score;
        document.getElementById("scoreText").textContent =
          "out of " + totalPoints;
        document.getElementById("percentage").textContent = percentage + "%";
        document.getElementById("totalQuestions").textContent =
          selectedQuestions.length;
        document.getElementById("correctAnswers").textContent = correct;
        document.getElementById("wrongAnswers").textContent = wrong;
      }

      function restart() {
        document.getElementById("resultScreen").classList.add("hidden");
        document.getElementById("startScreen").classList.remove("hidden");
        document.getElementById("numQuestions").value = "5";
        document.getElementById("course").value = "";
        selectedQuestions = [];
      }
    