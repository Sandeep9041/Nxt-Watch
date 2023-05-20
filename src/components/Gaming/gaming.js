import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import {SiYoutubegaming} from 'react-icons/si'
import Loader from 'react-loader-spinner'

import NewContext from '../context'
import Header from '../Header/header'
import SideBar from '../sideBar'
import {
  TrendingContainerBg,
  TrendingLogoContainer,
  TrendingLogo,
  TrendingLogoHeading,
  TrendingVideoContent,
  TrendingVideoData,
} from '../Trending/trendingCs'

import {
  GamingUl,
  GamingLi,
  GamingThumbnail,
  GamingTitle,
  GamingView,
  GamingContent,
  LoaderContainer,
  FailureImage,
  FailureHeading,
  FailurePara,
  FailureButton,
} from './gamingCs'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

const Gaming = () => {
  const [videoList, setVideoList] = useState([])
  const [apiStatus, setApiStatus] = useState(apiStatusConstants.initial)

  const getData = async () => {
    setApiStatus(apiStatusConstants.inProgress)

    const token = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()
      //   console.log(data)
      const updatedData = data.videos.map(each => ({
        id: each.id,
        thumbnailUrl: each.thumbnail_url,
        title: each.title,
        viewCount: each.view_count,
      }))
      setVideoList(updatedData)
      setApiStatus(apiStatusConstants.success)
    } else {
      setApiStatus(apiStatusConstants.failure)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <NewContext.Consumer>
      {value => {
        const {isDarkMode} = value

        const renderLoadingView = () => (
          <LoaderContainer isDarkMode={isDarkMode} data-testid="loader">
            <Loader
              type="ThreeDots"
              color="#64748b"
              height="50"
              width="50"
              marginTop="25px"
            />
          </LoaderContainer>
        )

        const renderFailureView = () => (
          <LoaderContainer isDarkMode={isDarkMode}>
            <FailureImage
              src={
                isDarkMode
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
              }
              alt="failure view"
            />
            <FailureHeading isDarkMode={isDarkMode}>
              Oops! Something Went Wrong
            </FailureHeading>
            <FailurePara isDarkMode={isDarkMode}>
              We are having some trouble to complete your request.
            </FailurePara>
            <FailurePara isDarkMode={isDarkMode}>Please try again.</FailurePara>
            <FailureButton
              isDarkMode={isDarkMode}
              type="button"
              onClick={() => {
                getData()
              }}
            >
              Retry
            </FailureButton>
          </LoaderContainer>
        )

        const renderSuccessView = () => (
          <TrendingContainerBg isDarkMode={isDarkMode} data-testid="gaming">
            <TrendingLogoContainer isDarkMode={isDarkMode}>
              <TrendingLogo isDarkMode={isDarkMode}>
                <SiYoutubegaming style={{color: 'red', fontSize: '30px'}} />
              </TrendingLogo>
              <TrendingLogoHeading isDarkMode={isDarkMode}>
                Gaming
              </TrendingLogoHeading>
            </TrendingLogoContainer>
            <div style={{width: '100%'}}>
              <GamingUl isDarkMode={isDarkMode}>
                {videoList.map(each => (
                  <GamingLi key={each.id}>
                    <Link
                      style={{
                        textDecoration: 'none',
                        //   width: '30%',
                        //   backgroundColor: 'red',
                      }}
                      to={`/videos/${each.id}`}
                    >
                      <GamingThumbnail
                        src={each.thumbnailUrl}
                        alt="video thumbnail"
                      />
                      <GamingTitle isDarkMode={isDarkMode}>
                        {each.title}
                      </GamingTitle>
                      <TrendingVideoData>
                        <GamingView isDarkMode={isDarkMode}>
                          {each.viewCount} Watching Worldwide
                        </GamingView>
                      </TrendingVideoData>
                    </Link>
                  </GamingLi>
                ))}
              </GamingUl>
            </div>
          </TrendingContainerBg>
        )

        const renderView = () => {
          switch (apiStatus) {
            case 'SUCCESS':
              return renderSuccessView()
            case 'IN_PROGRESS':
              return renderLoadingView()
            case 'FAILURE':
              return renderFailureView()
            default:
              return null
          }
        }

        return (
          <>
            <Header />
            <div style={{display: 'flex'}}>
              <SideBar />
              {renderView()}
            </div>
          </>
        )
      }}
    </NewContext.Consumer>
  )
}
export default Gaming
