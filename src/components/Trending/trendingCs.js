// TrendingContainerBg,
//   TrendingLogoContainer,
//   TrendingLogo,
//   TrendingLogoHeading,
//   TrendingContent,
//   TrendingUl,
//   TrendingThumbnail,
//   TrendingVideoContent,
//   TrendingVideoTitle,
//   TrendingVideoChannelName,
//   TrendingVideoData,
//   TrendingVideoViews,
//   TrendingVideoDate
// ,TrendingLi
import styled from 'styled-components'

export const TrendingContainerBg = styled.div`
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
export const TrendingContent = styled.div`
  background-color: ${props => (props.isDarkMode ? '#000000  ' : '#f9f9f9  ')};
  padding-inline: 15px;
  padding-block: 35px;
  margin-top: 0px;
  //   border: 15px solid red;
  @media (max-width: 500px) {
    padding: 15px;
    margin-top: 75px;
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
  margin-bottom: 25px;
  @media (max-width: 500px) {
    flex-direction: column;
    padding: 0px;
  }
`

export const TrendingThumbnail = styled.img`
  width: 40%;
  height: 175px;
  @media (max-width: 500px) {
    width: 100%;
  }
  @media ((max-width: 850px) and (min-width: 501px)) {
    width: 50%;
  }
  @media (min-width: 1150px) {
    width: 30%;
  }
`
export const TrendingVideoContent = styled.div`
  width: 60%;
  margin-left: 25px;
  @media ((max-width: 850px) and (min-width: 501px)) {
    width: 50%;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
`
export const TrendingVideoTitle = styled.p`
  color: ${props => (props.isDarkMode ? '#d7dfe9' : '#1e293b')};
  font-size: 19px;
  line-height: 1.5;

  font-weight: 500;
  margin-bottom: 0px;
  @media ((max-width: 850px) and (min-width: 501px)) {
    font-size: 18px;
    line-height: 1.5;
  }
  @media ((min-width: 1100px)) {
    font-size: 23px;
  }
`
export const SmallTrendingContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media ((max-width: 501px)) {
    flex-direction: row;
    align-items: center;
    // justify-content: space-around;
  }
`
export const TrendingVideoChannelName = styled.p`
  color: ${props => (props.isDarkMode ? '#909090' : '#64748b')};
  margin-bottom: 0px;
  margin-top: 10px;
  @media ((max-width: 850px) and (min-width: 501px)) {
    font-size: 15px;
  }
  @media ((max-width: 501px)) {
    margin-top: 0px;
  }
`
export const TrendingVideoData = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0px;
  @media ((max-width: 850px) and (min-width: 501px)) {
    font-size: 13px;
  }
`
export const SmallDotIcon = styled.div`
  display: none;

  @media ((max-width: 500px)) {
    display: flex;
    font-size: 13px;
  }
`
export const TrendingVideoViews = styled.p`
  color: ${props => (props.isDarkMode ? '#909090' : '#64748b')};
  margin: 0px;
`
export const TrendingVideoDate = styled.p`
  color: ${props => (props.isDarkMode ? '#909090' : '#64748b')};
`
export const LoaderContainer = styled.div`
  width: 100%;
  height: 115vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => (props.isDarkMode ? '#0f0f0f ' : '#f9f9f9 ')};
  padding: 15px;
`

export const FailureImage = styled.img`
  width: 375px;
  height: 315px;
  margin-top: 25px;
  @media (max-width: 576px) {
    width: 165px;
    height: 115px;
  }
`

export const FailureHeading = styled.h1`
  color: ${props => (props.isDarkMode ? '#ffffff ' : ' #00306e  ')};
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 21px;
`
export const FailurePara = styled.p`
  color: ${props => (props.isDarkMode ? '#7e858e ' : ' #00306e  ')};
  opacity: 0.9;
  margin-top: 0px;
  margin-bottom: 0px;
  font-family: 'Roboto';
  font-size: 16px;
  text-align: center;
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

export default TrendingContainerBg
