import apiClient from '../services/api';

export const login = async (email, password) => {
    try {
        const response = await apiClient.post('/user/login', { email, password });
        if (response.data.token) {
            localStorage.setItem('token', response.data.token);
        }
        return response.data;
    } catch (error) {
        if (error.response && error.response.data && error.response.data.message) {
            throw new Error(error.response.data.message);
        }
        throw new Error('Error de conexión o del servidor.');
    }
};

export const register = async (email, password) => {
    try {
        const response = await apiClient.post('/user/register', { email, password });
        return response.data;
    } catch (error) {
        if (error.response && error.response.data && error.response.data.message) {
            throw new Error(error.response.data.message);
        }
        throw new Error('No se pudo completar el registro.');
    }
};

export const logout = () => {
    localStorage.removeItem('token');
    window.location.reload();
};
