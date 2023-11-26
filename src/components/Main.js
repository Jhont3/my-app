import React from 'react'
import Constants from 'expo-constants'
import { Text, View } from 'react-native'
import RepositoryList from './RepositoryList.js'
import AppBar from './AppBar.js'

const Main = () => {
  return (
    <View
      style={{ marginTop: Constants.statusBarHeight, flexGrow: 1, padding: 20 }}
    >
      <AppBar />
      <RepositoryList />
    </View>
  )
}

export default Main
