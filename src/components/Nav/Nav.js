import styles from './Nav.module.css'
import { useState, useEffect} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { getLogin } from './../../features/auth/services/getLogin.service.ts'
import { useLogoutMutate } from './../../features/auth/hooks/useLogoutMutate.ts'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faAppleWhole } from '@fortawesome/free-solid-svg-icons';
import { faX } from '@fortawesome/free-solid-svg-icons';

import ButtonPrimary from './../Button/ButtonPrimary/ButtonPrimary.js'
import ButtonSecondary from './../Button/ButtonSecondary/ButtonSecondary.js'
import SearchBar from './../SearchBar/SearchBar.js'

export default function Nav(){
    const location = useLocation();
    const navigate = useNavigate();

    const { mutate: logout } = useLogoutMutate();
    const [isLogged, setIsLogged] = useState(false);
    const handleLogout = () => {
        setRole(null);
        setIsLogged(false);
        logout();
    };

    const[role, setRole] = useState("");
    useEffect(() => {
    const fetchUserInfo = async () => {
        try {
            const login = await getLogin();
            setIsLogged(true);
            setRole(login.role);
        } catch (error) {
            setIsLogged(false);
            setRole(null);
        }
    };

    fetchUserInfo();
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
                    { role === "ROLE_USER" && location.pathname !== "/shoppingcart"? (
                        <ButtonPrimary name="Meu carrinho" event={() => {navigate("/shoppingcart")}} />
                    ) : role === "ROLE_MARKET" && location.pathname !== "/markethome" ? (
                        <ButtonPrimary name="Meu mercado" event={() => {navigate("/markethome")}} />
                    ) : null
                    }

                    {isLogged ? (
                        <ButtonSecondary name="Sair" event={handleLogout} />
                    ) : null}

                    {!isLogged && location.pathname !== "/login" ? (
                        <ButtonSecondary name="Entrar" event={() => navigate('/login')} />
                    ) : null}

                    {!isLogged && 
                    location.pathname !== "/register" && 
                    location.pathname !== "/register/registeruser" && 
                    location.pathname !== "/register/registermarket" ? (
                        <ButtonPrimary name="Criar conta" event={() => navigate('/register')} />
                    ) : null}
                </div>

                <button className={styles.mobileButton} onClick={handleIsMenuOpen}>
                    <FontAwesomeIcon icon={isMenuOpen?faX:faBars} size="2x" />  
                </button>    
            </nav>
        </header>

        {isMenuOpen &&
            <div className={styles.mobileMenu}>
                <ul>
                    { role === "ROLE_USER" && location.pathname !== "/shoppingcart"? (
                        <li><ButtonSecondary name="Meu carrinho" event={() => {navigate("/shoppingcart")}} /></li>
                    ) : role === "ROLE_MARKET" && location.pathname !== "/markethome" ? (
                        <li><ButtonSecondary name="Meu mercado" event={() => {navigate("/markethome")}} /></li>
                    ) : null
                    }

                    {isLogged ? (
                        <li><ButtonSecondary name="Sair" event={handleLogout} /></li>
                    ) : null}

                    {!isLogged && location.pathname !== "/login" ? (
                        <li><ButtonSecondary name="Entrar" event={() => navigate('/login')} /></li>
                    ) : null}

                    {!isLogged && 
                    location.pathname !== "/register" && 
                    location.pathname !== "/register/registeruser" && 
                    location.pathname !== "/register/registermarket" ? (
                        <li><ButtonSecondary name="Criar conta" event={() => navigate('/register')} /></li>
                    ) : null}
                </ul>
            </div>
        }
        </>
    );
}