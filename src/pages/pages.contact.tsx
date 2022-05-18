import React from 'react';

import contactJson from '../data/data.contact.json';

import emailjs from '@emailjs/browser';
import styled from 'styled-components';
import { Button } from '@mui/material';

import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

const ContactStyle = styled.label`
  margin: 40px;
  #input {
    margin: 10px;
    padding: 10px;
    resize: none;
  }
  .title,
  .text {
    margin: 20px;
    text-align: center;
  }
  .contact__form {
    width: 60vw;
    display: grid;
    margin: 0 auto;
    background-color: var(--white);
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
    padding: 10px;
  }
  .req {
    color: var(--red);
    text-align: center;
    padding-top: 10px;
  }
  .send {
    width: 200px;
    background-color: var(--orange);
    margin: 10px;
    height: 40px;
  }

  .send:hover {
    background-color: var(--orange);
  }

  .email {
    width: 400px;
    background-color: var(--green);
    margin: 10px;
    height: 40px;
    margin: 0 auto;
  }

  .email:hover {
    background-color: var(--green);
  }
  @media screen and (max-width: 768px) {
    .contact__form {
      width: 90vw;
    }
    .send {
      width: 300px;
      margin: 0 auto;
    }
  }
`;

const MapStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 40px;
  .title {
    margin: 20px;
    text-align: center;
  }
`;

const JSONstyle = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
  margin: 40px;
  max-width: 400px;
  margin: 0 auto;
  .social__img {
    height: 50px;
    width: 50px;
  }
  .social__items {
    margin: 20px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

const SocialStyle = styled.div`
  margin: 20px;
  text-align: center;
`;

const service: string = process.env.REACT_APP_SERVICE as string;
const template: string = process.env.REACT_APP_TEMPLATE as string;
const user: string = process.env.REACT_APP_USER as string;

export default function Contact() {
  function sendEmail(e: any) {
    e.preventDefault();

    emailjs.sendForm(service, template, e.target, user).then(
      (result) => {
        console.log(result.text);
        e.preventDefault();
      },
      (error) => {
        console.log(error.text);
      }
    );
    e.target.reset();
    alert('Message successfully sent!');
  }

  return (
    <div className="contact">
      <form className="contact-form" onSubmit={sendEmail}>
        <ContactStyle>
          <h3 className="title">Send a message</h3>
          <p className="text">If you have any questions drop me a message.</p>
          <div className="contact__form">
            <label>Name</label>
            <input type="text" name="name" id="input" required />
            <label>Email</label>
            <input type="email" name="email" id="input" required />
            <label>Message</label>
            <textarea name="message" id="input" required />
            <Button
              type="submit"
              value="Send"
              className="send"
              variant="contained"
              sx={{ boxShadow: 0 }}
            >
              send
            </Button>
            <p className="req">All fields are required!</p>
            <h3 className="title">Straight shot to my inbox:</h3>
            <Button
              className="email"
              variant="contained"
              sx={{ boxShadow: 0 }}
              href="mailto:horvathadamistvan@outlook.com?subject=Hi&body=Hello!"
            >
              <AlternateEmailIcon /> &nbsp;Say Hello
            </Button>
          </div>
        </ContactStyle>
      </form>
      <div className="social">
        <SocialStyle>
          <h3 className="title">Social</h3>
        </SocialStyle>
        <JSONstyle>
          {contactJson.map((contactJsons) => (
            <div className="social" key={contactJsons.id}>
              <div className="social__items">
                <p>{contactJsons.name}</p>
                <a href={contactJsons.link}>
                  <img
                    className="social__img"
                    src={contactJsons.image_url}
                    alt="social"
                  />
                </a>
              </div>
            </div>
          ))}
        </JSONstyle>
      </div>
      <MapStyle>
        <div className="gmap_canvas">
          <h3 className="title">Map (Hungary 🇭🇺)</h3>
          <iframe
            title="map"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=debrecen&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="350"
            height="350"
            frameBorder="0"
            aria-hidden="false"
          ></iframe>
        </div>
      </MapStyle>
    </div>
  );
}
