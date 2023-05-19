import React from 'react'

const NewContext = React.createContext({
  newUser: {
    username: '',
    password: '',
  },
  isDarkMode: false,
  goSubmit: () => {},
})

export default NewContext
