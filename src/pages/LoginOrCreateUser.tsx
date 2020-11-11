import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { auth } from '../lib/firebase';
import { useHistory } from 'react-router-dom';

const LoginOrCreateUser: React.FC<{}> = () => {
  const [mode, setMode] = useState<string>('login');
  const [title, setTitle] = useState<string>('login');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const history = useHistory();

  useEffect(() => {
    setTitle(mode);
  }, [mode]);

  // login
  const firebaseLogin = async (email: string, password: string) => {
    await auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        history.push('/');
      })
      .catch(function (error) {
        var errorMessage = error.message;
        console.log('errorMessage : ', errorMessage);
      });
  };

  // create user
  const firebaseCreateUser = async (email: string, password: string) => {
    await auth
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        history.push('/');
      })
      .catch(function (error) {
        var errorMessage = error.message;
        console.log('errorMessage : ', errorMessage);
      });
  };

  const handleClick = () => {
    if (mode === 'login') {
      firebaseLogin(email, password);
    } else {
      firebaseCreateUser(email, password);
    }
  };

  const changeMode = () => {
    if (mode === 'login') {
      setMode('createUser');
    } else {
      setMode('login');
    }
  };

  return (
    <Wrapper>
      <LoginArea>
        <FormArea>
          <h1>{title}</h1>
          <InputArea>
            <Label htmlFor="email">Email</Label>
            <input
              id="email"
              type="email"
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputArea>
          <InputArea>
            <Label htmlFor="password">Password</Label>
            <input
              id="password"
              type="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputArea>
          <InputArea>
            <button onClick={handleClick}>{mode}</button>
          </InputArea>
          <button onClick={changeMode}>createUser</button>
        </FormArea>
      </LoginArea>
    </Wrapper>
  );
};

export default LoginOrCreateUser;

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const LoginArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40vw;
  height: 60vh;
  border: 1px solid #000;
`;

const FormArea = styled.div`
  display: block;
  margin: auto;
  text-align: center;
`;

const InputArea = styled.div`
  display: block;
  width: 100%;
`;

const Label = styled.label`
  display: block;
`;
