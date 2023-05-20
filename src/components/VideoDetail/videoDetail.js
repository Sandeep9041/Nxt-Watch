import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import {BsDot} from 'react-icons/bs'
import ReactPlayer from 'react-player'
import {BiListPlus} from 'react-icons/bi'
import {formatDistanceToNow, formatDistanceToNowStrict} from 'date-fns'

import {
  AiOutlineLike,
  AiOutlineDislike,
  //   AiFillLike,
  //   AiFillDislike,
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
  VideoDetailLikeBtn,
  VideoDetailDislikeBtn,
  VideoDetailSaveBtn,
  VideoDetailSubscribers,
  VideoDetailDescription,
  VideoDetailName,
  FailureImage,
  FailureHeading,
  FailurePara,
  FailureButton,
  LoaderContainer,
  VideoLikeContainer,
  VideoPlayerContainer,
  VideoViewDateContainer,
  VideoDetailsContainerSm,
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
  const [saveBtn, setSaveBtn] = useState(false)

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
          setSaveBtn(prevState => !prevState)
          /* console.log(newList) */
        }
        const {
          // id,
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
              again.
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
              <VideoPlayerContainer>
                {' '}
                <ReactPlayer
                  url={videoUrl}

                  //   width="100%"
                  //   height="100%"
                />
              </VideoPlayerContainer>
              <div
                style={{
                  width: '90%',
                  marginTop: '0px',
                }}
              >
                <VideoDetailHeading isDarkMode={isDarkMode}>
                  {title}
                </VideoDetailHeading>
                <VideoDetailsContainerSm
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginTop: '0px',
                  }}
                >
                  <VideoViewDateContainer>
                    <VideoDetailPara isDarkMode={isDarkMode}>
                      {viewCount} views
                    </VideoDetailPara>
                    <VideoDetailPara
                      style={{
                        marginRight: '3px',
                        fontSize: '21px',
                        marginTop: '10px',
                      }}
                      isDarkMode={isDarkMode}
                    >
                      <BsDot />
                    </VideoDetailPara>{' '}
                    <VideoDetailPara isDarkMode={isDarkMode}>
                      {formatDistanceToNowStrict(new Date(publishedAt))}
                    </VideoDetailPara>
                  </VideoViewDateContainer>
                  <VideoLikeContainer>
                    <VideoDetailLikeBtn
                      isDarkMode={isDarkMode}
                      type="button"
                      onClick={changeLikeBtn}
                      data-testid="Like"
                      activeLikeBtn={activeLikeBtn}
                    >
                      <AiOutlineLike
                        style={{
                          fontSize: '17px',
                          marginRight: '3px',
                          marginTop: '-1px',
                          marginLeft: '-15px',
                        }}
                      />
                      Like
                    </VideoDetailLikeBtn>

                    <VideoDetailDislikeBtn
                      isDarkMode={isDarkMode}
                      type="button"
                      onClick={changeDislikeBtn}
                      activeDislikeBtn={activeDislikeBtn}
                    >
                      <AiOutlineDislike
                        style={{fontSize: '17px', marginRight: '3px'}}
                      />
                      Dislike
                    </VideoDetailDislikeBtn>

                    <VideoDetailSaveBtn
                      isDarkMode={isDarkMode}
                      type="button"
                      onClick={() => {
                        getVideoSaved(list)
                      }}
                      isSaved={isSaved}
                    >
                      <BiListPlus
                        style={{
                          fontSize: '20px',
                          marginRight: '3px',
                          marginTop: '-2px',
                        }}
                      />
                      {isSaved ? 'Saved' : 'Save'}
                    </VideoDetailSaveBtn>
                  </VideoLikeContainer>
                </VideoDetailsContainerSm>
              </div>
              <hr
                style={{
                  width: '90%',
                  marginBottom: '25px',
                  height: '2px',
                  backgroundColor: isDarkMode ? '#383838' : '#cbd5e1',
                  border: '0px',
                  marginTop: '0px',
                }}
              />
              <div
                style={{
                  display: 'flex',
                  width: '90%',
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
                </div>
              </div>
              <VideoDetailDescription isDarkMode={isDarkMode}>
                {description}
              </VideoDetailDescription>
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
