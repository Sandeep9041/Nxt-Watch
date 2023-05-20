import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react'
import {formatDistanceToNow, formatDistanceToNowStrict} from 'date-fns'
import {BiListPlus} from 'react-icons/bi'
import {BsDot} from 'react-icons/bs'
import Header from '../Header/header'
import SideBar from '../sideBar'
import NewContext from '../context'
import {
  SavedBg,
  TrendingLogoContainer,
  TrendingLogo,
  TrendingLogoHeading,
  TrendingUl,
  TrendingLi,
  TrendingThumbnail,
  TrendingVideoContent,
  TrendingVideoTitle,
  TrendingVideoChannelName,
  TrendingVideoViews,
  TrendingVideoDate,
  TrendingVideoData,
  FailureImage,
  FailureHeading,
  FailurePara,
  SavedVideoContainer,
  FailureBox,
  TitleSmContainer,
  ChannelImg,
  DotSm,
  Dot,
} from './indexCs'

const SavedVideo = () => (
  <NewContext.Consumer>
    {value => {
      const {isDarkMode, savedList} = value
      console.log(savedList)
      return (
        <>
          <Header />
          <div style={{display: 'flex'}}>
            <SideBar />
            <SavedBg data-testid="savedVideos" isDarkMode={isDarkMode}>
              {savedList.length > 0 ? (
                <>
                  <TrendingLogoContainer isDarkMode={isDarkMode}>
                    <TrendingLogo isDarkMode={isDarkMode}>
                      <BiListPlus style={{color: 'red', fontSize: '30px'}} />
                    </TrendingLogo>
                    <TrendingLogoHeading isDarkMode={isDarkMode}>
                      Saved Videos
                    </TrendingLogoHeading>
                  </TrendingLogoContainer>
                  <TrendingUl>
                    {savedList.map(each => (
                      <Link
                        to={`/videos/${each.id}`}
                        key={each.id}
                        style={{textDecoration: 'none'}}
                      >
                        <TrendingLi>
                          <TrendingThumbnail
                            alt="video thumbnail"
                            src={each.thumbnailUrl}
                          />
                          <TrendingVideoContent>
                            <TitleSmContainer>
                              <ChannelImg src={each.channel.profileImg} />
                              <TrendingVideoTitle>
                                {each.title}
                              </TrendingVideoTitle>
                            </TitleSmContainer>

                            <SavedVideoContainer>
                              <TrendingVideoChannelName>
                                {each.channel.name}{' '}
                              </TrendingVideoChannelName>
                              <DotSm isDarkMode={isDarkMode}>
                                <BsDot />
                              </DotSm>{' '}
                              <TrendingVideoData>
                                <TrendingVideoViews>
                                  {each.viewCount} views
                                </TrendingVideoViews>
                                <Dot isDarkMode={isDarkMode}>
                                  <BsDot />
                                </Dot>{' '}
                                <TrendingVideoDate>
                                  {formatDistanceToNowStrict(
                                    new Date(each.publishedAt),
                                  )}
                                </TrendingVideoDate>
                              </TrendingVideoData>
                            </SavedVideoContainer>
                          </TrendingVideoContent>
                        </TrendingLi>
                      </Link>
                    ))}
                  </TrendingUl>
                </>
              ) : (
                <FailureBox isDarkMode={isDarkMode}>
                  <FailureImage
                    alt="no saved videos"
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                  />
                  <FailureHeading isDarkMode={isDarkMode}>
                    No saved videos found
                  </FailureHeading>
                  <FailurePara isDarkMode={isDarkMode}>
                    Save your videos by clicking a button
                  </FailurePara>
                </FailureBox>
              )}
            </SavedBg>
          </div>
        </>
      )
    }}
  </NewContext.Consumer>
)

export default SavedVideo
