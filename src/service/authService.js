import { customAxios } from "./customAxios";

// 로그인
export const signIn = async (user) => {
    let result = {
        error: ''
    }
    // 더 많은 에러 검열 로직 필요
    if (user.userId === '' || user.password === '') {
        result.error = '모든 정보를 입력해주세요.';
        return result;
    }
    
    try {
        const res = await customAxios.post('/auth/signInProc', JSON.stringify(user));
        // 토큰 받아와서 localStorage 저장
        localStorage.setItem('accessToken', res.data.AccessToken);
        localStorage.setItem('refreshToken', res.data.RefreshToken);
        
        // userId localStorage 저장
        localStorage.setItem('userId', user.userId);
        
        // setAuthUser(()=>isLoggedIn());

    } catch(_error) {
        console.log(_error);
        window.alert(_error);
    }

}


// 회원 가입
export const signUp = async (user, required = []) => {
    let validate = true;   
    let result = {
        error: ''
    };

    required.map(k => {
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
    
    try {
        const data = await customAxios.post('/auth/signUpProc', JSON.stringify(user));
        window.alert('회원가입이 완료되었습니다 👏');
        return data;

    } catch(_error) {
        console.log(_error);
        window.alert(_error);
    }
}


// 로그 아웃
export const signOut = () => {
    // localStorage 토큰 제거
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    // localStorage userId 제거
    localStorage.removeItem('userId');
}


