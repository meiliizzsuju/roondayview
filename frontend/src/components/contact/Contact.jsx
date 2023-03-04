import { Container } from "@mui/material";
import ContactForm from "../contactForm/ContactForm";

import './contact.css';

const Contact = () => {

  return (
    <div className="contactpage">
      <Container>
        <div className="contactpage__form">
          <ContactForm title="Leave us messages"/>
        </div>
      </Container>
    </div>
  )
}

export default Contact
