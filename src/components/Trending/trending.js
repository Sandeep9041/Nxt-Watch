import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {BsDot} from 'react-icons/bs'

import Cookies from 'js-cookie'
import {HiFire} from 'react-icons/hi'
import {formatDistanceToNow, formatDistanceToNowStrict} from 'date-fns'
import Loader from 'react-loader-spinner'

import NewContext from '../context'
import Header from '../Header/header'
import SideBar from '../sideBar'
import {
  TrendingContainerBg,
  TrendingLogoContainer,
  TrendingLogo,
  TrendingLogoHeading,
  TrendingContent,
  TrendingUl,
  TrendingLi,
  TrendingThumbnail,
  TrendingVideoContent,
  TrendingVideoTitle,
  TrendingVideoChannelName,
  TrendingVideoData,
  TrendingVideoViews,
  TrendingVideoDate,
  LoaderContainer,
  FailureImage,
  FailureHeading,
  FailurePara,
  FailureButton,
  SmallTrendingContent,
  SmallDotIcon,
} from './trendingCs'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

const Trending = () => {
  const [videoList, setVideoList] = useState([])
  const [apiStatus, setApiStatus] = useState(apiStatusConstants.initial)

  const getData = async () => {
    setApiStatus(apiStatusConstants.inProgress)
    const token = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/trending'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()
      const updatedData = data.videos.map(each => ({
        id: each.id,
        thumbnailUrl: each.thumbnail_url,
        publishedAt: each.published_at,
        title: each.title,
        viewCount: each.view_count,
        channel: {
          name: each.channel.name,
          profileImg: each.channel.profile_image_url,
        },
      }))
      setVideoList(updatedData)
      setApiStatus(apiStatusConstants.success)
    } else {
      setApiStatus(apiStatusConstants.failure)
    }
  }

  useEffect(() => {
    getData()
    return () => {
      setVideoList() // This worked for me
    }
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
              onClick={() => {
                getData()
              }}
            >
              Retry
            </FailureButton>
          </LoaderContainer>
        )

        const renderSuccessView = () => (
          <TrendingContainerBg isDarkMode={isDarkMode} data-testid="trending">
            <TrendingLogoContainer isDarkMode={isDarkMode}>
              <TrendingLogo isDarkMode={isDarkMode}>
                <HiFire style={{color: 'red', fontSize: '30px'}} />
              </TrendingLogo>
              <TrendingLogoHeading isDarkMode={isDarkMode}>
                Trending
              </TrendingLogoHeading>
            </TrendingLogoContainer>
            <TrendingContent isDarkMode={isDarkMode}>
              <TrendingUl>
                {videoList.map(each => {
                  const date = formatDistanceToNowStrict(
                    new Date(each.publishedAt),
                  )
                  return (
                    <Link
                      style={{textDecoration: 'none'}}
                      to={`/videos/${each.id}`}
                      key={each.id}
                    >
                      <TrendingLi>
                        <TrendingThumbnail
                          src={each.thumbnailUrl}
                          alt="video thumbnail"
                        />
                        <TrendingVideoContent>
                          <TrendingVideoTitle isDarkMode={isDarkMode}>
                            {each.title}
                          </TrendingVideoTitle>
                          <SmallTrendingContent>
                            <TrendingVideoChannelName isDarkMode={isDarkMode}>
                              {each.channel.name}
                            </TrendingVideoChannelName>
                            <SmallDotIcon>
                              <TrendingVideoViews
                                style={{
                                  fontSize: '21px',
                                  marginTop: '7px',
                                }}
                                isDarkMode={isDarkMode}
                              >
                                <BsDot />
                              </TrendingVideoViews>{' '}
                            </SmallDotIcon>
                            <TrendingVideoData>
                              <TrendingVideoViews isDarkMode={isDarkMode}>
                                {each.viewCount} views
                              </TrendingVideoViews>
                              <TrendingVideoViews
                                style={{
                                  fontSize: '21px',
                                  marginTop: '7px',
                                }}
                                isDarkMode={isDarkMode}
                              >
                                <BsDot />
                              </TrendingVideoViews>{' '}
                              <TrendingVideoDate isDarkMode={isDarkMode}>
                                {date} ago
                              </TrendingVideoDate>
                            </TrendingVideoData>
                          </SmallTrendingContent>
                        </TrendingVideoContent>
                      </TrendingLi>
                    </Link>
                  )
                })}
              </TrendingUl>
            </TrendingContent>
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
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
              }}
            >
              <SideBar style={{width: '30%'}} />
              {renderView()}
            </div>
          </>
        )
      }}
    </NewContext.Consumer>
  )
}
export default Trending
