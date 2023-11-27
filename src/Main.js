import React from 'react'
import { View } from 'react-native'
import RepositoryList from './components/RepositoryList.js'
import AppBar from './components/AppBar.js'
import { Routes, Route, Navigate, NativeRouter } from 'react-router-native'
import LoginPage from './pages/LoginPage.js'

const Main = () => {
  return (
    <NativeRouter>
      <View style={{ flex: 1 }}>
        <AppBar />
        <Routes>
          <Route path="/" element={<RepositoryList />} />
          <Route path="/signin" element={<LoginPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </View>
    </NativeRouter>
  )
}

export default Main
