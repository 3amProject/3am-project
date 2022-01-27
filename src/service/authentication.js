import { customAxios } from "./customAxios";

export default class Authentication {
    executeJwtAuthentication (user) {
        return customAxios.post('/auth/signInProc', JSON.stringify(user));
    }

    registerSuccessfulLoginForJwt(userId, token) {
        sessionStorage.setItem('token', token);
        sessionStorage.setItem('authenticatedUser', userId);
        this.setupAxiosInterceptors();
    }

    setupAxiosInterceptors() {
        customAxios.interceptors.request.use((config) => {
            const token = sessionStorage.getItem('token');
            if (token) {
                config.headers['Authorization'] = `Bearer: ${token}`;
            }
            return config;
        });
    }

    logout() {
        sessionStorage.removeItem('authenticatedUser');
        sessionStorage.removeItem('token');
    }

    isUserLoggedIn() {
        const token = sessionStorage.getItem('token');
        return token ? true : false;
    }

    getLoggedInUserId() {
        let user = sessionStorage.getItem('authenticatedUser');
        return user || '';
    }

}