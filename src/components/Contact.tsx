import React, { useRef, useState } from 'react';
import { PERSONAL_INFO, CONTACT_FORM } from '../constants/config';
import '../assets/styles/Contact.scss';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';

function Contact() {

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const form = useRef();

  const sendEmail = async (e: any) => {
    e.preventDefault();

    setNameError(name === '');
    setEmailError(email === '');
    setMessageError(message === '');

    if (name !== '' && email !== '' && message !== '') {
      setIsSubmitting(true);
      setSubmitStatus('idle');

      try {
        const response = await fetch(CONTACT_FORM.formspreeEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: name,
            email: email,
            message: message,
          }),
        });

        if (response.ok) {
          setSubmitStatus('success');
          setName('');
          setEmail('');
          setMessage('');
        } else {
          setSubmitStatus('error');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        setSubmitStatus('error');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Got a project waiting to be realized? Let's collaborate and make it happen!</p>
          <div style={{ marginBottom: '20px', padding: '15px', borderRadius: '8px' }}>
            <p style={{ margin: '5px 0' }}><strong>Email:</strong> <a href={`mailto:${PERSONAL_INFO.email}`}>{PERSONAL_INFO.email}</a></p>
            <p style={{ margin: '5px 0' }}><strong>Phone:</strong> <a href={`tel:${PERSONAL_INFO.phone}`}>{PERSONAL_INFO.phone}</a></p>
            <p style={{ margin: '5px 0' }}><strong>Location:</strong> {PERSONAL_INFO.location}</p>
          </div>

          {submitStatus === 'success' && (
            <Alert severity="success" style={{ marginBottom: '20px' }}>
              Thank you! Your message has been sent successfully. I'll get back to you soon!
            </Alert>
          )}

          {submitStatus === 'error' && (
            <Alert severity="error" style={{ marginBottom: '20px' }}>
              Oops! Something went wrong. Please try again or email me directly.
            </Alert>
          )}

          <Box
            ref={form}
            component="form"
            noValidate
            autoComplete="off"
            className='contact-form'
          >
            <div className='form-flex'>
              <TextField
                required
                id="outlined-required"
                label="Your Name"
                placeholder="What's your name?"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                error={nameError}
                helperText={nameError ? "Please enter your name" : ""}
                InputProps={{
                  style: { backgroundColor: 'white' }
                }}
                inputProps={{
                  style: { color: '#0d1116' }
                }}
                InputLabelProps={{
                  style: { color: 'rgba(13, 17, 22, 0.7)' }
                }}
              />
              <TextField
                required
                id="outlined-required"
                label="Email / Phone"
                placeholder="How can I reach you?"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                error={emailError}
                helperText={emailError ? "Please enter your email or phone number" : ""}
                InputProps={{
                  style: { backgroundColor: 'white' }
                }}
                inputProps={{
                  style: { color: '#0d1116' }
                }}
                InputLabelProps={{
                  style: { color: 'rgba(13, 17, 22, 0.7)' }
                }}
              />
            </div>
            <TextField
              required
              id="outlined-multiline-static"
              label="Message"
              placeholder="Send me any inquiries or questions"
              multiline
              rows={10}
              className="body-form"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              error={messageError}
              helperText={messageError ? "Please enter the message" : ""}
              InputProps={{
                style: { backgroundColor: 'white' }
              }}
              inputProps={{
                style: { color: '#0d1116' }
              }}
              InputLabelProps={{
                style: { color: 'rgba(13, 17, 22, 0.7)' }
              }}
            />
            <Button
              variant="contained"
              endIcon={!isSubmitting && <SendIcon />}
              onClick={sendEmail}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send'}
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;