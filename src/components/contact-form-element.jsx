import './contact-form-element.css';
import { useLanguage } from '../contexts/language.context';
import { contacFormLabels } from '../data';

const ContactFormElement = ({ input, formData, handleChange }) => {
  const { language } = useLanguage();
  const { type, name, value, placeholder, required, options } = input;

  if (type === 'select') {
    return (
      <div className={`form-element ${name}`}>
        <label htmlFor={name}>
          {contacFormLabels[name][language]}
          {required ? ` *` : ''}
        </label>
        <select
          name={name}
          onChange={handleChange}
          value={value ? value : formData[name]}
        >
          <option value=""></option>
          {options.map((option) => (
            <option key={option.id} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    );
  }

  if (type === 'textarea') {
    return (
      <div className={`form-element ${name}`}>
        <label htmlFor={name}>
          {contacFormLabels[name][language]}
          {required ? ` *` : ''}
        </label>
        <textarea
          name={name}
          value={value ? value : formData[name]}
          onChange={handleChange}
          rows="5"
        ></textarea>
      </div>
    );
  }

  if (type === 'checkbox' || type === 'radio') {
    return (
      <div className={`form-element ${name}`}>
        <input
          type={type}
          name={name}
          value={value ? value : formData[name]}
          checked={formData[name].checked}
          onChange={handleChange}
        />
        <label htmlFor={name}>
          {contacFormLabels[name][language]}
          {required ? ` *` : ''}
        </label>
      </div>
    );
  }

  return (
    <div className={`form-element ${name}`}>
      <label htmlFor={name}>
        {contacFormLabels[name][language]}
        {required ? ` *` : ''}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        value={value ? value : formData[name]}
        onChange={handleChange}
        placeholder={placeholder ? placeholder : ''}
        required={required ? required : ''}
      />
    </div>
  );
};

export default ContactFormElement;
