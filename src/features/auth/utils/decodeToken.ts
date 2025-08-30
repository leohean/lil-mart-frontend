import { jwtDecode } from "jwt-decode";

import {Token} from './../interfaces/Token.interface';

export const decodeToken = (token: any) =>{
    const decodedToken = jwtDecode<Token>(token);
    return decodedToken;
}