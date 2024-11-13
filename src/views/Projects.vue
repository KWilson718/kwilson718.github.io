<template>
    <div class="projects">
        <h1>Projects</h1>
        <section class="projects-section">
            <div v-for="(item, index) in items" :key="index" class="card-item">
                <div v-if="item.coverImage">
                    <div class="card-title-container">
                        <div class="card-title-left">
                            <img :src="requireImage(item.coverImage)" alt="Project Image" id="Cover Image">
                        </div>
                        <div class="card-title-right">
                            <h3 v-if="item.title">{{ item.title }}</h3>
                            <p v-if="item.timeperiod">{{ item.timeperiod }}</p>
                            <p v-if="item.projectType">{{ item.projectType }}</p>
                        </div>
                    </div>
                    <p v-if="item.description">{{ item.description }}</p>
                </div>
                <div v-else>
                    <h3 v-if="item.title">{{ item.title }}</h3>
                    <p v-if="item.timeperiod">{{ item.timeperiod }}</p>
                    <p v-if="item.projectType">{{ item.projectType }}</p>
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
    name: 'ProjectsGrid',
    data() {
        return {
            items: [
                {
                    title: 'Project InvenStory System Proposal & Specification',
                    coverImage: '../assets/images/projects/ProjectInvenstory.jpeg',
                    timeperiod: 'Spring Quarter 2024',
                    projectType: 'In Class Longterm Project',
                    description: 'Within a Systems Design Course, I spend ten weeks writing approximately 75 pages of technical writing about a hypothetical piece of Software. The application that I wrote about was a custom inventory styled app that allows for one to document a hobby collection of various goods. It followed a standard set of Project Initiation Request, System Proposal, and System Specification type documents, which each described various aspects of its theoretical specifications. Given the amount of writing, as well as high level thinking about the project, that had to be done, I found myself growing immensely in my ability to think through various aspects of this software, and accurately document my ideas. This project ultimately assisted greatly in my ability to think through planning other projects, as well as formatting various pieces of documentation that I wrote during my Summer Internship (see experiences page).',
                    skills: [
                        'Technical Writing',
                        'Software Development Planning',
                        'UML Documentation',
                        'Time Management'
                    ]
                },
                {
                    title: 'Go Lexical & Syntax Parser'
                },
                {
                    title: 'This Portfolio',
                    skills: [
                        'GitHub Pages',
                        'Vue.js',
                        'Vite',
                        'Documentation'
                    ]
                }
            ]
        }
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
}
</script>

<style scoped>
/* Center the container and stack cards vertically */
.projects-section {
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
