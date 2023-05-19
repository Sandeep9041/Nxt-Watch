import {useState, useEffect} from 'react'
import {useHistory, Redirect} from 'react-router-dom'
// import {Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'

import {
  LoginBg,
  LoginContainers,
  LoginLogo,
  LoginForm,
  LoginInput,
  LoginLabel,
  Button,
  ErrorMsg,
  ShowPasswordLabel,
} from './loginCs'

import NewContext from '../context'

const Login = () => {
  const history = useHistory()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loginError, setLoginError] = useState(false)
  const [loginErrorMsg, setLoginErrorMsg] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  return (
    <NewContext.Consumer>
      {value => {
        const {isDarkMode} = value

        const submitSuccess = token => {
          Cookies.set('jwt_token', token, {
            expires: 30,
          })
          history.replace('/')
        }

        const submitFailure = msg => {
          setLoginError(true)
          setLoginErrorMsg(msg)
        }

        const goSubmit = async () => {
          const ne = {
            username,
            password,
          }
          const url = 'https://apis.ccbp.in/login'
          const options = {
            method: 'POST',
            body: JSON.stringify(ne),
          }
          const response = await fetch(url, options)
          if (response.ok === true) {
            const data = await response.json()
            submitSuccess(data.jwt_token)
          } else {
            const data = await response.json()

            submitFailure(data.error_msg)
          }
        }

        const submitUser = async e => {
          e.preventDefault()
          goSubmit()
          /* console.log(password) */
        }

        const showPasswordToggle = () => {
          setShowPassword(prevState => !prevState)
        }
        const jwtToken = Cookies.get('jwt_token')

        if (jwtToken !== undefined) {
          return <Redirect to="/" />
        }
        return (
          <LoginBg isDarkMode={isDarkMode}>
            <LoginContainers isDarkMode={isDarkMode}>
              <LoginLogo
                src={
                  isDarkMode
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                }
                alt="website logo"
              />
              <LoginForm onSubmit={submitUser}>
                <LoginLabel htmlFor="username" isDarkMode={isDarkMode}>
                  USERNAME
                </LoginLabel>
                <LoginInput
                  id="username"
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                  isDarkMode={isDarkMode}
                />
                <br />
                <LoginLabel htmlFor="password" isDarkMode={isDarkMode}>
                  PASSWORD
                </LoginLabel>
                <LoginInput
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  isDarkMode={isDarkMode}
                />
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    fontFamily: 'Roboto',
                    marginTop: '7px',
                    color: '#212121',
                  }}
                >
                  <input
                    id="loginCheckbox"
                    type="checkbox"
                    style={{
                      height: '15px',
                      width: '15px',
                      marginRight: '7px',
                      outline: 'none',
                    }}
                    onChange={showPasswordToggle}
                  />
                  <ShowPasswordLabel
                    htmlFor="loginCheckbox"
                    isDarkMode={isDarkMode}
                  >
                    Show Password
                  </ShowPasswordLabel>
                </div>
                <br />
                <Button type="submit">Login</Button>
                {loginError && <ErrorMsg>*{loginErrorMsg}</ErrorMsg>}
              </LoginForm>
            </LoginContainers>
          </LoginBg>
        )
      }}
    </NewContext.Consumer>
  )
}
export default Login
