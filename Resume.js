const resume ={
  "name": "Shakthi Sundar K",
  "title": "FSD",
  "contact": {
      "email": "shakthi@google.com",
      "phone": "7010475716",
      "linkedin": "https://www.linkedin.com/in/Shakthi"
  },
  "summary": "Highly skilled software engineer with 5+ years of experience in developing scalable web applications. Proficient in JavaScript, Python, and cloud technologies.",
  "experience": [
      {
          "company": "Tech Solutions Inc.",
          "position": "Senior FSD Engineer",
          "start_date": "2021-01-01",
          "end_date": "Present",
          "responsibilities": [
              "Led a team of 5 engineers to develop and maintain a cloud-based application.",
              "Optimized application performance, resulting in a 30% reduction in load time.",
              "Collaborated with cross-functional teams to define and prioritize project requirements."
          ]
      },
      {
          "company": "Web Innovations LLC",
          "position": "Software Engineer",
          "start_date": "2018-06-01",
          "end_date": "2020-12-31",
          "responsibilities": [
              "Developed front-end and back-end components for a high-traffic e-commerce platform.",
              "Implemented RESTful APIs and integrated third-party services.",
              "Wrote unit and integration tests to ensure code quality."
          ]
      }
  ],
  "education": {
      "degree": "Bachelor of engineering in Computer Science",
      "university": "SEC",
      "graduation_year": 2018
  },
  "skills": [
      "JavaScript",
      "Python",
      "React",
      "Node.js",
      "AWS",
      "Docker",
      "SQL"
  ],
  "certifications": [
      {
          "name": "AWS Certified Solutions Architect",
          "date": "2020-05-15"
      },
      {
          "name": "Certified Kubernetes Administrator",
          "date": "2021-08-10"
      }
  ]
};


// using for loop
function iterateFor(obj) {
  if (Array.isArray(obj)) {
      for (let i = 0; i < obj.length; i++) {
          iterateFor(obj[i]);
      }
  } else if (typeof obj === 'object' && obj !== null) {
      const keys = Object.keys(obj);
      for (let i = 0; i < keys.length; i++) {
          const key = keys[i];
          console.log(`${key}: ${obj[key]}`);
          iterateFor(obj[key]);
      }
  }
}
iterateFor(resume);


// using for_in loop
function iterateForIn(obj) {
  if (Array.isArray(obj)) {
      for (const index in obj) {
          iterateForIn(obj[index]);
      }
  } else if (typeof obj === 'object' && obj !== null) {
      for (const key in obj) {
          console.log(`${key}: ${obj[key]}`);
          iterateForIn(obj[key]);
      }
  }
}
iterateForIn(resume);

//using for_of loop
function iterateForOf(obj) {
  if (Array.isArray(obj)) {
      for (const item of obj) {
          iterateForOf(item);
      }
  } else if (typeof obj === 'object' && obj !== null) {
      for (const [key, value] of Object.entries(obj)) {
          console.log(`${key}: ${value}`);
          iterateForOf(value);
      }
  }
}
iterateForOf(resume);

//using for each loop
function iterateForEach(obj) {
  if (Array.isArray(obj)) {
      obj.forEach(item => iterateForEach(item));
  } else if (typeof obj === 'object' && obj !== null) {
      Object.keys(obj).forEach(key => {
          console.log(`${key}: ${obj[key]}`);
          iterateForEach(obj[key]);
      });
  }
}
iterateForEach(resume);
