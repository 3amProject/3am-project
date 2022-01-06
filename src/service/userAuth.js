import { customAxios } from "./customAxios";

export default class UserAuth {
    signUp = async (user) => {
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

        // back 에서 fail/success 따라 message 받아서 alert 출력 ************
        // 참고
        // alert(response.message);    
        // if(response.messageType == "success") {
        // location.href = "/";				
			  // }

        console.log(JSON.stringify(user));
        const data = await customAxios.post(`/auth/joinProc`, JSON.stringify(user))
        .then((res)=>console.log(res))
        .catch((error)=>console.log(error));
        return data;
    }
}