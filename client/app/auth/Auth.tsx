import { StyleSheet, Text, View, TouchableOpacity, Animated } from 'react-native'
import React, { useState, useRef } from 'react'
import Login from '@/src/components/auth/Login'
import Register from '@/src/components/auth/Register'
import { Colors } from '@/src/constants/Colors'

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true)
  const fadeAnim = useRef(new Animated.Value(1)).current

  const toggleAuthScreen = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start(() => {
      setIsLogin(!isLogin)
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start()
    })
  }

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.authContainer, { opacity: fadeAnim }]}>
        {isLogin ? <Login /> : <Register />}
      </Animated.View>

      <TouchableOpacity onPress={toggleAuthScreen} style={styles.switchButton}>
        <Text style={styles.switchText}>
          {isLogin ? (
            <>
              Don't have an account? <Text style={styles.switchTextAction}>Sign Up</Text>
            </>
          ) : (
            <>
              Already have an account? <Text style={styles.switchTextAction}>Login</Text>
            </>
          )}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Auth

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.background.dark,
    padding: 20,
  },
  authContainer: {
    width: '100%',
  },
  switchButton: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  switchText: {
    fontSize: 16,
    color: Colors.text.muted,
    textAlign: 'center',
  },
  switchTextAction: {
    color: Colors.primary,
    fontWeight: 'bold',
  },
})
