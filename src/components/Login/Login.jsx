import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useRef } from 'react';
import firebase from '../Firebase/firebase';
const StyledLoginContainer = styled.div`
  padding-top:25vh;
  height: 100%;
  width: 100%;
  background: url('https://cdn.pixabay.com/photo/2017/04/19/09/07/air-2241569_960_720.jpg') no-repeat center ;
  background-size: cover;

`;

const StyledLoginForm = styled.div`
  background-color: white;
  height: 350px;
  width: 400px;
  margin: auto;
  border-radius: 10px;
`
const StyledLoginHeader = styled.div`
  color: orange;
  font-size: 1.5em;
  text-align: center;
  padding-top: 20px;
  margin-bottom: 2em;
`;

const StyledInputLoginFiled = styled.label`
  margin-left: 10%;
  display: flex;
  flex-direction: column;
  margin-bottom: 2em;
  & span{
    color: black;
    font-size: 0.5;
    margin-bottom: 10px;
    color: orange;
  };
  & input{
    width: 80%;
    height: 30px;
    padding-left: 10px;
  };
  & input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button{
    -webkit-appearance: none;
    margin: 0;
  }
`;

const StyledSubmitButton = styled.button`
  color: white;
  background: orange;
  font-size: 0.7em;
  border: none;
  height: 3em;
  width: 5em;
  margin-left: 42%;
  font-weight: 600;
  border-radius: 5px;
`;
const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verifiedCode, setVerifiedCode] = useState('');

  const recaptchaRef = useRef();
  useEffect(() => {
    firebase.auth().useDeviceLanguage()
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
      'size': 'invisible',
      'callback': function (response) {
        // reCAPTCHA solved, allow signInWithPhoneNumber.

      }
    });

  }, [])
  const onChangeHandler = (e, setState) => {
    setState(e.target.value);
  }

  const onSubmitHandler = async (e) => {
    console.log('submit')

    const appVerifier = window.recaptchaVerifier;
    console.log(appVerifier)
    firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
      .then(function (confirmationResult) {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        confirmationResult.confirm(verifiedCode).then(function (result) {
          // User signed in successfully.
          console.log(result)
          // ...
        }).catch(function (error) {
          // User couldn't sign in (bad verification code?)
          // ...
        });

      }).catch(function (error) {
        // Error; SMS not sent
        // ...
        window.recaptchaVerifier.render().then(function (widgetId) {
          console.log(widgetId)
          window.grecaptcha.reset(widgetId);
        })


      });
  }
  const content = (
    <StyledLoginContainer>
      <label></label>
      <StyledLoginForm >
        <StyledLoginHeader>LOGIN</StyledLoginHeader>
        <StyledInputLoginFiled>
          <span>Phone number:</span>
          <input onChange={ (e) => onChangeHandler(e, setPhoneNumber) } value={ phoneNumber } type="tel" />
        </StyledInputLoginFiled>
        <StyledInputLoginFiled>
          <span>Verified code:</span>
          <input onChange={ (e) => onChangeHandler(e, setVerifiedCode) } value={ verifiedCode } type="number" />
        </StyledInputLoginFiled>
        <StyledSubmitButton id='sign-in-button' onClick={ e => onSubmitHandler(e) }>Submit</StyledSubmitButton>
        <div id='captcha'></div>
      </StyledLoginForm>

    </StyledLoginContainer>
  );
  return content;
}
export default Login;