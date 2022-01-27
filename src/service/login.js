import Authentication from "./authentication";

const login = async (user) => {
    const authentication = new Authentication();
    let result = {
        error: ''
    }
    // 더 많은 에러 검열 로직 필요
    if (user.userId === '' || user.password === '') {
        result.error = '모든 정보를 입력해주세요.';
        return result;
    }
    const token = await authentication.executeJwtAuthentication(user);
    if(!token){
        result.error = '토큰을 받아올 수 없습니다.';
        return result;
    }
    authentication.registerSuccessfulLoginForJwt(user.userId, token);
}

export default login;
