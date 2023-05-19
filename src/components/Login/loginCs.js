import styled from 'styled-components'

export const LoginBg = styled.div`
  background-color: ${props => (props.isDarkMode ? '#212121' : '#ffffff')};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

export const LoginContainers = styled.div`
  background-color: ${props => (props.isDarkMode ? '#000000' : '#ffffff')};
  display: flex;
  width: 50%;
  max-width: 467px;
  height: 65vh;
  max-height: 515px;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 35px;
  border-radius: 13px;
  box-shadow: ${props =>
    props.isDarkMode ? 'none' : '0px 0px 31px 1px #ebebeb'};
  @media screen and (max-width: 767px) {
    width: 90%;
    max-width: 380px;
    padding: 15px;
  }
`

export const LoginLogo = styled.img`
  width: 175px;
  height: 41px;
`
export const LoginForm = styled.form`
  width: 85%;
  display: flex;
  flex-direction: column;
  font-family: 'Roboto';
  margin-top: 35px;
  @media screen and (max-width: 767px) {
    width: 95%;
  }
`

export const LoginLabel = styled.label`
  color: ${props => (props.isDarkMode ? '#ffffff' : '#909090')};
  font-weight: 600;
  font-size: 13px;
`

export const ShowPasswordLabel = styled.label`
  color: ${props => (props.isDarkMode ? '#f9f9f9' : '#000000')};
`

export const LoginInput = styled.input`
  width: 100%;
  padding: 11px 11px 11px 15px;
  border: 1px solid #cccccc;
  outline: none;
  border-radius: 3px;
  margin-top: 3px;
  font-size: 15px;
  opacity: 0.8;
  color: ${props => (!props.isDarkMode ? '#000000' : '#ffffff')};
  background-color: ${props => (props.isDarkMode ? 'transparent' : '#ffffff')};
`
export const Button = styled.button`
  color: #ffffff;
  background-color: #3b82f6;
  font-size: 15px;
  text-align: center;
  border: 0px;
  cursor: pointer;
  padding-block: 12px;
  border-radius: 7px;
  margin-top: 15px;
`

export const ErrorMsg = styled.p`
  color: #ff0000;
  font-family: 'Roboto';
`

export default LoginBg
