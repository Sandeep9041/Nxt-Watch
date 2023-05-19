import {useState, useEffect} from 'react'
import Popup from 'reactjs-popup'
import {formatDistanceToNow, formatDistanceToNowStrict} from 'date-fns'
import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import {BsDot} from 'react-icons/bs'
import Cookies from 'js-cookie'
import {ImCross} from 'react-icons/im'
import {BiSearch} from 'react-icons/bi'
import NewContext from '../context'
import Header from '../Header/header'
import SideBar from '../sideBar'
import {
  PopContainers,
  PopupLogo,
  PopupHeading,
  PopupButton,
  CrossButton,
  RightSideContainers,
  SearchInput,
  SearchButton,
  SearchContainer,
  RightSideContent,
  HomeContentUl,
  HomeContentli,
  HomeVideoTitle,
  HomeVideoChannelImage,
  HomeVideoChannelName,
  HomeVideoThumbnailUrl,
  LoaderContainer,
  FailureImage,
  FailureHeading,
  FailurePara,
  FailureButton,
} from './homeCs'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

const Home = () => {
  const [videoList, setVideoList] = useState([])
  const [showPopup, setShowPopup] = useState(true)
  const [apiStatus, setApiStatus] = useState(apiStatusConstants.initial)
  const [searchInput, setSearchInput] = useState('')
  const [searchValue, setSearchValue] = useState('')

  const changeSearchInput = e => {
    setSearchInput(e.target.value)
  }

  const getData = async () => {
    setApiStatus(apiStatusConstants.inProgress)
    const token = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    // console.log(url)

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

  const setSearchValueInput = () => {
    // setSearchValue(searchInput)

    getData()
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <NewContext.Consumer>
      {value => {
        const {isDarkMode} = value

        const renderSuccessView = () => (
          <HomeContentUl>
            {videoList.length > 0 ? (
              videoList.map(each => {
                const date = formatDistanceToNowStrict(
                  new Date(each.publishedAt),
                )

                return (
                  <HomeContentli key={each.id}>
                    <Link
                      to={`/videos/${each.id}`}
                      style={{textDecoration: 'none'}}
                    >
                      <HomeVideoThumbnailUrl
                        src={each.thumbnailUrl}
                        alt="video thumbnail"
                      />
                      <div
                        style={{
                          display: 'flex',
                          alignItem: 'center',
                          justifyContent: 'space-between',
                        }}
                      >
                        <HomeVideoChannelImage
                          src={each.channel.profileImg}
                          alt="channel logo"
                        />
                        <div>
                          <HomeVideoTitle isDarkMode={isDarkMode}>
                            {each.title}
                          </HomeVideoTitle>
                          <HomeVideoChannelName isDarkMode={isDarkMode}>
                            {each.channel.name}
                          </HomeVideoChannelName>
                          <div style={{display: 'flex', alignItem: 'center'}}>
                            <HomeVideoChannelName
                              style={{marginRight: '0px'}}
                              isDarkMode={isDarkMode}
                            >
                              {each.viewCount} views
                            </HomeVideoChannelName>
                            <HomeVideoChannelName
                              style={{
                                marginRight: '0px',
                                fontSize: '21px',
                                marginTop: '3px',
                              }}
                              isDarkMode={isDarkMode}
                            >
                              <BsDot />
                            </HomeVideoChannelName>{' '}
                            <HomeVideoChannelName isDarkMode={isDarkMode}>
                              {date} ago
                            </HomeVideoChannelName>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </HomeContentli>
                )
              })
            ) : (
              <div>
                <FailureImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                  alt="no videos"
                />
                <FailureHeading>No Search results found</FailureHeading>
                <FailurePara>
                  Try Different key words or remove search filter
                </FailurePara>
                <FailureButton
                  type="button"
                  onClick={() => {
                    setSearchInput('')
                  }}
                >
                  Retry
                </FailureButton>
              </div>
            )}
          </HomeContentUl>
        )

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
              }}
            >
              <SideBar />
              <RightSideContainers data-testid="home" isDarkMode={isDarkMode}>
                {showPopup && (
                  <PopContainers
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                    }}
                    data-testid="banner"
                  >
                    <div>
                      <PopupLogo
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                        alt="nxt watch logo"
                      />
                      <PopupHeading>
                        Buy NXT Watch Premium prepaid plans with UPI
                      </PopupHeading>
                      <PopupButton>GET IT NOW</PopupButton>
                    </div>
                    <CrossButton
                      type="button"
                      data-testid="close"
                      onClick={() => setShowPopup(false)}
                    >
                      <ImCross />
                    </CrossButton>
                  </PopContainers>
                )}

                <RightSideContent>
                  <SearchContainer isDarkMode={isDarkMode}>
                    <SearchInput
                      type="search"
                      placeholder="Search"
                      value={searchInput}
                      onChange={changeSearchInput}
                    />
                    <SearchButton
                      type="button"
                      data-testid="searchButton"
                      isDarkMode={isDarkMode}
                      onClick={setSearchValueInput}
                    >
                      <BiSearch style={{fontSize: '15px', opacity: '0.7'}} />
                    </SearchButton>
                  </SearchContainer>
                  {renderView()}
                </RightSideContent>
              </RightSideContainers>
            </div>
          </>
        )
      }}
    </NewContext.Consumer>
  )
}
export default Home
