import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import StyledText from './StyledText.js'

const parseThousands = (number) => {
  return number > 1000 ? `${Math.round(number / 100) / 10}k` : String(number)
}

const RepositoryStats = (props) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexGrow: 1,
      }}
    >
      <View>
        <StyledText align="center" fontWeight="bold">
          {' '}
          {parseThousands(props.stargazersCount)}
        </StyledText>
        <StyledText align="center">Star</StyledText>
      </View>
      <View>
        <StyledText align="center" fontWeight="bold">
          {' '}
          {parseThousands(props.forksCount)}
        </StyledText>
        <StyledText align="center">Forks</StyledText>
      </View>
      <View>
        <StyledText align="center" fontWeight="bold">
          {' '}
          {props.reviewCount}
        </StyledText>
        <StyledText align="center">Reviews</StyledText>
      </View>
      <View>
        <StyledText align="center" fontWeight="bold">
          {' '}
          {props.ratingAverage}
        </StyledText>
        <StyledText align="center">Rating</StyledText>
      </View>
    </View>
  )
}

export default RepositoryStats
