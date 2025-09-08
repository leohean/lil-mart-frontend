import {AxiosPromise} from "axios";
import api from '../../../api/axios';

export const updateProduct = async(data: any & {image?: File}) : AxiosPromise<any> => {
    const { id, image,...productData } = data;
    const response = api.put(`/product/${id}`, productData,  {
        headers: {
        'Content-Type': 'application/json',
        }
    });
  
    if (image) {
        const formData = new FormData();
        formData.append("image", image);

        await api.post(`/product/${id}/image`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
        });
    }

    return response;
}