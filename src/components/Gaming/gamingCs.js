import styled from 'styled-components'

export const GamingUl = styled.ul`
  width: 100%;
  margin-top: 55px;
  padding: 0px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;

  background-color: ${props => (props.isDarkMode ? '#000000  ' : '#f9f9f9  ')};
`
export const GamingLi = styled.li`
  list-style: none;
  width: 25%;
  padding: 11px;
  border-radius: 11px;
  margin-bottom: 15px;
  //   padding-bottom: 25px;
  @media (max-width: 576px) {
    padding: 11px;
    width: 49%;
  }

  @media ((max-width: 1100px) and (min-width: 501px)) {
    width: 31%;
  }
`
export const GamingThumbnail = styled.img`
  width: 100%;
  @media (max-width: 576px) {
    width: 100%;
  }
`
export const GamingTitle = styled.p`
  color: ${props => (props.isDarkMode ? '#ffffff' : '#1e293b')};
  font-size: 18px;
  font-weight: 500;
  margin-top: 11px;
  margin-bottom: 0px;
`
export const GamingView = styled.p`
  color: ${props => (props.isDarkMode ? '#ffffff' : '#64748b')};
  margin-top: 5px;
  font-size: 15px;
  width: 90%;
  //   background-color: red;
`
export const GamingContent = styled.p`
  background-color: green;
`
export const LoaderContainer = styled.div`
  width: 100%;
  height: 115vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
