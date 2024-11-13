<template>
    <div class="experience">
        <h1>Experience</h1>
        <section class="experience-section">
            <div v-for="(item, index) in items" :key="index" class="card-item">
                <div v-if="item.coverImage">
                    <div class="card-title-container">
                        <div class="card-title-left">
                            <img :src="requireImage(item.coverImage)" alt="Experience Image" id="Cover Image">
                        </div>
                        <div class="card-title-right">
                            <h3 v-if="item.title">{{ item.title }}</h3>
                            <h5 v-if="item.subtitle">{{ item.subtitle }}</h5>
                            <p v-if="item.timeperiod">{{ item.timeperiod }}</p>
                            <p v-if="item.experienceType">{{ item.experienceType }}</p>
                        </div>
                    </div>
                    <p v-if="item.description">{{ item.description }}</p>
                </div>
                <div v-else>
                    <h3 v-if="item.title">{{ item.title }}</h3>
                    <h6 v-if="item.subtitle">{{ item.subtitle }}</h6>
                    <p v-if="item.timeperiod">{{ item.timeperiod }}</p>
                    <p v-if="item.experienceType">{{ item.experienceType }}</p>
                    <p v-if="item.description">{{ item.description }}</p>
                </div>
                
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
    name: 'ExperienceGrid',
    data() {
        return {
            items: [
                {
                    title: 'Software Engineering Intern',
                    experienceType: 'Summer Internship',
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
    methods: {
        // Dynamically import the image using Vite's asset resolution
        requireImage(imagePath) {
            try {
                return new URL(imagePath, import.meta.url).href;
            } catch (error) {
                console.error("Error loading image:", error);
                return 'default-image-path.jpg'; // Use a default image if the path fails
            }
        }
    }
};
</script>

<style scoped>
/* Center the container and stack cards vertically */
.experience-section {
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

/* Title container to use Flexbox for side-by-side layout */
.card-title-container {
  display: flex;
  flex-wrap: wrap; /* Allow wrapping for smaller screens */
  gap: 1rem; /* Add some space between the left and right sections */
  justify-content: space-between;
  align-items: center;
}

/* Style for left section (image) */
.card-title-left {
  flex: 0 1 400px; /* Allow image to be flexible but constrained */
  max-width: 100%; /* Ensure image does not grow too large */
}

.card-title-left img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

/* Style for right section (text) */
.card-title-right {
  flex: 2; /* Allow the right section to take up remaining space */
  text-align: center;
}

/* Style for right section (text) */
.card-title-right {
  flex: 2; /* Allow the right section to take up remaining space */
  text-align: center;
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
@media (max-width: 750px) {
  .card-title-container {
    flex-direction: column; /* Stack left and right sections vertically */
    align-items: center; /* Center items when stacked */
  }

  .card-title-left {
    max-width: 100%; /* Allow image to be full width on smaller screens */
    margin-bottom: 1rem; /* Add space below the image */
  }
}

@media (max-width: 768px) {
  .card-item {
    padding: 1.5rem; /* Adjust padding on smaller screens */
  }
}
</style>

