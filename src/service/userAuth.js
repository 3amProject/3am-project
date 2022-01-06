import { customAxios } from "./customAxios";

export default class UserAuth {
    signUp = async (user) => {
        // const idRegExp = /^[a-zA-z0-9]{3,12}$/;
        // const pwdRegExp = /^[a-zA-z0-9]{3,12}$/;
        //   // 모든 정보 입력 여부 확인
        // if (user.name === '' 
        // || user.userId === '' 
        // || user.password === '' 
        // || user.pwd2 === '' 
        // || user.email === '' 
        // || user.address === '' 
        // || user.phoneNum === '') {
        //     window.alert('모든 정보를 입력해주세요.');
        //     return;
        // }
        //   // 아이디, 패스워드 동일 여부 확인
        // if (user.userId === user.password) {
        //     window.alert('아이디와 패스워드가 같습니다.')
        //     return;
        // }
        //   // 패스워드, 패스워드 확인 일치 여부
        // if (user.password !== user.pwd2) {
        //     window.alert('두 패스워드가 서로 일치하지 않습니다.');
        //     return;
        // }
        //   // 아이디, 패스워드 유효성 검사
        // if (!idRegExp.test(user.userId)) {
        //     window.alert('아이디는 영문 대소문자와 숫자 3~12자리로 입력해주세요.');
        //     return;
        // }
        // if (!pwdRegExp.test(user.password)) {
        //     window.alert('비밀번호는 영문 대소문자와 숫자 3~12자리로 입력해주세요.');
        //     return;
        // }
        // 회원 가입 정보를 서버에 보내기
        console.log(JSON.stringify(user));
        const data = await customAxios.post(`/auth/joinProc`, JSON.stringify(user))
        .then((res)=>console.log(res))
        .catch((error)=>console.log(error));
        return data;
    }
}