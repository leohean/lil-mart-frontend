import axios, {AxiosPromise} from "axios";
import api from './../../../services/axios';
import { jwtDecode } from "jwt-decode";

import {LoginRequest} from './../interfaces/LoginRequest.interface';
import {LoginResponse} from './../interfaces/LoginResponse.interface';
import {Token} from './../interfaces/Token.interface';
import { defaultScheduler } from "@tanstack/react-query";


export const login = async(data:LoginRequest): Promise<LoginResponse> => {
    const response = await api.post<LoginResponse>("/auth/login", data);

    const token = response.data.token;

    const decodedToken = jwtDecode<Token>(token);
    console.log("Payload decodificado:", decodedToken);
    
    const role = decodedToken.role;
    console.log("Role do usuário:", role);

    return {
        token: token,
        role: role
    };
}