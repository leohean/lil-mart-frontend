import styles from './Select.module.css'


export default function Select({label, value, updateValue, options}){
    return(
        <>  
        <div className={styles.selectField}>
            <label>{label}</label>
            <select value={value} onChange = {(e) => { updateValue(e.target.value); }}>
                {options.map((option, index) => (
                <option key={index} value={option.value}>
                    {option.label}
                </option>
                ))}
            </select>
            </div>
        </>
    );
}