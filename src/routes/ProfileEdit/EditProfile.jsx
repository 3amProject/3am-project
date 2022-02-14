import Button from '../../components/Button';
import styled from 'styled-components';
import { putProfileEdit, signOut } from '../../service/authService';
import { getProfileEdit } from '../../service/authService';
import { useState, useEffect } from 'react';

const Section = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;
const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin: 2rem 0;
`;
const Input = styled.input`
    margin-top: 0.5em;
`;

const EditProfile = () => {
    const [formData, setFormData] = useState({
        name: '',
        // password: '',
        email: '',
        address: '',
        phoneNum: ''
    });

    useEffect(()=>{
        getProfileEdit().then((result) => setFormData(result))
        .catch((error) => console.log(error));
    },[]);
    
    const handleLogout = () => {
        signOut();
        window.location.href='/login';
    }

    const handleEdit = async(formData) => {
        if(!window.confirm('회원 정보를 수정하시겠습니까?')){
            return;
        } else {
            const res = await putProfileEdit(formData, ['name','email','address','phoneNum']);
            if(res){
                console.log(res);
                if(!!res.error){
                    window.alert(res.error);
                } else {
                    window.alert('회원 정보 수정 완료 👍');
                }
            }
        }
    }

    return (
        <Section>
        <h1>회원 정보 수정</h1>
        <Form>
            <Input 
            required
            value={formData.name}
            onChange={(e) => setFormData(oldFormData => ({...oldFormData, name: e.target.value}))}
            type="text" placeholder={formData.name} />
            {/* <Input 
            required
            value={formData.password}
            onChange={(e) => setFormData(oldFormData => ({...oldFormData, password: e.target.value}))}
            type="password" placeholder={formData.password} /> */}
            <Input 
            required
            value={formData.email}
            onChange={(e) => setFormData(oldFormData => ({...oldFormData, email: e.target.value}))}
            type="email" placeholder={formData.email} />
            <Input 
            required
            value={formData.address}
            onChange={(e) => setFormData(oldFormData => ({...oldFormData, address: e.target.value}))}
            type="text" placeholder={formData.address} />
            <Input 
            required
            value={formData.phoneNum}
            onChange={(e) => setFormData(oldFormData => ({...oldFormData, phoneNum: e.target.value}))}
            type="tel" placeholder={formData.phoneNum} />
        </Form>
        <div>
            <Button 
            onClick={()=>handleEdit(formData)} 
            text="저장"/>
            <p></p>
            <Button onClick={()=>handleLogout()} text="로그아웃" />
        </div>
        </Section>
    );
}

export default EditProfile;