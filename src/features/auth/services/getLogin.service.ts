import api from '../../../api/axios';

import {LoginResponse} from './../interfaces/LoginResponse.interface';

export const getLogin = async(): Promise<LoginResponse> => {
    const response = await api.get<LoginResponse>("/auth/getlogin");

    const id = response.data.id;
    const role = response.data.role;

    return {
        id: id,
        role: role
    };
}