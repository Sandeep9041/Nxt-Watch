import Header from '../Header/header'
import SideBar from '../sideBar'
import NewContext from '../context'
import {FailureHeading, FailurePara, FailureImage} from './notfoundcs'

const NotFound = () => (
  <NewContext.Consumer>
    {value => {
      const {isDarkMode} = value
      return (
        <>
          <Header />
          <div style={{display: 'flex'}}>
            <SideBar />
            <div
              style={{
                width: '100%',
                backgroundColor: isDarkMode ? '#000000' : '#ffffff',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                // justifyContent: 'center',
              }}
            >
              <FailureImage
                src={
                  isDarkMode
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
                }
                alt="not found"
                // style={{
                //   minWidth: '400px',
                //   width: '55%',
                //   height: '375px',
                //   marginTop: '55px',
                // }}
              />
              <FailureHeading style={{fontSize: '35px'}}>
                Page Not Found
              </FailureHeading>
              <FailurePara style={{width: '75%', lineHeight: '1.5em'}}>
                we are sorry, the page you requested could not be found.
              </FailurePara>
            </div>
          </div>
        </>
      )
    }}
  </NewContext.Consumer>
)
export default NotFound
