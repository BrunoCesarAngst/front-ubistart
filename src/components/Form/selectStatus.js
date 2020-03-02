import React, { useEffect, useRef } from 'react';

import { useField } from '@unform/core';

export default function Select({ name, label, ...rest }) {
  const inputRef = useRef(null);

  const { fieldName, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <>
      <label htmlFor={fieldName}>
        <br />
        {label}
        <br />
        <select ref={inputRef} {...rest}>
          <option value="true">Ativo</option>
          <option value="False">Inativo</option>
        </select>
        <br />
      </label>
    </>
  );
}
