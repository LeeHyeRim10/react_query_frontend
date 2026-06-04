import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { useLoginUser } from '../../no3_store/hooks/useUser'


const initialState = { username: "", password: ""}

const LoginForm = () => {

    const navigate = useNavigate();
    const [user, setUser] = useState(initialState);
    const loginMutation = useLoginUser();

    const handleChange = (event) => {
        const {name,value} = event.target;
        setUser(prev => (
            {...prev, [name]:value}
        ))
    }
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (user.username.trim() === "") {
            alert("이럼 넣어라")
            return
        }
        if (user.password.trim() === "") {
            alert("비밀번호 넣어라")
            return
        }


        try {
            await loginMutation.mutate(user);
            alert(user.username + "님 로그인 성공")
            navigate("/")
        } catch (error) {
            alert("로그이이이이이인 시리이이릴패")
        }

    }

    return (
        <>
        <Container onSubmit={handleSubmit}>
            <Box>
            <Title>로그인</Title>
            <div>
                <Input type='text' name='username' value={user.username} onChange={handleChange} placeholder='아이디 입력' />
            </div>
            <div>
                <Input type='password' name='password' value={user.password} onChange={handleChange} placeholder='비밀번호 입력' />
            </div>
            <div>
                <LoginBtn>로그인</LoginBtn>
                <RegisterBtn onClick={()=>navigate("/register")}>아직 회원이 아니신가요 ? 회원가입</RegisterBtn>
            </div>
            </Box>
        </Container>
        </>
    )
}

export default LoginForm

const Container = styled.form`
    width : 100% ;
    height : 100vh ;

    display : flex ;
    flex-direction : column ;
    justify-content : center ;
    align-items : center ;

    background : #f1f5f9 ;

`
const Title = styled.h2`
    text-align : center ;
    margin-bottom : 32px ;
    color : #1e293b ; 
    font-size : 28px ; 

`
const Box = styled.div`
    width : 400px ;
    background : #f9fbfe ;
    padding : 40px ;
    border-radius : 16px ;
    box-shadow : 0 4px 20px rgba(0,0,0,0.08) ;
    margin : 3px ;

    display : flex ;
    flex-direction : column ;
`
const Input = styled.input`
    width : 100% ;
    padding : 14px 16px ;
    margin-bottom : 16px ;
    border : 1px solid #dbe4ee ;
    font-size : 16px ;
    outline : none ;

    transition : 0.2s ;
    &:focus {
        border-color : #3b82f6 ;
        box-shadow : 0 0 0 3px rgba(59, 130, 246, 0.15) ;
    }
`
const Button = styled.button`
    width : 100% ;
    border : none ;
    padding : 14px ;
    border-radius : 10px ;
    font-size : 15px ;
    font-weight : 600 ;
    cursor : pointer ;
    transition : 0.2s ;
    margin : 3px ;

`

const LoginBtn = styled(Button)`
    background : #a1c3f5 ;
    color : #fefefe ;

    &:hover {
        background : #6fa7fa ;
    }
`

const RegisterBtn = styled(Button)`
    background : transparent ;
    color : #85b4fa ;

    &:hover {
        color : #599afc ;
    }
`
