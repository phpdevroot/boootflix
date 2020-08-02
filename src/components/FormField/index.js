import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

  const Input = styled.input `
  
  `;


function FormField({
  textfild, label, type, name, value, onChange,

}) {
  const fieldId = `id_${name}`;
  return (
    <div>
      <label
        htmlFor={fieldId}
      >
        {label}
        :
        <input
          id={fieldId}
          textfild={textfild}
          type={type}
          value={value}
          name={name}
          onChange={onChange}
        />
      </label>
    </div>

  );
}

FormField.defautlProps = {
  type: 'text',
  value: '',
  onChange: () => {},

};

FormField.prototype = {
  textfild: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,

};

export default FormField;
