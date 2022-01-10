import { customAxios } from "./customAxios";

const signUp = async (user, requird = []) => {
    let validate = true;   
    let result = {
        error: ''
    };

    requird.map(k => {
        if (user[k] === '' || !user[k]) {
            validate = false;
        }
    });

    if (!validate) {
        result.error = '모든 정보를 입력해주세요.';
        return result;
    }
    if (user.userId === user.password) {
        result.error = '아이디와 패스워드가 같습니다.';
        return result;
    }
    if (user.password !== user.password2) {
        result.error = '두 패스워드가 서로 일치하지 않습니다.';
        return result;
    }
    
    const data = await customAxios.post(`/auth/joinProc`, JSON.stringify(user));
    return data;
}

export default signUp;