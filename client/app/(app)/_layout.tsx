import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

const TabLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen name="chat" />
      <Tabs.Screen name="account" />
      <Tabs.Screen name="status" />
    </Tabs>
  )
}

export default TabLayout

const styles = StyleSheet.create({})