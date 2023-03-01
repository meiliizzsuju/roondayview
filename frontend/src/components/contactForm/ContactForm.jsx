import React, { useState } from 'react';

import './contactform.css';

const inputErrorState = ` error-field`;

const ContactForm = ({title,user}) => {

    const [message,setMessage] = useState('');
    const [fields, setFields] = useState(false); // to check if all the field has been entered

    const submitMessage = () =>{
        if(message){
            // to be added to BE with userId
            console.log(message)

            alert('Message is sent');
            setMessage('')
        } else{
            setFields(true);

            setTimeout(
              () => {
                setFields(false); // clear after 2 sec
              },
              5000,
            );  
        }
    }

    return (
        <div className='contactform'>
            <h3>{title}</h3>
            <div className='form-control relative'>
                <textarea  
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Enter Message Here"
                    className={(fields&&message === '') ? (inputErrorState) : ('')}
                    required
                />
                {(fields&&message === '') &&(
                <span className='error-message'>Please provide message</span>
                )}
            </div>
            <div className="contactform__bottom">
                <button
                type="button"
                onClick={submitMessage}
                className="btn btn-form"
                >
                Send Message
                </button>
            </div>


            <div className='contactform__address'>
                <span>To contact our Office</span>
                <ul>
                    <li>enter@email.com</li>
                    <li>pH: 9000 000</li>
                    <li>111 street Suburb State, 2000</li>
                </ul>
            </div>
        </div>
    )
}

export default ContactForm