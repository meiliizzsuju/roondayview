import React, { useState } from 'react';
import axios from "axios";

import './contactform.css';

const inputErrorState = ` error-field`;
const token = localStorage.getItem('auth-token');

const ContactForm = ({title}) => {
    const [name,setName] = useState('');
    const [message,setMessage] = useState('');
    const [fields, setFields] = useState(false); // to check if all the field has been entered

    const submitMessage = () =>{
        if(message && name){
            // POST
            axios.post(`/contact`,{
                name: name,
                message: message
            },
            {headers: { Authorization: `Bearer ${token}` }}
                ).then(function (response){
                    if(response.status === 200){
                        alert('Message is sent');
                        setMessage('')
                        setName('')

                        setFields(false);
                    }
                }).catch(function (error){
                    switch (error.response.status) {
                        case 400:
                            alert(error.response.data['data'])
                            break;
                        case 401:
                            alert(error.response.data['data'])
                            break;
                        default:
                            break;
                    }
                    setFields(true);

                    setTimeout(
                      () => {
                        setFields(false); // clear after 2 sec
                      },
                      5000,
                    );  
                });


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
                <input  
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name"
                    className={(fields&&name === '') ? (inputErrorState) : ('')}
                    required
                />
                {(fields&&message === '') &&(
                <span className='error-message'>Please provide message</span>
                )}
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