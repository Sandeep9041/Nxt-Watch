import styled from 'styled-components'

export const SavedBg = styled.div`
  background-color: ${props => (props.isDarkMode ? '#0f0f0f  ' : '#f9f9f9  ')};
  height: 115vh;
  font-family: 'Roboto';
  overflow-y: scroll;
  width: 70%;
  flex-grow: 1;
`
export const TrendingLogoContainer = styled.div`
  background-color: ${props => (props.isDarkMode ? '#0f0f0f  ' : '#f1f1f1  ')};
  //   height: 25vh;
  display: flex;
  align-items: center;
  padding: 55px 35px 55px 35px;
  margin-bottom: 0px;
  @media (max-width: 576px) {
    padding: 18px 30px 18px 30px;
  }
`
export const TrendingLogo = styled.div`
  background-color: ${props => (props.isDarkMode ? '#000000  ' : '#e2e8f0  ')};
  width: 75px;
  height: 75px;
  border-radius: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  @media (max-width: 576px) {
    margin-right: 11px;
    width: 55px;
    height: 55px;
  }
`
export const TrendingLogoHeading = styled.h1`
  color: ${props => (props.isDarkMode ? '#ffffff' : '#1e293b')};
  @media (max-width: 576px) {
    font-size: 25px;
  }
`
export const TrendingUl = styled.ul`
  width: 100%;
  padding: 0px;
  margin-top: 0px;
`
export const TrendingLi = styled.li`
  display: flex;
  list-style: none;
  padding: 25px;
  margin-bottom: 25px;
  @media (max-width: 576px) {
    flex-direction: column;
    padding: 0px;
  }
`
export const TrendingThumbnail = styled.img`
  width: 375px;
  //   max-width: 40%;
  height: 40%;
  @media (max-width: 576px) {
    width: 100%;
  }
`
export const TrendingVideoContent = styled.div`
  margin-left: 25px;
  @media (max-width: 576px) {
    // background-color: red;
  }
`
export const TrendingVideoTitle = styled.p`
  color: ${props => (props.isDarkMode ? '#d7dfe9' : '#1e293b')};

  font-size: 23px;
  font-weight: 500;
  margin-bottom: 0px;
  @media (max-width: 576px) {
    font-size: 15px;
    width: 80%;
    line-height: 1.7;
  }
`
export const TrendingVideoChannelName = styled.p`
  color: ${props => (props.isDarkMode ? '#909090' : '#64748b')};
  margin-bottom: 0px;
  margin-top: 10px;
  @media (max-width: 576px) {
    margin-top: 12px;
  }
`

export const TrendingVideoData = styled.div`
  display: flex;
  margin-top: 0px;
`
export const TrendingVideoViews = styled.p`
  color: ${props => (props.isDarkMode ? '#909090' : '#64748b')};
`
export const TrendingVideoDate = styled.p`
  color: ${props => (props.isDarkMode ? '#909090' : '#64748b')};
`

export const FailureImage = styled.img`
  width: 415px;
  height: 315px;
  margin-top: 25px;
  @media (max-width: 576px) {
    width: 85%;
    height: 215px;
  }
`

export const FailureHeading = styled.h1`
  color: ${props => (props.isDarkMode ? '#ffffff ' : ' #000000')};
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 21px;
  text-align: center;
  margin-top: 75px;
`
export const FailurePara = styled.p`
  color: ${props => (props.isDarkMode ? '#ffffff ' : ' #000000')};
  opacity: 0.9;
  margin-top: 15px;
  margin-bottom: 0px;
  font-family: 'Roboto';
  font-size: 16px;
  text-align: center;
  font-weight: 400;
`
export const FailureButton = styled.button`
  background-color: #4f46e5;
  width: 80px;
  height: 35px;
  font-family: 'Roboto';
  color: #ffffff;
  border: 0px;
  border-radius: 3px;
  font-size: 11px;
  margin-top: 15px;
`
export const FailureBox = styled.div`
  margin: 0px;
  background-color: ${props =>
    props.isDarkMode ? '#000000  ' : 'transparent  '};
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 115vh;
`

export const SavedVideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 576px) {
    flex-direction: row;
    margin-left: 51px;
    width: 80%;
    font-size: 13px;
    // background-color: red;
  }
`
export const TitleSmContainer = styled.div`
  display: flex;
  align-items: center;
`
export const ChannelImg = styled.img`
  display: none;
  @media (max-width: 576px) {
    display: flex;
    width: 35px;
    height: 35px;
    margin-right: 15px;
  }
`
export const DotSm = styled.p`
  margin-right: 3px;
  font-size: 21px;
  margin-top: 15px;
  color: ${props => (props.isDarkMode ? '#909090' : '#64748b')};
  display: none;
  @media (max-width: 576px) {
    display: flex;
    margin-top: 10px;
  }
`
export const Dot = styled.div`
  margin-right: 3px;
  font-size: 21px;
  margin-top: 15px;
  color: ${props => (props.isDarkMode ? '#909090' : '#64748b')};
  @media (max-width: 576px) {
    margin-top: 10px;
  }
`
export default SavedBg
