import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import StyledText from './StyledText.js'
import RepositoryStats from './RepositoryStats.js'
import theme from '../theme.js'

const RepositoryItemHeader = (props) => (
  <View style={{ flexDirection: 'row', paddingBottom: 2 }}>
    <View style={{ paddingRight: 10 }}>
      <Image style={styles.Image} source={{ uri: props.ownerAvatarUrl }} />
    </View>
    <View style={{ flexGrow: 1 }}>
      <StyledText fontZise="subheading" fontWeight="bold">
        {props.fullName}
      </StyledText>
      <StyledText color="secondary">{props.description}</StyledText>
      <StyledText style={styles.languages}>{props.language}</StyledText>
    </View>
  </View>
)

const RepositoryItem = (props) => (
  <View key={props.id}>
    <RepositoryItemHeader {...props} />
    <RepositoryStats {...props} />
  </View>
)

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 5,
    paddingTop: 5,
  },
  languages: {
    padding: 2,
    color: theme.colors.white,
    backgroundColor: theme.colors.primary,
    alignSelf: 'flex-start',
    borderRadius: 5,
    overflow: 'hidden',
    marginTop: 4,
    marginBottom: 4,
  },
  Image: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
})

export default RepositoryItem
