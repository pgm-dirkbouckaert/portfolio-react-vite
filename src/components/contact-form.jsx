import './contact-form.css';
import useFormData from '../hooks/useFormData';
import {
  contacFormLabels,
  contactFormInputs,
  contactFormMessages,
} from '../data';
import ContactFormElement from './contact-form-element';
import { useLanguage } from '../contexts/language.context';

// import Modal
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { useState } from 'react';

const Contact = () => {
  const { language } = useLanguage();
  const [isModalopen, setisModalOpen] = useState(false);
  const [initialFormData, formData, setFormData] =
    useFormData(contactFormInputs);

  const handleChange = (e) => {
    const name = e.currentTarget.name;
    const val = e.currentTarget.value;
    setFormData({ [name]: val });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData(initialFormData);
    setisModalOpen(true);
  };

  const closeModal = () => {
    setisModalOpen(false);
  };

  return (
    <section id="contact" className="page contact">
      <h1>Contact</h1>
      <p>{contactFormMessages.simulation[language]}</p>
      <form className="container" onSubmit={handleSubmit}>
        {contactFormInputs.map((input, index) => (
          <ContactFormElement
            key={index}
            input={input}
            formData={formData}
            handleChange={handleChange}
          />
        ))}
        <button type="submit">{contacFormLabels['submit'][language]}</button>
      </form>
      {isModalopen && (
        <Modal
          open={isModalopen}
          onClose={closeModal}
          top
          classNames={{
            modal: 'customModal',
          }}
        >
          <div className="modal-content">
            {contactFormMessages['success'][language]}
          </div>
        </Modal>
      )}
    </section>
  );
};

export default Contact;
