import styled from 'styled-components'

export const HeaderBg = styled.div`
  background-color: ${props => (props.isDarkMode ? '#181818' : '#ffffff')};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 35px 20px 35px;
  font-family: 'Roboto';
  @media (max-width: 576px) {
    padding: 10px 15px 10px 15px;
  }
`
export const HeaderLogo = styled.img`
  width: 155px;
  height: 40px;
  @media screen and (max-width: 767px) {
    width: 95px;
    height: 25px;
  }
`
export const NavContainer = styled.div`
  width: 35%;
  max-width: 237px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 767px) {
    width: 35%;
  }
`
export const Profile = styled.img`
  width: 35px;
  @media screen and (max-width: 800px) {
    display: none;
  }
`
export const SmallContainer = styled.div`
  display: none;
  @media screen and (max-width: 800px) {
    display: flex;
    justify-content: 'space-between';
    width: 70%;
  }
`

export const LogoutBtn = styled.button`
  min-width: 95px;
  background-color: transparent;
  border-radius: 2px;
  border: 1px solid ${props => (props.isDarkMode ? '#ffffff' : '#4f46e5')};
  color: ${props => (props.isDarkMode ? '#ffffff' : '#4f46e5')};
  padding: 7px 17px 7px 17px;
  font-size: 17px;
  @media screen and (max-width: 800px) {
    display: none;
  }
`

export const LogoutBtnSm = styled.button`
  display: none;
  @media screen and (max-width: 800px) {
    display: flex;
    background-color: transparent;
    border: 0px;
    font-size: 30px;
  }
`
export const Icon = styled.button`
  font-size: 25px;
  background-color: transparent;
  border: 0px;
  @media screen and (min-width: 800px) {
    font-size: 30px;
    margin-top: 6px;
  }
`
export const DropdownContainer = styled.div`
  @media screen and (min-width: 800px) {
    display: none;
  }
`
export const DropDownButton = styled.button`
  color: ${props => (props.isDarkMode ? '#ffffff' : '#000000')};
  background-color: transparent;
  border: 0px;
`

export const SideTab = styled.div`
  width: 30%;
  max-width: 325px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 115vh;
  padding-block: 15px;
  background-color: ${props => (props.isDarkMode ? '#181818 ' : '#ffffff ')};
  @media (max-width: 800px) {
    display: none;
  }
`
export const SideTabContainers = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  list-style: none;
  padding-inline: 25px;
  margin-bottom: -1px;

  background-color: ${props => {
    if (props.isActive && props.isDarkMode) {
      return '#212121'
    }
    if (props.isActive) {
      return '#f1f5f9'
    }
    if (props.isDarkMode) {
      return '#181818'
    }
    return '#ffffff'
  }};
`

export const SideTabName = styled.p`
  color: ${props => {
    if (props.isActive && props.isDarkMode) {
      return '#ffffff'
    }
    if (props.isActive) {
      return '#000000'
    }
    if (props.isDarkMode) {
      return '#ebebeb'
    }
    return '#181818'
  }};
  font-weight: ${props => {
    if (props.isActive && props.isDarkMode) {
      return '500'
    }
    if (props.isActive) {
      return '500'
    }
    if (props.isDarkMode) {
      return '400'
    }
    return '400'
  }};
  font-size: 18px;
  margin-top: 15px;
  margin-left: 11px;
  opacity: ${props => {
    if (props.isActive && props.isDarkMode) {
      return '1'
    }
    if (props.isActive) {
      return '1'
    }
    if (props.isDarkMode) {
      return '0.9'
    }
    return '1'
  }};
`

export const SideIconContainers = styled.div`
  width: 100%;
  display: flex;
  padding-inline: 25px;
  padding-block: 15px;
`
export const IconNew = styled.div`
  color: ${props => {
    if (props.isActive && props.isDarkMode) {
      return '#ff0000'
    }
    if (props.isActive) {
      return '#ff0000'
    }
    if (props.isDarkMode) {
      return '#ebebeb'
    }
    return '#181818'
  }};
  opacity: ${props => {
    if (props.isActive && props.isDarkMode) {
      return '1'
    }
    if (props.isActive) {
      return '1'
    }
    if (props.isDarkMode) {
      return '0.8'
    }
    return '0.8'
  }};
`

export const SideIconImage = styled.img`
  width: 25%;
  max-width: 35px;
  margin-right: 15px;
`
export const SideIconHeading = styled.p`
  color: ${props => (props.isDarkMode ? '#ffffff ' : ' #00306e  ')};
  font-family: 'Roboto';
  font-size: 18px;
  padding-inline: 25px;
  font-weight: 600;
`
export const SideIconPara = styled.p`
  color: ${props => (props.isDarkMode ? '#ffffff ' : ' #00306e  ')};
  font-family: 'Roboto';
  font-size: 17px;
  padding-inline: 25px;
  width: 80%;
  line-height: 1.5em;
  font-weight: 600;
`

export default HeaderBg

//    background-color: ${props =>
//   props.isDarkMode ? '#181818 ' : '#e2e8f0 '};
//   background-color:${props => (props.isActive ? '#181818' : '#ffffff')}
