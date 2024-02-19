import axios from 'axios';

interface IApiServiceProvider {
    uri: string;
}

export const ApiServiceProvider = async ({ uri }: IApiServiceProvider) => {
    try {
        const response = await axios.get(uri);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}
