import React, { useEffect, useRef } from 'react';

import { useField } from '@unform/core';
/**
 *  Recebendo dados do input
 *
 * @export
 * @param {*} { name, label, ...rest }
 * @returns
 */
export default function Input({ name, label, ...rest }) {
  const inputRef = useRef(null);

  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    /** mostrando para o unform o input */
    registerField({
      /** nome do input */
      name: fieldName,
      /** acessando o value dentro do input */
      ref: inputRef.current,
      /** qual propriedade que contém o valor do meu input dentro de ref */
      path: 'value',
    });
  }, [fieldName, registerField]);

  /** */
  return (
    <>
      <label htmlFor={fieldName}>
        <br />
        {label}
        <br />
        {/** ref - Não anote os dados enquanto o usuário estiver digitando para não renderizar com cada dígito  */}
        <input ref={inputRef} {...rest} />
        {error && <span style={{ color: '#f00' }}>{error}</span>}
        <br />
      </label>
    </>
  );
}
