import React from 'react'
import { Text, StyleSheet } from 'react-native'
import theme from '../theme.js'

const styles = StyleSheet.create({
  text: {
    fontSize: theme.fontSizes.body,
    color: theme.colors.textPrimary,
    fontWeight: theme.fontWeights.normal,
  },
  bold: {
    fontWeight: theme.fontWeights.bold,
  },
  subheading: {
    fontSize: theme.fontSizes.subheading,
  },
  colorPrimary: {
    color: theme.colors.primary,
  },
  colorSecondary: {
    color: theme.colors.textSecondary,
  },
  textAlignCenter: {
    textAlign: 'center',
  },
})

function StyledText({
  children,
  color,
  fontSize,
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
    fontSize === 'subheading' && styles.subheading,
    align === 'center' && styles.textAlignCenter,
    style,
  ]

  return (
    <Text style={textStyle} {...restOfProps}>
      {children}
    </Text>
  )
}
export default StyledText
