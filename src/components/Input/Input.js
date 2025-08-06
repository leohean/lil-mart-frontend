import styles from './Input.module.css'

export default function Input({label, type, placeholder, value, updateValue}){
    return(
        <>
            <label>{label}</label>
            <input type={type} placeholder={placeholder} value={value} onChange={(e) => updateValue(e.target.value)}></input>
        </>
    );
}