import styled from 'styled-components'

export const VideoDetailsContainers = styled.div`
  background-color: ${props => (props.isDarkMode ? '#0f0f0f  ' : '#f9f9f9  ')};
  height: 115vh;
  font-family: 'Roboto';
  overflow-y: scroll;
  width: 70%;
  flex-grow: 1;
  padding-block: 25px;
`
export const VideoContainers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const VideoDetailHeading = styled.p`
  font-size: 15px;
  width: 85%;
  color: ${props => (props.isDarkMode ? '#d7dfe9 ' : ' #475569  ')};
  font-weight: 500;
  margin-block: 25px;
  text-align: left;
`
export const VideoDetailPara = styled.p`
  color: ${props => (props.isDarkMode ? '#909090 ' : '#475569')};
  font-size: 13px;
  opacity: 0.9;
  margin-bottom: 0px;
  margin-right: 15px;
`
export const VideoDetailPara1 = styled.button`
  color: ${props => (props.isDarkMode ? '#909090 ' : '#475569')};
  font-size: 13px;
  margin-bottom: 7px;
  margin-top: 10px;
  margin-left: 5px;
  background-color: transparent;
  border: 0px;
`
export const VideoDetailName = styled.p`
  color: ${props => (props.isDarkMode ? '#d7dfe9 ' : '#475569')};
  font-size: 14px;
  margin-bottom: 7px;
  margin-top: 10px;
  margin-left: 5px;
`
export const VideoDetailSubscribers = styled.p`
  color: ${props => (props.isDarkMode ? '#909090 ' : '#475569')};
  font-size: 12px;
  margin-bottom: 7px;
  margin-top: 10px;
  margin-left: 5px;
  opacity: 0.9;
`
export const VideoDetailDescription = styled.p`
  color: ${props => (props.isDarkMode ? '#d7dfe9 ' : '#475569')};
  font-size: 12px;
  margin-bottom: 7px;
  margin-top: 10px;
  margin-left: 5px;
  opacity: 1;
  line-height: 1.7;
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
  text-align: center;
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

export const LoaderContainer = styled.div`
  width: 100%;
  height: 115vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  //   justify-content: center;
  background-color: ${props => (props.isDarkMode ? '#0f0f0f ' : '#f9f9f9 ')};
`
export default VideoDetailsContainers
