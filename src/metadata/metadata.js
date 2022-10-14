module.exports = {
  name: 'Sydney Lim',
  title: 'MSCS @ UCSB',
  facts: {
    'Location': 'Fremont, CA',
    'LinkedIn': '<a href="https://www.linkedin.com/in/scqlim/"></i>Sydney Lim</a>',
    'GitHub': '<a href="https://github.com/sydneylim"></i>sydneylim</a>',
    'Email': 'scqlim@gmail.com'
  },
  skills: [
    ['C', 100],
    ['C++', 100],
    ['Java', 100],
    ['JavaScript', 100],
    ['Ruby on Rails', 100],
    ['Verilog', 50],
    ['React', 75],
    ['Express', 75],
    ['Heroku', 75],
    ['MongoDB', 50],
    ['MySQL', 75],
    ['PostgreSQL', 75],
    ['AWS', 75],
    ['Eucalyptus', 50],
    ['Apache Bench', 100],
    ['GitHub', 100],
    ['Agile', 100],
    ['Jupyter', 100],
    ['MATLAB', 100],
    ['RubyMine', 100],
  ],
  positions: [
    {
      company: 'Invoca',
      location: 'Santa Barbara, CA',
      title: 'Software Engineering Intern',
      period: 'Jun 2022 - Sep 2022',
      skills: ['Ruby on Rails', 'Full Stack Development', 'Agile Software Development', 'React.js', 'RubyMine'],
      contents: `
* Worked with a small team on full-stack software development using Ruby on Rails and React.js.
* Practiced agile software development skills through pair programming, standups, retrospectives, and backlog refinement.
      `
    },
    {
      company: 'Jones Lang LaSalle',
      location: 'San Francisco, CA',
      title: 'Data Loss Prevention (DLP) Intern',
      period: 'Aug 2021 - Sep 2021',
      skills: ['Python', 'Microsoft Power BI', 'Tableau', 'SQL', 'Robotic Process Automation (RPA)'],
      contents: `
* Worked on a data loss prevention project to pinpoint sources of and minimize internal threats.
* Implemented robotic process automation (RPA) script to automate data extraction in Python.
* Utilized Microsoft Power BI, Tableau, and SQL to compile, cleanse, analyze, and present the data.
      `
    },
    {
      company: 'Bertram Labs',
      location: 'Foster City, CA',
      title: 'Summer Intern',
      period: 'Jun 2019 - Sep 2019',
      skills: ['MySQL', 'PostgreSQL', 'Microsoft Power BI', 'Prototyping', 'Product Design'],
      contents: `
* Designed a database in MySQL/PostgreSQL. Utilized Microsoft Power BI to cleanse a user database.
* Designed and presented a prototype UI for the database in a pre-production environment.
* Researched natural language processing and data warehouses (Amazon AWS, Microsoft Azure, Google BigQuery).
      `
    }
  ],

  education: [
    {
      company: 'University of California, Santa Barbara',
      location: 'Santa Barbara, CA',
      title: 'Master of Science in Computer Science',
      period: 'Expected Jun 2023',
      contents: `
* GPA: 4.0/4.0
* Programs: 5-year B.S./M.S. Program in Computer Science
* Coursework in: Scalable Internet Services, Augmented Reality, Computer Graphics, Operating Systems, Runtime Systems
* Extracurricular Activities: Four Eyes Lab (Pursuing research in human-computer interaction, computer vision, and augmented reality), UCSB Badminton Club
      `
    },
    {
      company: 'Universtiy of California, Santa Barbara',
      location: 'Santa Barbara, CA',
      title: 'Bachelor of Science in Computer Engineering',
      period: 'Sep 2018 - Mar 2022',
      contents: `
* GPA: 3.7/4.0
* Programs: College of Engineering Honors Program, 5-year B.S./M.S Program in Computer Science
* Coursework in: Data Structures and Algorithms, Artificial Intelligence, Machine Learning, Computer Vision, Digital Image Processing, Operating Systems, Network Computing, Advanced Applications Programming, Object-Oriented Design, Sensor and Peripheral Interface Design
* Extracurricular Activities: Co-Founder and Vice President of UCSB Badminton Club (4 years)
      `
    },
    {
      company: 'American High School',
      location: 'Fremont, CA',
      title: 'High School Diploma',
      period: 'Aug 2014 - Jun 2018',
      contents: `
* UC Weighted GPA: 4.50 (Uncapped), 4.14 (Capped)
* SAT I: 1560/1600
* SAT II Chemistry: 800/800 
* SAT II Math L2: 800/800
* Relevant AP classes: AP Chemistry, AP Physics C, AP Biology, AP Calculus BC, AP Computer Science (in Java), and AP English Language and Composition
      `
    }
  ],

  projects: [
    {
      company: 'T.A.L.K.',
      title: 'Senior CS Capstone Project, sponsored by Invoca',
      location: 'https://github.com/cs189-invoca-capstone/cs189_invoca',
      page: 'GitHub Repo',
      period: 'Sep 2021 - Mar 2022',
      skills: ['Express', 'JavaScript', 'Heroku', 'CSS', 'MongoDB', 'GitHub', 'Agile Development'],
      contents: `
* Worked in a team of six to develop an Express web application deployed on Heroku to be used by salespeople.
* Our multi-cloud solution displays critical call information in a single view.
* Transcriptions generated by IBM Watson in near real-time retain important call details.
* We leverage NLP Cloud to generate concise call summaries so that salespeople can easily remember call contents.
* Keywords and the customer's sentiment are determined using Google Cloud's NLP API to guide sales follow-ups.
* We integrate Invoca's APIs service to retrieve call transcripts and store the data in a MongoDB database.
* We maintained well-documented code bases with version control, and touched base with mentors weekly and with team members daily.
`
    },
    {
      company: 'UCSB Courses Search',
      title: 'Project for CMPSC 156: Advanced Applications Programming',
      location: 'https://proj-ucsb-courses-search.herokuapp.com/',
      page: 'Application',
      period: 'Mar 2021 - Jun 2021',
      skills: ['React', 'Heroku', 'Spring Boot', 'Auth0', 'GitHub', 'Agile Development'],
      contents: `
* Worked with a team of ~20 people on this legacy project, a web application used to search for classes based on input criteria.
* Worked closely with a team of 5 people to focus on improving the search user interface.
`
    },
    {
      company: 'Vision Test',
      location: 'https://sites.google.com/view/ece153b-visiontest/home',
      page: 'Project Page',
      title: 'Project for ECE 153B: Sensor and Peripheral Interface Design',
      period: 'Feb 2021 - Mar 2021',
      skills: ['C', 'STM32 Microcontroller', 'I2C', 'SPI', 'Peripherals', 'Product Design'],
      contents: `
* Designed a “vision test” that simulates a tumbling E chart with symbols gradually decreasing in size.
* The E's are displayed on an 8x8 LED Matrix and a user inputs the direction that the E is facing using a Wii Nunchuk.
* A distance sensor will verify that the user is standing at an appropriate distance from the display.
* A terminal will display the user's vision score.
* Both the 8x8 LED Matrix and the Wii Nunchuk communicate with an STM32 microcontroller using I2C.
* The terminal communicates with an STM32 microcontroller using SPI.
`
    },
    {
      company: 'COVID-19 Survival Naive Bayes Classifier',
      location: 'https://github.com/sydneylim/cs165a_mp1',
      page: 'GitHub Repo',
      title: 'Project for CMPSC 165A: Artificial Intelligence',
      period: 'Jan 2021 - Feb 2021',
      skills: ['Artificial Intelligence', 'Machine Learning', 'Python', 'NumPy', 'SciPy', 'Data Processing', 'Modeling'],
      contents: `
* Designed a Naive Bayes Classifier in Python that determines whether a patient will survive from COVID-19 given their preconditions.
* Preprocessed and cleansed training and validation data sets using NumPy and SciPy.
* Built a model to determine which data fields were of greater importance.
* Placed second on the class leader board for classification accuracy and runtime.
`
    }
  ]
};
