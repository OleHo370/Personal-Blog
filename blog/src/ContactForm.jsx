import { useState } from 'react';
import emailjs from '@emailjs/browser';
import './ContactForm.css';
import { AnimatedSection } from './AnimatedSection';

emailjs.init('pThZA654T5DqYDcpK');

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailjs.send(
        'service_ywk50e9',
        'template_0am0yyc',
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        }
      );

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <AnimatedSection className="contactsection" id="contactsec"delay = {0.2}>
        <div className="contactsectionbox">
            <div className="foldertab">
                <h2>Contact <span className="highlight">Me</span></h2>
            </div>

            <div className="foldercontent">
                <form onSubmit={handleSubmit} className="contactform">

                    <AnimatedSection className="formgroup">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            placeholder="Name"
                        />
                    </AnimatedSection>

                    <AnimatedSection className="formgroup">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            placeholder="example@email.com"
                        />
                    </AnimatedSection>

                    <AnimatedSection className="formgroup">
                        <label htmlFor="subject">Subject</label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            required
                            placeholder="Subject..."
                        />
                    </AnimatedSection>

                    <AnimatedSection className="formgroup">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                            placeholder="Message..."
                            rows="6"
                        ></textarea>
                    </AnimatedSection>

                    <AnimatedSection className="sendmessage">
                        <button type="submit" disabled={isSubmitting} className="submitbutton">
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>
                    </AnimatedSection>

                    {submitStatus === 'success' && (
                        <p className="successmessage">Message sent successfully!</p>
                    )}
                    {submitStatus === 'error' && (
                        <p className="errormessage">Failed to send message. Please try again.</p>
                    )}
                </form>
            </div>
        </div>
    </AnimatedSection>
  );
}