// import Dropdown from 'react-bootstrap/Dropdown'
import {Link, useHistory, useLocation} from 'react-router-dom'
import {useState} from 'react'
// import 'bootstrap/dist/css/bootstrap.css'

import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import {AiFillHome} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {HiFire} from 'react-icons/hi'
import {BiListPlus} from 'react-icons/bi'
import {FiSun, FiLogOut} from 'react-icons/fi'
import {ImCross} from 'react-icons/im'
import {FaMoon} from 'react-icons/fa'
import {GoThreeBars} from 'react-icons/go'

import NewContext from '../context'

import '../../App.css'

import {
  HeaderBg,
  HeaderLogo,
  NavContainer,
  Profile,
  LogoutBtn,
  LogoutBtnSm,
  Icon,
  SmallContainer,
  SideTab,
  SideTabContainers,
  SideTabName,
  SideIconContainers,
  SideIconImage,
  SideIconHeading,
  SideIconPara,
} from './headerCs'

const Header = () => {
  const history = useHistory()
  const location = useLocation()
  console.log(location.pathname)

  const [isActive, setIsActive] = useState(false)
  const [activeId, setActiveId] = useState(location.pathname)

  return (
    <NewContext.Consumer>
      {value => {
        const {isDarkMode, setDarkMode} = value
        const setDarkModeOn = () => {
          setDarkMode()
        }

        const logoutButtonClicked = () => {
          Cookies.remove('jwt_token')
          history.replace('/login')
        }
        /* console.log(isDarkMode) */
        return (
          <HeaderBg isDarkMode={isDarkMode}>
            <Link to="/">
              <HeaderLogo
                src={
                  isDarkMode
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                }
                alt="website logo"
              />
            </Link>
            <NavContainer>
              <Icon type="button" onClick={setDarkModeOn} data-testid="theme">
                {!isDarkMode ? (
                  <FaMoon />
                ) : (
                  <FiSun style={{color: '#ffffff'}} />
                )}
              </Icon>
              <Profile
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />
              <div>
                <Popup
                  modal
                  trigger={
                    <LogoutBtn
                      type="button"
                      // onClick={logoutButtonClicked}
                      isDarkMode={isDarkMode}
                    >
                      Logout
                    </LogoutBtn>
                  }
                >
                  {close => (
                    <>
                      <div
                        style={{
                          backgroundColor: isDarkMode ? '#181818' : '#ffffff',
                          color: isDarkMode ? '#ffffff' : '#00306e',
                          fontFamily: 'Roboto',
                          width: '315px',
                          height: '155px',
                          borderRadius: '11px',
                          padding: '15px',
                        }}
                      >
                        <p
                          style={{
                            textAlign: 'center',
                            fontSize: '17px',
                            fontWeight: '500',
                          }}
                        >
                          Are you sure, you want to logout?
                        </p>
                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'center',
                            marginTop: '25px',
                          }}
                        >
                          <button
                            type="button"
                            style={{
                              backgroundColor: 'transparent',
                              width: '75px',
                              height: '35px',
                              border: '1px solid #909090',
                              color: '#909090',
                              borderRadius: '3px',
                              marginLeft: '15px',
                              outLine: 'none',
                            }}
                            onClick={() => close()}
                          >
                            Cancel
                          </button>
                          <button
                            type="button"
                            onClick={logoutButtonClicked}
                            style={{
                              backgroundColor: '#3b82f6',
                              width: '75px',
                              height: '35px',
                              border: '0px',
                              color: '#ffffff',
                              borderRadius: '3px',
                              marginLeft: '15px',
                              outline: 'none',
                            }}
                          >
                            Confirm
                          </button>
                        </div>
                      </div>
                    </>
                  )}
                </Popup>
              </div>

              <SmallContainer>
                <div>
                  <Popup
                    modal
                    trigger={
                      <button
                        type="button"
                        className="trigger-button"
                        style={{
                          backgroundColor: 'transparent',
                          border: '0px',
                          marginBottom: '0px',
                        }}
                      >
                        <GoThreeBars
                          style={{
                            fontSize: '25px',
                            color: !isDarkMode ? '#212121' : '#ffffff',
                            marginRight: '10px',
                          }}
                        />
                      </button>
                    }
                  >
                    {close => (
                      <>
                        <div
                          style={{
                            width: '100vw',
                            height: '100vh',
                            marginTop: '50px',
                          }}
                        >
                          <button
                            type="button"
                            onClick={() => close()}
                            style={{
                              border: '0px',
                              textAlign: 'right',
                              marginBottom: '-1px',
                              padding: '15px',
                              width: '100%',
                              backgroundColor: isDarkMode
                                ? '#181818'
                                : '#ffffff',
                            }}
                          >
                            <ImCross
                              style={{
                                fontSize: '17px',
                                color: !isDarkMode ? '#181818' : '#ffffff',
                              }}
                            />
                          </button>
                          <ul style={{padding: '0px', marginTop: '0px'}}>
                            <Link
                              to="/"
                              style={{textDecoration: 'none', color: '#ffffff'}}
                            >
                              <SideTabContainers
                                type="button"
                                isDarkMode={isDarkMode}
                                isActive={activeId === '/'}
                              >
                                <AiFillHome
                                  style={{
                                    color: isDarkMode ? '#ffffff' : '#000000',
                                    fontSize: '21px',
                                    marginRight: '5px',
                                  }}
                                />
                                <SideTabName isDarkMode={isDarkMode}>
                                  Home
                                </SideTabName>
                              </SideTabContainers>
                            </Link>
                            <Link
                              to="/trending"
                              style={{textDecoration: 'none', color: '#ffffff'}}
                            >
                              <SideTabContainers
                                type="button"
                                isDarkMode={isDarkMode}
                                isActive={activeId === '/trending'}
                              >
                                <HiFire
                                  style={{
                                    color: isDarkMode ? '#ffffff' : '#000000',
                                    fontSize: '21px',
                                    marginRight: '5px',
                                  }}
                                />
                                <SideTabName isDarkMode={isDarkMode}>
                                  Trending
                                </SideTabName>
                              </SideTabContainers>
                            </Link>
                            <Link
                              to="/gaming"
                              style={{textDecoration: 'none', color: '#ffffff'}}
                            >
                              <SideTabContainers
                                type="button"
                                isDarkMode={isDarkMode}
                                isActive={activeId === '/gaming'}
                              >
                                <SiYoutubegaming
                                  style={{
                                    color: isDarkMode ? '#ffffff' : '#000000',
                                    fontSize: '21px',
                                    marginRight: '5px',
                                  }}
                                />
                                <SideTabName isDarkMode={isDarkMode}>
                                  Gaming
                                </SideTabName>
                              </SideTabContainers>
                            </Link>
                            <Link
                              to="/saved-videos"
                              style={{textDecoration: 'none', color: '#ffffff'}}
                            >
                              <SideTabContainers
                                type="button"
                                isDarkMode={isDarkMode}
                                isActive={activeId === '/saved-videos'}
                              >
                                <BiListPlus
                                  style={{
                                    color: isDarkMode ? '#ffffff' : '#000000',
                                    fontSize: '21px',
                                    marginRight: '5px',
                                  }}
                                />
                                <SideTabName isDarkMode={isDarkMode}>
                                  Saved videos
                                </SideTabName>
                              </SideTabContainers>
                            </Link>
                          </ul>
                        </div>
                      </>
                    )}
                  </Popup>
                </div>

                <Popup
                  modal
                  trigger={
                    <LogoutBtnSm
                      type="button"
                      // onClick={logoutButtonClicked}
                      isDarkMode={isDarkMode}
                    >
                      <FiLogOut
                        style={{
                          fontSize: '25px',
                          color: !isDarkMode ? '#181818' : '#ffffff',
                          //   color: 'red',
                        }}
                      />
                    </LogoutBtnSm>
                  }
                >
                  {close => (
                    <>
                      <div
                        style={{
                          backgroundColor: isDarkMode ? '#181818' : '#ffffff',
                          color: isDarkMode ? '#ffffff' : '#00306e',
                          fontFamily: 'Roboto',
                          width: '315px',
                          height: '155px',
                          borderRadius: '11px',
                          padding: '15px',
                        }}
                      >
                        <p
                          style={{
                            textAlign: 'center',
                            fontSize: '17px',
                            fontWeight: '500',
                          }}
                        >
                          Are you sure, you want to logout?
                        </p>
                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'center',
                            marginTop: '25px',
                          }}
                        >
                          <button
                            type="button"
                            style={{
                              backgroundColor: 'transparent',
                              width: '75px',
                              height: '35px',
                              border: '1px solid #909090',
                              color: '#909090',
                              borderRadius: '3px',
                              marginLeft: '15px',
                              outLine: 'none',
                            }}
                            onClick={() => close()}
                          >
                            Cancel
                          </button>
                          <button
                            type="button"
                            onClick={logoutButtonClicked}
                            style={{
                              backgroundColor: '#3b82f6',
                              width: '75px',
                              height: '35px',
                              border: '0px',
                              color: '#ffffff',
                              borderRadius: '3px',
                              marginLeft: '15px',
                              outline: 'none',
                            }}
                          >
                            Confirm
                          </button>
                        </div>
                      </div>
                    </>
                  )}
                </Popup>
              </SmallContainer>
            </NavContainer>
          </HeaderBg>
        )
      }}
    </NewContext.Consumer>
  )
}

export default Header
