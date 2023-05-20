import styled from 'styled-components'

export const HomeBg = styled.div`
  background-color: red;
  min-height: 100vh;
  display: flex;
`
export const PopContainers = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  height: 35vh;
  background-size: cover;
  width: 100%;
  padding-inline: 25px;
  padding-block: 25px;
  @media (max-width: 576px) {
    padding: 15px;
    // padding-top: 15px;
  }
`
export const PopupLogo = styled.img`
  width: 175px;
  height: 37px;
`
export const PopupHeading = styled.p`
  color: #00306e;
  font-family: 'Roboto';
  font-size: 18px;
  line-height: 1.7em;
  font-weight: 500;
  width: 335px;
  margin-top: 15px;
  @media (min-width: 577px and   max-width: 768px) {
    width: 100%;
  }
  @media (max-width: 577px) {
    width: 100%;
  }
`

export const PopupButton = styled.button`
  color: #00306e;
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 500;
  border: 1px solid #00306e;
  padding: 11px 15px;
  background-color: transparent;
  margin-top: 15px;
`

export const CrossButton = styled.button`
  border: 0px;
  background-color: transparent;
  display: flex;
  justify-content: top;
`

export const RightSideContainers = styled.div`
  width: 100%;
  height: 115vh;

  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  background-color: ${props => (props.isDarkMode ? '#181818 ' : '#f9f9f9 ')};
  @media (max-width: 576px) {
    // padding: 10px;
  }
`
export const RightSideContent = styled.div`
  width: 100%;
  padding-inline: 25px;
  padding-block: 25px;
  @media (max-width: 576px) {
    // padding: 0px;
    padding-top: 25px;
  }
  @media ((max-width: 768px) and (min-width: 501px)) {
    padding-inline: 15px;
  }
`
export const SearchContainer = styled.div`
  width:55%;
  border: 1px solid ${props => (props.isDarkMode ? '#606060 ' : '#ebebeb ')};
  display: flex;
  margin:25px
  justify-content: space-between;
  @media (max-width: 576px) {
      width:385px;
    max-width:90%;
  }
   @media ((max-width: 768px) and (min-width: 501px)) {
       width:425px;
   max-width:75%;
  }
`
export const SearchButton = styled.button`
  width: 65px;
  padding: 5px;
  border: 0px;
  background-color: ${props => (props.isDarkMode ? '#606060 ' : '#f1f1f1 ')};

  border-left: 1px solid
    ${props => (props.isDarkMode ? '#606060 ' : '#ebebeb ')};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const SearchInput = styled.input`
  outline: none;
  border: 0px;
  padding: 10px;
  width: 100%;
  background-color: transparent;
`
export const HomeContentUl = styled.ul`
  padding: 0px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
`
export const HomeContentli = styled.li`
  list-style: none;
  width: 31%;
  font-family: 'Roboto';
  margin-bottom: 15px;
  @media (max-width: 500px) {
    width: 100%;
  }
  @media ((max-width: 850px) and (min-width: 501px)) {
    width: 49%;
  }
`
export const HomeVideoThumbnailUrl = styled.img`
  width: 100%;
  margin-bottom: 0px;
`
export const HomeVideoTitle = styled.p`
  font-size: 13px;
  width: 85%;
  color: ${props => (props.isDarkMode ? '#ffffff ' : ' #00306e  ')};
  line-height: 1.5em;
  font-weight: 500;
  margin-bottom: 0px;
`
export const HomeVideoChannelName = styled.p`
  color: ${props => (props.isDarkMode ? '#7e858e ' : ' #00306e  ')};
  margin-top: 5px;
  font-size: 13px;
  opacity: 0.9;
  margin-bottom: 0px;
`

export const HomeVideoChannelImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 100%;
  margin-top: 15px;
  margin-right: 15px;
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

export default HomeBg
