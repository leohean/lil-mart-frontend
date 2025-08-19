import styles from './Input.module.css'

export default function Input({label, type, placeholder, value, updateValue}){

  return (
    <>
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={type === "file" ? undefined : value}
        onChange={(e) => {
          if (type === "file") {
            updateValue(e);
          } else {
            updateValue(e.target.value);
          }
        }}
        required
      />
    </>
  );
}