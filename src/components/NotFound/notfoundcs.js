import styled from 'styled-components'

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
export const FailureImage = styled.img`
  width: 375px;
  height: 315px;
  margin-top: 55px;
  @media (max-width: 576px) {
    width: 275px;
    height: 275px;
  }
`
