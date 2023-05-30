export const contactFormInputs = [
  { type: 'text', name: 'firstname', required: true },
  { type: 'text', name: 'lastname', required: true },
  { type: 'text', name: 'company', required: false },
  { type: 'text', name: 'phone', required: false },
  { type: 'email', name: 'email', required: true },
  { type: 'textarea', name: 'message', required: true },
];

export const contacFormLabels = {
  firstname: {
    en: 'First Name',
    nl: 'Voornaam',
  },
  lastname: {
    en: 'Last Name',
    nl: 'Familienaam',
  },
  company: {
    en: 'Company',
    nl: 'Bedrijf',
  },
  phone: {
    en: 'Phone',
    nl: 'Telefoon',
  },
  email: {
    en: 'Email',
    nl: 'E-mail',
  },
  message: {
    en: 'Your question or message',
    nl: 'Jouw vraag of bericht',
  },
  submit: {
    en: 'Submit',
    nl: 'Verzenden',
  },
};

export const contactFormMessages = {
  success: {
    en: 'Thanks for your message. I will contact you as soon as possible.',
    nl: 'Bedankt voor je bericht. Ik neem zo snel mogelijk contact met jou op.',
  },
  error: {
    en: 'Sorry, something went wrong. Try again.',
    nl: 'Sorry, er ging iets fout. Probeer opnieuw.',
  },
};
