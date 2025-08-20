import styles from './Nav.module.css'

import { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faAppleWhole } from '@fortawesome/free-solid-svg-icons';
import { faX } from '@fortawesome/free-solid-svg-icons';

import ButtonPrimary from './../Button/ButtonPrimary/ButtonPrimary.js'
import ButtonSecondary from './../Button/ButtonSecondary/ButtonSecondary.js'
import SearchBar from './../SearchBar/SearchBar.js'

export default function Nav(){
    const navigate = useNavigate();

    const [isLogged, setIsLogged] = useState(false);
    const handleLogout = () => {
        localStorage.removeItem("token");
        setIsLogged(false);
        navigate('/');
    };

    useEffect(() => {
        const token = localStorage.getItem("token");
        setIsLogged(!!token);
    });

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleIsMenuOpen = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return(
        <>
        <header>
            <nav>
                <Link to="/">
                    <div className={styles.logo}>
                        <FontAwesomeIcon icon={faAppleWhole} size="2x" className={styles.logoIcon} />   
                        <h1><span>Lil Mart</span></h1>
                    </div>
                </Link> 

                <div className={styles.searchBar}>
                    <SearchBar label="" type="text" placeholder=" Buscar por..."/>
                </div>   
                     
                
                <div className={styles.buttons}>
                    {isLogged ? (
                        <ButtonSecondary name="Sair" event={handleLogout} />
                        ) : (
                        <>
                            <ButtonSecondary name="Entrar" event={() => navigate('/login')} />
                            <ButtonPrimary name="Criar conta" event={() => navigate('/register')} />
                        </>
                    )}
                </div>

                <button className={styles.mobileButton} onClick={handleIsMenuOpen}>
                    <FontAwesomeIcon icon={isMenuOpen?faX:faBars} size="2x" />  
                </button>    
            </nav>
        </header>

        {isMenuOpen &&
            <div className={styles.mobileMenu}>
                <ul>
                    {isLogged ? (
                    <li>
                        <ButtonSecondary name="Sair" event={handleLogout} />
                    </li>
                    ) : (<>
                        <li>
                            <ButtonSecondary name="Entrar" event={() => navigate('/login')}/>
                        </li>
                        <li>
                            <ButtonSecondary name="Criar conta" event={() => navigate('/register')}/>
                        </li>
                    </>
                    )}
                </ul>
            </div>
        }
        </>
    );
}