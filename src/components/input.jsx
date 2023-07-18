import React from 'react'

function Input({
  name,
  placeholder,
  required,
  title,
  longInput,
  value,
  onChange,
  type
}) {
  return (
    <div className="box subBox">
      <p className="input-title">
        {title} <span style={{ color: 'red' }}>{required && '*'}</span>
      </p>
      <input
        style={{ width: longInput ? '100%' : '50%' }}
        onChange={onChange}
        value={value}
        type={type}
        className="input-filed"
        name={name}
        placeholder={placeholder}
      />
    </div>
  )
}

export default Input
