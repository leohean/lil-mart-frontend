import api from '../../../api/axios';

export const logout = async(): Promise<any> => {
    const response = await api.post("/auth/logout");

    return response;
}