import FAEnvelope from "../../assets/FAEnvelope.svg?react";
import FAGitHub from "../../assets/FAGitHub.svg?react";
import FALinkedIn from "../../assets/FALinkedIn.svg?react";
import "./Contacts.scss";

const Contacts =() => {
  return (
    <ul className="contacts-list">
      <li className="contacts-list__item">
        <a className="contact-link" href="mailto:glorywiguno+hello@gmail.com?Subject=Hello%20Glory">
          <FAEnvelope className="fa-svg-icon contact-link__icon" fill="currentColor"/>
          <span className="contact-link__text">Email</span>
        </a>
      </li>
      <li className="contacts-list__item">
        <a className="contact-link" href="https://github.com/glorywiguno">
          <FAGitHub className="fa-svg-icon contact-link__icon" fill="currentColor"/>
          <span className="contact-link__text">GitHub</span>
        </a>
      </li>
      <li className="contacts-list__item">
        <a className="contact-link" href="https://www.linkedin.com/in/glory-wiguno-a08432104/">
          <FALinkedIn className="fa-svg-icon contact-link__icon" fill="currentColor"/>
          <span className="contact-link__text">LinkedIn</span>
        </a>
      </li>
    </ul>
  )
}

export default Contacts;
