const skillDetails = {
  python: {
    title: "Python",
    description: "Experienced in backend development, automation, AI/ML integration, and GUI apps with Tkinter."
  },
  tkinter: {
    title: "Tkinter",
    description: "Can design interactive GUIs with tables, search filters, and form handling."
  },
  mysql: {
    title: "MySQL & SQLite",
    description: "Proficient in database design, queries, and integration with Python."
  },
  react: {
    title: "React.js",
    description: "Create modern web apps with state management, APIs, and reusable components."
  },
  htmlcss: {
    title: "HTML & CSS",
    description: "Build responsive websites with animations, flexbox, and grid layouts."
  },
  aws: {
    title: "AWS Cloud",
    description: "Basic knowledge of EC2, S3, and Lambda for hosting and automation."
  },
  vmware: {
    title: "VMware",
    description: "Setup and manage virtual machines for development environments."
  },
  git: {
    title: "Git & GitHub",
    description: "Version control, branching, and project collaboration."
  },
  ai: {
    title: "AI Integration",
    description: "Implement AI features like smart categorization in apps."
  }
};

function showSkill(skill) {
  document.getElementById("skillTitle").innerText = skillDetails[skill].title;
  document.getElementById("skillDescription").innerText = skillDetails[skill].description;
  document.getElementById("skillModal").style.display = "block";
}

function closeSkill() {
  document.getElementById("skillModal").style.display = "none";
}

window.onclick = function(event) {
  if (event.target == document.getElementById("skillModal")) {
    closeSkill();
  }
}
