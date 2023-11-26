import React from 'react'
import { ViewPropsType, StyleSheet, View } from 'react-native'
import StyledText from './StyledText'
import Constant from 'expo-constants'
import theme from '../theme'

const styles = StyleSheet.create({})

const AppBar = () => {
  return (
    <View style={styles.container}>
      <StyledText fontWeight="bold" style={styles.text}>
        Repositories
      </StyledText>
    </View>
  )
}

export default AppBar
