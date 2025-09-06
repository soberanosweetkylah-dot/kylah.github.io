import { useState } from "react";
import "./App.css";
import profile from "./assets/kylah_profile.jpg";
import KudoFitnessGym from "./assets/KudoFitnessGymApp.png";
import RoboTilapia from "./assets/RoboTilapiaApp.png";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function App() {
  const [projects] = useState([
    {
      name: "Kudo Fitness Gym App",
      image: KudoFitnessGym,
      description:
        "The Kudo Fitness Gym app simplifies subscription management by allowing online payments. It enables gym staff to monitor members’ subscription status in real-time. Attendance and check-ins are tracked efficiently for every member. Administrators have a centralized system to manage all subscriber information. The app provides accurate verification of attendances. It helps reduce manual errors and saves time for staff. Overall, it streamlines gym operations and improves member management.",
    },
    {
      name: "RoboTilapia",
      image: RoboTilapia,
      description:
        "The RoboTilapia app is a tilapia management application designed for real-time water parameter monitoring and feed management. Users can view critical pond parameters such as pH level, temperature, ammonia concentration, and surface respiration behavior, which serves as an indicator of low dissolved oxygen. The app alerts users when any parameter exceeds safe limits and provides analytics of daily and weekly readings. Additionally, users can customize feeding schedules and monitor feed levels. The system is integrated with a connected machine, enabling automated and precise management of tilapia farming operations.",
    },
  ]);

  return (
    <>
      <div id="intro">
        <div className="description">
          <h1>Hi, I am Sweet Kylah,</h1>
          <h1>Computer Engineering Student</h1>
          <p>
            I’m Sweet Kylah M. Soberano, a Computer Engineering student at
            Marinduque State University with a passion for technology,
            innovation, and problem-solving. I specialize in developing projects
            that integrate hardware and software, focusing on automation, IoT,
            and system design. Some of my best projects include a Gym Membership
            Management System and an Autonomous Robot for Targeted Aeration and
            Feeding in Tilapia Fishponds to support local farmers. I’m driven to
            create solutions that are not only functional but also impactful.
          </p>
          <button>Download Resume</button>
        </div>
        <div className="profile">
          <img src={profile} alt="Profile" />
        </div>
      </div>

      <div id="projects">
        <h1>My Projects</h1>
        <div className="projects-container">
          {projects.map((proj, i) => (
            <div key={i} className="projects-info">
              <div className="project-img-container">
                <img src={proj.image} alt={proj.name} />
              </div>
              <h1>{proj.name}</h1>
              <p>{proj.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div id="contactme">
        <h1 className="contact-title">Contact Me</h1>
        <hr />
        <div className="contacts-container">
          <div className="contact-item">
            <MdEmail className="contact-icon" />
            <a href="mailto:soberanosweetkylah@gmail.com">
              soberanosweetkylah@gmail.com
            </a>
          </div>
          <div className="contact-item">
            <FaFacebook className="contact-icon" />
            <a
              href="https://www.facebook.com/kylah.soberano"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sweet Kylah Soberano
            </a>
          </div>
          <div className="contact-item">
            <FaGithub className="contact-icon" />
            <a
              href="https://github.com/soberanosweetkylah-dot"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/yourusername
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
