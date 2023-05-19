import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import Loader from 'react-loader-spinner'

import ReactPlayer from 'react-player'
import {BiListPlus} from 'react-icons/bi'

import {
  AiOutlineLike,
  AiOutlineDislike,
  AiFillLike,
  AiFillDislike,
} from 'react-icons/ai'
import Cookies from 'js-cookie'
import Header from '../Header/header'
import SideBar from '../sideBar'
import NewContext from '../context'
import {
  VideoDetailsContainers,
  VideoContainers,
  VideoDetailHeading,
  VideoDetailPara,
  VideoDetailPara1,
  VideoDetailSubscribers,
  VideoDetailDescription,
  VideoDetailName,
  FailureImage,
  FailureHeading,
  FailurePara,
  FailureButton,
  LoaderContainer,
} from './videoDetailCs'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

const VideoDetails = () => {
  const params = useParams()
  const [list, setList] = useState({})
  const [channel, setChannel] = useState({})
  const [apiStatus, setApiStatus] = useState(apiStatusConstants.initial)
  const [activeLikeBtn, setActiveLikeBtn] = useState(false)
  const [activeDislikeBtn, setActiveDislikeBtn] = useState(false)

  const getData = async () => {
    setApiStatus(apiStatusConstants.inProgress)

    const {id} = params
    const token = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const data2 = await response.json()
      const data = data2.video_details
      const updatedData = {
        id: data.id,
        thumbnailUrl: data.thumbnail_url,
        publishedAt: data.published_at,
        title: data.title,
        viewCount: data.view_count,
        videoUrl: data.video_url,
        description: data.description,

        channel: {
          name: data.channel.name,
          profileImg: data.channel.profile_image_url,
          subscriberCount: data.channel.subscriber_count,
        },
      }
      setList(updatedData)
      setChannel(updatedData.channel)
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
        const {
          isDarkMode,
          getSavedValue,
          setIsSaved,
          isSaved,
          checkSaved,
          setSavedId,
        } = value
        const getVideoSaved = newList => {
          getSavedValue(newList)
          /* console.log(newList) */
        }
        const {
          id,
          thumbnailUrl,
          publishedAt,
          title,
          viewCount,
          description,
          videoUrl,
        } = list

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
              We are having some trouble to complete your request. Please try
              again
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
        const changeLikeBtn = () => {
          setActiveLikeBtn(prevActiveLikeBtn => !prevActiveLikeBtn)
          setActiveDislikeBtn(false)
        }
        const changeDislikeBtn = () => {
          setActiveDislikeBtn(prevActiveDislikeBtn => !prevActiveDislikeBtn)
          setActiveLikeBtn(false)
        }

        const renderSuccessView = () => (
          <VideoDetailsContainers
            isDarkMode={isDarkMode}
            data-testid="videoItemDetails"
          >
            <VideoContainers isDarkMode={isDarkMode}>
              <ReactPlayer url={videoUrl} width="80%" height="65vh" />
              <div
                style={{
                  width: '80%',
                  marginTop: '0px',
                }}
              >
                <VideoDetailHeading isDarkMode={isDarkMode}>
                  {title}
                </VideoDetailHeading>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginTop: '0px',
                  }}
                >
                  <div
                    style={{
                      width: '25%',
                      display: 'flex',
                      marginTop: '-5px',
                    }}
                  >
                    <VideoDetailPara isDarkMode={isDarkMode}>
                      {viewCount} views
                    </VideoDetailPara>
                    <VideoDetailPara isDarkMode={isDarkMode}>
                      {publishedAt}
                    </VideoDetailPara>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      width: '33%',
                      backgroundColor: 'red',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        width: '25%',
                        fontSize: '15px',
                        backgroundColor: 'green',
                      }}
                    >
                      <AiOutlineLike
                        style={{color: isDarkMode ? '#909090' : '#64748b'}}
                      />
                      <VideoDetailPara1
                        isDarkMode={isDarkMode}
                        type="button"
                        onClick={changeLikeBtn}
                        style={{
                          color: activeLikeBtn ? '#2563eb' : '#64748b',
                        }}
                        data-testid="Like"
                      >
                        Like
                      </VideoDetailPara1>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        width: '25%',
                        fontSize: '15px',
                        backgroundColor: 'green',
                      }}
                    >
                      <AiOutlineDislike
                        style={{
                          color: isDarkMode ? '#909090' : '#64748b',
                          marginRight: '0px',
                        }}
                      />
                      <VideoDetailPara1
                        isDarkMode={isDarkMode}
                        type="button"
                        onClick={changeDislikeBtn}
                        style={{
                          color: activeDislikeBtn ? '#2563eb' : '#64748b',
                        }}
                      >
                        Dislike
                      </VideoDetailPara1>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        width: '25%',
                        fontSize: '15px',
                        backgroundColor: 'green',
                      }}
                    >
                      <BiListPlus
                        style={{color: isDarkMode ? '#909090' : '#64748b'}}
                      />
                      <VideoDetailPara1
                        isDarkMode={isDarkMode}
                        style={{color: isSaved ? '#000000' : 'pink'}}
                        type="button"
                        onClick={() => {
                          getVideoSaved(list)
                        }}
                      >
                        {isSaved ? 'Saved' : 'Save'}
                      </VideoDetailPara1>
                    </div>
                  </div>
                </div>
              </div>
              <hr
                style={{
                  width: '80%',
                  marginBottom: '25px',
                  height: '2px',
                  backgroundColor: isDarkMode ? '#383838' : '#cbd5e1',
                  border: '0px',
                }}
              />
              <div
                style={{
                  display: 'flex',
                  width: '80%',
                }}
              >
                <img
                  src={channel.profileImg}
                  alt="channel logo"
                  style={{width: '40px', height: '40px'}}
                />
                <div style={{marginTop: '-10px', marginLeft: '15px'}}>
                  <VideoDetailName isDarkMode={isDarkMode}>
                    {channel.name}
                  </VideoDetailName>
                  <VideoDetailSubscribers isDarkMode={isDarkMode}>
                    {channel.subscriberCount} subscribers
                  </VideoDetailSubscribers>
                  <VideoDetailDescription isDarkMode={isDarkMode}>
                    {description}
                  </VideoDetailDescription>
                </div>
              </div>
            </VideoContainers>
          </VideoDetailsContainers>
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

export default VideoDetails
