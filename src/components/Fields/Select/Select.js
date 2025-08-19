import styles from './Select.module.css'


export default function Selection({label, value, updateValue, options}){
    return(
        <>  
        <div>
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