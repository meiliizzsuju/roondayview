import { Container } from "@mui/material";
import ContactForm from "../contactForm/ContactForm";

import './contact.css';

const Contact = () => {

  // if user id exist
  const user = '';

  return (
    <div className="contactpage">
      <Container>
        <div className="contactpage__form">
          <ContactForm user={user} title="Leave us messages"/>
        </div>
      </Container>
    </div>
  )
}

export default Contact
