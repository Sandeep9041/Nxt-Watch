import {useState, useEffect} from 'react'
import {Link, useLocation} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {HiFire} from 'react-icons/hi'
import {BiListPlus} from 'react-icons/bi'
import '../App.css'

import {
  SideTab,
  SideTabContainers,
  SideTabName,
  SideIconContainers,
  SideIconImage,
  SideIconHeading,
  SideIconPara,
  IconNew,
} from './Header/headerCs'
import NewContext from './context'

const SideBar = () => {
  const location = useLocation()
  console.log(location.pathname)

  const [isActive, setIsActive] = useState(false)
  const [activeId, setActiveId] = useState(location.pathname)
  return (
    <NewContext.Consumer>
      {value => {
        const {isDarkMode} = value

        return (
          <SideTab isDarkMode={isDarkMode}>
            <ul style={{padding: '0px'}}>
              <Link to="/" style={{textDecoration: 'none', color: '#ffffff'}}>
                <SideTabContainers
                  type="button"
                  isDarkMode={isDarkMode}
                  id="home"
                  isActive={activeId === '/'}
                >
                  <IconNew isDarkMode={isDarkMode} isActive={activeId === '/'}>
                    {' '}
                    <AiFillHome
                      style={{
                        // color: isDarkMode ? '#ffffff' : '#000000',
                        fontSize: '21px',
                        marginRight: '5px',
                      }}
                    />
                  </IconNew>

                  <SideTabName
                    isDarkMode={isDarkMode}
                    isActive={activeId === '/'}
                  >
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
                  id="trending"
                  isActive={activeId === '/trending'}
                >
                  <IconNew
                    isDarkMode={isDarkMode}
                    isActive={activeId === '/trending'}
                  >
                    <HiFire
                      style={{
                        //   color: isDarkMode ? '#ffffff' : '#000000',

                        fontSize: '21px',
                        marginRight: '5px',
                      }}
                    />
                  </IconNew>
                  <SideTabName
                    isDarkMode={isDarkMode}
                    isActive={activeId === '/trending'}
                  >
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
                  id="gaming"
                >
                  <IconNew
                    isDarkMode={isDarkMode}
                    isActive={activeId === '/gaming'}
                  >
                    <SiYoutubegaming
                      style={{
                        // color: isDarkMode ? '#ffffff' : '#000000',
                        fontSize: '21px',
                        marginRight: '5px',
                      }}
                    />
                  </IconNew>

                  <SideTabName
                    isDarkMode={isDarkMode}
                    isActive={activeId === '/gaming'}
                  >
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
                  id="savedVideo"
                  isActive={activeId === '/saved-videos'}
                >
                  <IconNew
                    isDarkMode={isDarkMode}
                    isActive={activeId === '/saved-videos'}
                  >
                    <BiListPlus
                      style={{
                        // color: isDarkMode ? '#ffffff' : '#000000',
                        fontSize: '21px',
                        marginRight: '5px',
                      }}
                    />
                  </IconNew>

                  <SideTabName
                    isDarkMode={isDarkMode}
                    isActive={activeId === '/saved-videos'}
                  >
                    Saved videos
                  </SideTabName>
                </SideTabContainers>
              </Link>
            </ul>
            <ul
              style={{
                display: 'flex',
                flexDirection: 'column',
                paddingInlineStart: '0px',
              }}
            >
              <SideIconHeading isDarkMode={isDarkMode}>
                CONTACT US
              </SideIconHeading>
              <SideIconContainers>
                <SideIconImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  alt="facebook logo"
                />
                <SideIconImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  alt="twitter logo"
                />
                <SideIconImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  alt="linked in logo"
                />
              </SideIconContainers>
              <SideIconPara isDarkMode={isDarkMode}>
                Enjoy! Now to see your channels and recommendations!
              </SideIconPara>
            </ul>
          </SideTab>
        )
      }}
    </NewContext.Consumer>
  )
}
export default SideBar
