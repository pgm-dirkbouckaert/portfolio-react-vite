import { useState } from "react";

const useFormData = (inputs) => {
  const initialFormData = {};
  for (const input of inputs) initialFormData[input.name] = "";

  const [formData, changeFormData] = useState(initialFormData);

  const setFormData = (newData = initialFormData) => {
    changeFormData((formData) => {
      return { ...formData, ...newData };
    });
  };

  return [initialFormData, formData, setFormData];
};

export default useFormData;
