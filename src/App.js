import {Switch, Route, Redirect} from 'react-router-dom'
import {useState, useEffect} from 'react'
import NewContext from './components/context'
import './App.css'
import Login from './components/Login/login'
import Home from './components/Home/home'
import Trending from './components/Trending/trending'
import Gaming from './components/Gaming/gaming'
import VideoDetails from './components/VideoDetail/videoDetail'
import ProtectedRoute from './components/ProtectedRoute/protectedRoute'
import NotFound from './components/NotFound/notfound'
import SavedVideo from './components/SavedVideoRoute/savedVideo'
// Replace your code here

const App = () => {
  const [isDarkMode, setDarkMode] = useState(false)
  const [savedList, setSavedVideoList] = useState([])
  const [isSaved, setIsSaved] = useState(false)
  const [savedId, setSavedId] = useState({})

  const checkSaved = newId => {
    const findId = () => savedList.find(each => each.id === newId.id)
    if (findId() === undefined) {
      setSavedVideoList([...savedList, newId])
    } else {
      setSavedVideoList(savedList.filter(each => each.id !== newId.id))
    }
  }
  const setDarkModeOn = () => {
    setDarkMode(prevState => !prevState)
  }

  const getSavedValue = id => {
    setIsSaved(prevState => !prevState)
    checkSaved(id)
  }
  return (
    <NewContext.Provider
      value={{
        isDarkMode,
        setDarkMode: setDarkModeOn,
        getSavedValue,
        savedList,
        setIsSaved,
        isSaved,
        // checkSaved,
        setSavedId,
        savedId,
      }}
    >
      <Switch>
        <Route exact path="/login" component={Login} />
        <ProtectedRoute exact path="/" component={Home} />
        <ProtectedRoute exact path="/trending" component={Trending} />
        <ProtectedRoute exact path="/gaming" component={Gaming} />
        <ProtectedRoute exact path="/saved-videos" component={SavedVideo} />
        <ProtectedRoute exact path="/videos/:id" component={VideoDetails} />
        <Route path="/bad-path" component={NotFound} />
        <Redirect to="/bad-path" />
      </Switch>
    </NewContext.Provider>
  )
}

export default App
