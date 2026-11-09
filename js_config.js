
/*
  EDIT YOUR PORTFOLIO HERE.
  You can change the text, links, skills, projects, education, and experience below.
  Keep the quotation marks and commas so the JavaScript can read the file.
*/
const portfolio = {
  name: "Marianne Zamora",
  role: "Graphics Designer",
  school: "City College of Calamba",
  location: "Calamba City, Laguna",
  email: "mariannezamora1229@gmail.com",
  phone: "0910-833-9974",
  facebook: "https://www.facebook.com/mrnnzmr",
  github: "https://github.com/mariannezamora1229",
  photo: "ZAMORA_2x2_3c09cdbc.jpg",

  intro: "Hi, I'm Marianne. I'm a 3rd-year Information Technology student who enjoys learning web development and creating simple systems for school projects.",
  about: "I am currently studying Bachelor of Science in Information Technology at City College of Calamba. I have worked on academic projects involving websites, databases, and system design. I am still learning and improving my skills through school activities and hands-on projects.",

  highlights: [
    { number: "3rd Year", label: "BS Information Technology" },
    { number: "3", label: "School leadership and work activities" },
    { number: "3 Entries", label: "Activities and experience" },
    { number: "2 Projects", label: "Academic and research projects" }
  ],

  skills: [
    { name: "HTML", level: "Basic", note: "Creating and structuring web pages." },
    { name: "CSS", level: "Basic", note: "Styling web pages and layouts." },
    { name: "C++", level: "Basic", note: "Practicing programming fundamentals." },
    { name: "phpMyAdmin", level: "Basic", note: "Managing MySQL databases through phpMyAdmin." },
    { name: "Figma", level: "Basic", note: "Creating simple interface layouts and prototypes." },
    { name: "Communication", level: "Skill", note: "Communicating ideas and coordinating with others." },
    { name: "Leadership", level: "Skill", note: "Taking responsibility in student activities and group work." }
  ],

  projects: [
    {
      id: "ulat-ccc",
      title: "Ulat CCC: Campus Facility Issue and Student Feedback Portal",
      category: "Web Development",
      year: "2025",
      status: "Academic Project",
      image: "asset_image_b9a7372c.png",
      description: "A website where students can report campus concerns, including facility issues, and share suggestions or feedback.",
      role: "Project Team Member",
      technologies: ["PHP", "HTML", "CSS"],
      details: "The project provides a web-based way for students to submit campus concerns and suggestions for review by administrators."
    },
    {
      id: "revilloza-apartment-management-system",
      title: "Revilloza Apartment Management System",
      category: "Research",
      year: "2026",
      status: "Localhost Only",
      image: "asset_image_07a44da1.png",
      description: "A web-based apartment management system developed to help manage tenant records, rental billing, payment monitoring, apartment information, and financial reports. The current version runs locally on localhost and has not yet been deployed publicly.",
      role: "Full Stack Developer",
      technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
      details: "The system includes an administrator dashboard, tenant management, building and landlord management, billing and payment monitoring, and monthly and yearly financial reports. It is currently demonstrated through a local development environment."
    }
  ],

  experience: [
    { role: "Vice President Internal", organization: "Kasandigan ng Kabataan – Paciano Rizal Chapter", period: "2026 – Present", description: "Helps coordinate internal activities and works with other youth officers." },
    { role: "ICT Representative", organization: "City College of Calamba", period: "2024", description: "Represented ICT students and helped communicate student concerns." },
    { role: "TVL-ICT Work Immersion Trainee", organization: "IBM Work Immersion / PHINMA – Rizal College of Laguna", period: "2024", description: "Joined work immersion activities focused on digital skills and workplace learning." }
  ],

  education: [
    { course: "Bachelor of Science in Information Technology", school: "City College of Calamba", period: "2024 – Present", note: "Currently in 3rd year." },
    { course: "TVL – Information and Communications Technology", school: "PHINMA – Rizal College of Laguna", period: "Graduated 2024", note: "With High Honor." },
    { course: "Junior High School", school: "Camp Vicente Lim Integrated School", period: "Graduated 2022", note: "With Honor." }
  ],

  achievements: [
    "With High Honor – Grade 12 Senior High School",
    "With High Honor – Grade 11 Senior High School",
    "With Honor – Grade 10 Junior High School"
  ],

  graphicDesign: [
    {
      category: "Prelim",
      description: "Brand design activity",
      works: [
        { title: "Prelim Activity 1 – Apple Drawing", image: "graphic_prelim_activity-1-apple-drawing.jpg", note: "Colored-pencil drawing submitted on August 6" },
        { title: "Conzal Printing Shop – Brand Identity", image: "graphic_prelim_conzal-brand-identity.jpg", note: "Final logo and brand identity output" }
      ]
    },
    {
      category: "Midterm",
      description: "Digital marketing graphics and typography poster",
      works: [
        { title: "Tech Week – Landing Page Banner", image: "graphic_midterm_tech-week-campaign-banner.jpg", note: "Final digital marketing banner" },
        { title: "Walk the Line – Typography Poster", image: "graphic_midterm_walk-the-line-typography-poster.png", note: "Final typography poster" }
      ]
    },
    {
      category: "Finals",
      description: "Final graphic design activity",
      works: [
        { title: "Finals – Activity 6", image: "graphic_finals_act-6-design.jpg", note: "Submitted final project photo" }
      ]
    }
  ],

  certificates: [
    "Cisco Networking Academy badge (Digital Safety and Security Awareness, 2026)",
    "IBM Work Immersion and Digital Skills Certificate (2024)"
  ]
};
