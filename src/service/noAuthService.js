import { customAxios } from "./customAxios";

// 홈 메뉴 받아오기
export const getMenus = async() => {
    try {
        const res =  await customAxios.get('/');
        return res;
    } catch (error) {
        console.log(error);
    }
}

