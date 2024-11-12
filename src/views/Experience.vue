<template>
    <div class="experience">
        <h1>Experience</h1>
        <section class="portfolio-section">
            <div v-for="(item, index) in items" :key="index" class="card-item">
                <h3>{{ item.title }}</h3>
                <p v-if(item.timeperiod)>{{ item.timeperiod }}</p>
                <p>{{ item.description }}</p>
                
                <!-- Skills List (optional) -->
                 <div v-if="item.skills && item.skills.length">
                    <p>Key Skills Gained & Improved </p>
                    <ul  class="skills-list">
                        <li v-for="(skill, skillIndex) in item.skills" :key="skillIndex">
                            {{ skill }}
                        </li>
                    </ul>
                 </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'PortfolioGrid',
    data() {
        return {
            items: [
                {
                    title: 'Software Engineering Intern',
                    timeperiod: 'June 2024 - August 2024',
                    description: 'Assisted with development of bespoke application for JAMB Services, a Project Management Service in the Construction Industry. Practiced communicating within a Software Development Team, and working on key sections of code relating to database retrieveal to send to the front-end. Gained immense practice in the basics of Web Development, as well as professional practices regarding version control.',
                    skills: [
                        'Vue.js Framework',
                        'MongoDB Interfacing',
                        'Data Formatting & Enforcement',
                        'AWS Lambda Functionality',
                        'Clear Documentation of Code',
                        'Professional Version Control via GitHub',
                        'Adjusting to Feedback',
                    ]
                },
                {
                    title: 'Computer Science Lab Assistant',
                    timeperiod: 'January 2023 - Present',
                    description: 'Assisted fellow Computer Science Students in a tutoring environment as they worked on Computer Science related coursework. Discussed methods of debugging code, as well as honed in on various concepts within the introductory coding sequence of classes.',
                    skills: [
                        'C++ Fundamentals',
                        'Troubleshooting & Debugging Code',
                        'Assisting in Learning Process',
                    ]
                }
            ],
        };
    },
};
</script>

<style scoped>
/* Center the container and stack cards vertically */
.portfolio-section {
  display: flex;
  flex-direction: column;
  align-items: center; /* Center each card */
  gap: 1rem;
  padding: 1rem; /* Padding for spacing */
}

/* Style each item to look like a large card */
.card-item {
  background-color: #313131;
  width: 100%;
  max-width: 1000px; /* Max width for each card */
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Soft shadow for card effect */
  text-align: center;
  transition: transform 0.3s ease; /* Add transition for hover effect */
}

/* Skills list styling */
.skills-list {
  list-style: none;
  padding: 0;
  margin-top: 1rem;
}

.skills-list li {
  display: inline-block;
  background-color: #444444;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  margin: 0.2rem;
  font-size: 0.9rem;
}

/* Hover effect for cards */
.card-item:hover {
  transform: translateY(-5px); /* Slight lift on hover */
}

/* Responsive adjustment */
@media (max-width: 768px) {
  .card-item {
    padding: 1.5rem; /* Adjust padding on smaller screens */
  }
}
</style>
