import { customAxios } from "./customAxios";

export const signUp = async(user) => {
    if (user.name === '' 
    || user.userId === '' 
    || user.password === '' 
    || user.password2 === '' 
    || user.email === '' 
    || user.address === '' 
    || user.phoneNum === '') {
        window.alert('모든 정보를 입력해주세요.');
        return;
    }
    if (user.userId === user.password) {
        window.alert('아이디와 패스워드가 같습니다.')
        return;
    }
    if (user.password !== user.password2) {
        window.alert('두 패스워드가 서로 일치하지 않습니다.');
        return;
    }
    
    console.log(JSON.stringify(user));
    const data = await customAxios.post(`/auth/joinProc`, JSON.stringify(user))
    .then((res) => {
        window.alert(res.data.message);
        window.location.href = '/';
    })
    .catch((res, error) => {
        window.alert(res.data.message);
        console.log(error);
    });
    return data;
}