// =========================
// STUDENT PORTFOLIO SCRIPT
// =========================

document.addEventListener("DOMContentLoaded", () => {
  // -------------------------
  // STUDENT DETAILS
  // -------------------------
  const studentData = {
    name: "Aashish J Gowda",
    usn: "1BI25EC001",
    department: "Electronics & Communication Engineering",
    semester: "1st Semester",
    cgpa: "7.05 / 10",
    dob: "21 September 2007",
    email: "aashishj2100@gmail.com",
    phone: "+91 9380838280",
    address: "11th Main road, Raghavendra Block, Srinagar, Bengaluru - 560050",
    overallAttendance: 90
  };

  // Semester 1 marks from your marks card
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

  // Subject-wise attendance
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
  // HELPERS
  // -------------------------
  const setText = (id, value) => {
    const el = document.getElementById(id);
    if (el) el.textContent = value;
  };

  // -------------------------
  // QUICK TEXT UPDATES
  // -------------------------
  setText("usnText", studentData.usn);
  setText("departmentText", studentData.department);
  setText("semesterText", studentData.semester);
  setText("cgpaText", studentData.cgpa);

  setText("nameText", studentData.name);
  setText("usnInfo", studentData.usn);
  setText("departmentInfo", studentData.department);
  setText("semesterInfo", studentData.semester);
  setText("dobText", studentData.dob);
  setText("emailText", studentData.email);
  setText("phoneText", studentData.phone);
  setText("addressText", studentData.address);
  setText("footerName", studentData.name);
  setText("year", new Date().getFullYear());

  // Optional element if you still keep a mini name block somewhere
  setText("overlayName", studentData.name);

  // -------------------------
  // OVERALL ATTENDANCE RING
  // -------------------------
  const attendance = studentData.overallAttendance;

  setText("attendanceValue", `${attendance}%`);
  setText("attendanceLabel", `${attendance}%`);

  const attendanceBar = document.getElementById("attendanceBar");
  if (attendanceBar) {
    attendanceBar.style.width = `${attendance}%`;
  }

  const ring = document.querySelector(".attendance-ring");
  if (ring) {
    ring.style.background = `conic-gradient(var(--primary) 0 ${attendance}%, #e5e7eb ${attendance}% 100%)`;
  }

  // -------------------------
  // RENDER SEMESTER CARDS
  // -------------------------
  const semesterCardsContainer = document.getElementById("semesterCards");
  if (semesterCardsContainer) {
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
  }

  // -------------------------
  // RENDER SUBJECT MARKS TABLE
  // -------------------------
  const marksTable = document.getElementById("marksTable");
  if (marksTable) {
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
  }

  // -------------------------
  // RENDER SUBJECT ATTENDANCE TABLE
  // -------------------------
  const attendanceTable = document.getElementById("attendanceTable");
  if (attendanceTable) {
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
  }

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

      if (targetPanel) {
        targetPanel.hidden = false;
      }
    });
  });

  // -------------------------
  // CONTACT FORM VALIDATION
  // -------------------------
  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
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

      if (nameError) nameError.textContent = "";
      if (emailError) emailError.textContent = "";
      if (messageError) messageError.textContent = "";
      if (formNote) formNote.textContent = "";

      let isValid = true;

      if (visitorName && visitorName.value.trim().length < 2) {
        if (nameError) nameError.textContent = "Please enter your full name.";
        isValid = false;
      }

      if (visitorEmail && !isValidEmail(visitorEmail.value)) {
        if (emailError) emailError.textContent = "Please enter a valid email address.";
        isValid = false;
      }

      if (visitorMessage && visitorMessage.value.trim().length < 10) {
        if (messageError) messageError.textContent = "Message should be at least 10 characters long.";
        isValid = false;
      }

      if (isValid) {
        if (formNote) {
          formNote.style.color = "var(--success)";
          formNote.textContent = "Message sent successfully! This is a demo form validation.";
        }
        contactForm.reset();
      } else {
        if (formNote) {
          formNote.style.color = "var(--danger)";
          formNote.textContent = "Please fix the highlighted errors and try again.";
        }
      }
    });
  }
});
