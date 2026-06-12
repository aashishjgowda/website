// =========================
// STUDENT PORTFOLIO SCRIPT
// =========================

document.addEventListener("DOMContentLoaded", () => {
  // -------------------------
  // EDIT THESE VALUES LATER
  // -------------------------
  const studentData = {
    name: "Aashish J Gowda",
    usn: "1BI25EC001",
    department: "Electronics & Communication Engineering",
    semester: "1st Semester",
    cgpa: "7.05 / 10",
    dob: "21 September 2007",
    email: "aashishj2100@gmail.com.com",
    phone: "+91 9380838280",
    address: "11th Main road raghavendra block Srinagar banglor-560050",
    overallAttendance: 90
  };

  // Subject marks for Semester 1 (from your marks card)
  const marksData = [
    { subject: "Mathematics-I", marks: "72" },
    { subject: "Applied Chemistry", marks: "60" },
    { subject: "Introduction to AI & Applications", marks: "64" },
    { subject: "Introduction to Electrical Engineering", marks: "60" },
    { subject: "Introduction to C Programming", marks: "54" },
    { subject: "Communication Skills", marks: "86" },
    { subject: "Indian Constitution & Engineering Ethics", marks: "68" },
    { subject: "Innovation & Design Thinking Lab", marks: "96" }
  ];

  // Replace these attendance values later with your actual percentages.
  // Use numbers or strings like "95%" if you prefer.
 const attendanceData = [
  { subject: "Mathematics-I", attendance: "95%" },
  { subject: "Applied Chemistry", attendance: "90%" },
  { subject: "Introduction to AI & Applications", attendance: "92%" },
  { subject: "Introduction to Electrical Engineering", attendance: "95%" },
  { subject: "Introduction to C Programming", attendance: "85%" },
  { subject: "Communication Skills", attendance: "92%" },
  { subject: "Indian Constitution & Engineering Ethics", attendance: "88%" },
  { subject: "Innovation & Design Thinking Lab", attendance: "97%" }
];

  const semesterCardsData = [
    { label: "Semester", value: studentData.semester },
    { label: "SGPA", value: "7.05" },
    { label: "CGPA", value: studentData.cgpa },
    { label: "Department", value: "ECE" }
  ];

  // -------------------------
  // QUICK TEXT UPDATES
  // -------------------------
  document.getElementById("usnText").textContent = studentData.usn;
  document.getElementById("departmentText").textContent = studentData.department;
  document.getElementById("semesterText").textContent = studentData.semester;
  document.getElementById("cgpaText").textContent = studentData.cgpa;

  document.getElementById("nameText").textContent = studentData.name;
  document.getElementById("usnInfo").textContent = studentData.usn;
  document.getElementById("departmentInfo").textContent = studentData.department;
  document.getElementById("semesterInfo").textContent = studentData.semester;
  document.getElementById("dobText").textContent = studentData.dob;
  document.getElementById("emailText").textContent = studentData.email;
  document.getElementById("phoneText").textContent = studentData.phone;
  document.getElementById("addressText").textContent = studentData.address;
  document.getElementById("overlayName").textContent = studentData.name;
  document.getElementById("footerName").textContent = studentData.name;
  document.getElementById("year").textContent = new Date().getFullYear();

  // -------------------------
  // OVERALL ATTENDANCE RING
  // -------------------------
  const attendance = studentData.overallAttendance;
  document.getElementById("attendanceValue").textContent = `${attendance}%`;
  document.getElementById("attendanceLabel").textContent = `${attendance}%`;
  document.getElementById("attendanceBar").style.width = `${attendance}%`;

  const ring = document.querySelector(".attendance-ring");
  ring.style.background = `conic-gradient(var(--primary) 0 ${attendance}%, #e5e7eb ${attendance}% 100%)`;

  // -------------------------
  // RENDER SEMESTER CARDS
  // -------------------------
  const semesterCardsContainer = document.getElementById("semesterCards");
  semesterCardsContainer.innerHTML = semesterCardsData
    .map(
      (card) => `
        <article class="mini-card">
          <span>${card.label}</span>
          <strong>${card.value}</strong>
        </article>
      `
    )
    .join("");

  // -------------------------
  // RENDER SUBJECT MARKS TABLE
  // -------------------------
  const marksTable = document.getElementById("marksTable");
  marksTable.innerHTML = `
    <div class="subject-table__row subject-table__head">
      <span>Subject</span>
      <span>Marks</span>
    </div>
    ${marksData
      .map(
        (row) => `
          <div class="subject-table__row">
            <span>${row.subject}</span>
            <span>${row.marks}</span>
          </div>
        `
      )
      .join("")}
  `;

  // -------------------------
  // RENDER SUBJECT ATTENDANCE TABLE
  // -------------------------
  const attendanceTable = document.getElementById("attendanceTable");
  attendanceTable.innerHTML = `
    <div class="subject-table__row subject-table__head">
      <span>Subject</span>
      <span>Attendance</span>
    </div>
    ${attendanceData
      .map(
        (row) => `
          <div class="subject-table__row">
            <span>${row.subject}</span>
            <span>${row.attendance}</span>
          </div>
        `
      )
      .join("")}
  `;

  // -------------------------
  // TAB SWITCHING
  // -------------------------
  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabPanels = document.querySelectorAll(".tab-panel");

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetId = button.getAttribute("aria-controls");
      const targetPanel = document.getElementById(targetId);

      tabButtons.forEach((btn) => {
        btn.classList.remove("tab-btn--active");
        btn.setAttribute("aria-selected", "false");
      });

      tabPanels.forEach((panel) => {
        panel.hidden = true;
      });

      button.classList.add("tab-btn--active");
      button.setAttribute("aria-selected", "true");
      targetPanel.hidden = false;
    });
  });

  // -------------------------
  // CONTACT FORM VALIDATION
  // -------------------------
  const contactForm = document.getElementById("contactForm");
  const visitorName = document.getElementById("visitorName");
  const visitorEmail = document.getElementById("visitorEmail");
  const visitorMessage = document.getElementById("visitorMessage");

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const messageError = document.getElementById("messageError");
  const formNote = document.getElementById("formNote");

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    formNote.textContent = "";

    let isValid = true;

    if (visitorName.value.trim().length < 2) {
      nameError.textContent = "Please enter your full name.";
      isValid = false;
    }

    if (!isValidEmail(visitorEmail.value)) {
      emailError.textContent = "Please enter a valid email address.";
      isValid = false;
    }

    if (visitorMessage.value.trim().length < 10) {
      messageError.textContent = "Message should be at least 10 characters long.";
      isValid = false;
    }

    if (isValid) {
      formNote.style.color = "var(--success)";
      formNote.textContent = "Message sent successfully! This is a demo form validation.";
      contactForm.reset();
    } else {
      formNote.style.color = "var(--danger)";
      formNote.textContent = "Please fix the highlighted errors and try again.";
    }
  });
});
