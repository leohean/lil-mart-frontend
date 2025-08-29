import styles from './SearchBar.module.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SearchBar({label, type, placeholder}){
    const navigate = useNavigate();
    const [search, setSearch] = useState("");
    
    return(
        <div className={styles.searchBar}>
            <label>{label}</label>
            <input 
                type={type} 
                placeholder={placeholder} 
                value={search} 
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={(e) => {
                    if(e.key == 'Enter'){
                        navigate('/search', {state: {searchParameter: search}});
                        navigate(0);
                    }
                }}
            />
        </div>
    );
}