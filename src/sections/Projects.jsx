import ProjectCard from "../components/ProjectCard";
import "./Projects.css";

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>

      <div className="projects-grid">
        <ProjectCard
          title="Car Rental System"
          description="Developed a full-stack web application that allows users to view available cars, make bookings, and manage rentals. The application includes user authentication and role-based access for admin and users, RESTful APIs for handling car, user, and booking operations, and seamless frontend–backend integration using React and Spring Boot. Data is stored and managed in a MySQL database with complete CRUD functionality"
          tech="React JS, Spring Boot, MySQL ,Hibernate"
          
        />

        <ProjectCard
          title="Cookflow"
          description="Created a ReactJS application to display and manage recipes. The project uses React components, hooks, and props to show recipe data and update the UI. It focuses on simple design and user-friendly interaction."
          tech="React JS ,HTML ,CSS"
          github="https://cookflow.netlify.app/"
        />

        <ProjectCard
          title="Travel Management System"
          description="The main objective of the Travels and Tourism Management System is to manage the details of Customer, Hotel Booking, Cancellation and Tourism places. It manages all the information about Users, Hotel, Packages etc. The project is totally built at administrative end and thus only the administrator is guaranteed the access to the backend database."
          tech="MYSQL ,Jframe ,java"
          github="https://github.com/AishwaryaJadhav"
          
        />
      </div>
    </section>
  );
}

export default Projects;
