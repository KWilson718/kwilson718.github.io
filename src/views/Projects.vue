<template>
    <div class="projects">
        <h1>Projects</h1>
        <section class="projects-section">
            <div v-for="(item, index) in items" :key="index" class="card-item">
                <div v-if="item.coverImage">
                    <div class="card-title-left">
                        <img :src="requireImage(item.coverImage)" alt="Project Image" id="Cover Image">
                    </div>
                    <div class="card-title-right">
                        <h3 v-if="item.title">{{ item.title }}</h3>
                        <p v-if="item.timeperiod">{{ item.timeperiod }}</p>
                        <p v-if="item.projectType">{{ item.projectType }}</p>
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
                    title: 'Example Project',
                    timeperiod: 'Example TimeFrame',
                    description: 'Sample Description',
                    skills: [
                        'Skill 1',
                        'Skill 2',
                        'Skill 3',
                        'Skill 4',
                    ]
                },
                {
                    title: 'Project InvenStory System Proposal & Specification',
                    coverImage: '../assets/images/projects/ProjectInvenstory.jpeg'
                },
                {
                    title: 'Go Lexical & Syntax Parser'
                },
                {
                    title: 'This Portfolio'
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
