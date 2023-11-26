import React from 'react'
import { Text, StyleSheet } from 'react-native'
import Theme from '../theme'

const styles = StyleSheet.create({
  text: {
    fontSize: Theme.fontSizes.body,
    color: Theme.colors.textPrimary,
    fontFamily: Theme.fonts.main,
    fontWeight: Theme.fontWeights.normal,
  },
  bold: {
    fontWeight: Theme.fontWeights.bold,
  },
  subheading: {
    fontSize: Theme.fontSizes.subheading,
  },
  colorPrimary: {
    color: Theme.colors.primary,
  },
  colorSecondary: {
    color: Theme.colors.textSecondary,
  },
  textAlignCenter: {
    textAlign: 'center',
  },
})

export default function StyledText({
  children,
  color,
  fontZise,
  fontWeight,
  align,
  style,
  ...restOfProps
}) {
  const textStyle = [
    styles.text,
    color === 'primary' && styles.colorPrimary,
    color === 'secondary' && styles.colorSecondary,
    fontWeight === 'bold' && styles.bold,
    fontZise === 'subheading' && styles.subheading,
    align === 'center' && styles.textAlignCenter,
    style,
  ]

  return (
    <Text style={textStyle} {...restOfProps}>
      {children}
    </Text>
  )
}
