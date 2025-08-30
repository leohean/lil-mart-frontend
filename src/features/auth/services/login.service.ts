import api from '../../../api/axios';

import {LoginRequest} from './../interfaces/LoginRequest.interface';
import {LoginResponse} from './../interfaces/LoginResponse.interface';
import {decodeToken} from './../utils/decodeToken';

export const login = async(data:LoginRequest): Promise<LoginResponse> => {
    const response = await api.post<LoginResponse>("/auth/login", data);

    const token = response.data.token;
    const decodedToken = decodeToken(token);
    const role = decodedToken.role;

    return {
        token: token,
        role: role
    };
}