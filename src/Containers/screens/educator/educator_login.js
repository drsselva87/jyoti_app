import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
  SafeAreaView,
  Pressable,
  ActivityIndicator,
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { Button, Divider } from '@rneui/base'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import { addUser } from '@/Store/userSlice'
import { useDispatch } from 'react-redux'

const baseUrl = 'http://44.202.89.70:8989/api/loginUser'

const EducatorLogin = ({ navigation }) => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const dispatch = useDispatch()

  // Set an initializing state whilst Firebase connects
  const [profileImage, setProfileImage] = useState('')

  // Passing configuration object to axios
  axios({
    method: 'get',
    url: `${baseUrl}/10001/arul@123`,
  })
    .then(response => {
      console.log(response.data)
      dispatch(
        addUser({
          email: 'abc@gmail.com',
          name: 'Arul',
          photo: '',
        }),
      )
    })
    .catch(error => {
      console.log(error)
    })

  const saveData = (registered_email, name, photo, uid) => {
    firestore()
      .collection('UserData')
      .add({
        email: registered_email,
        name: name,
        photo: photo,
        uid: uid,
      })
      .then(() => {
        console.log('User added')
      })
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ScrollView horizontal>
        <View>
          <Image
            source={require('../../../Assets/Images/logo.png')}
            style={{
              width: 70,
              height: 70,
              borderRadius: 100,
              marginTop: 70,
              marginLeft: 30,
            }}
          />
        </View>
        <View style={{ marginTop: 90, marginLeft: 5 }}>
          <Text
            style={{
              color: '#267900',
              fontSize: 30,
              fontWeight: 'bold',
              fontFamily: 'Roboto',
            }}
          >
            GR
            <Text
              style={{
                color: '#FF6E15',
                fontSize: 30,
                fontWeight: 'bold',
                fontFamily: 'Roboto',
              }}
            >
              IT
            </Text>
            <Text
              style={{
                color: '#00C5E4',
                fontSize: 30,
                fontWeight: 'bold',
                fontFamily: 'Roboto',
                marginLeft: 200,
              }}
            >
              {' '}
              Studies
            </Text>
          </Text>
        </View>
      </ScrollView>
      <Text
        style={{
          color: '#0B774B',
          fontSize: 20,
          fontFamily: 'Roboto',
          marginLeft: 30,
          fontWeight: '700',
          marginTop: 20,
        }}
      >
        Quality learning simplified for anywhere and anytime
      </Text>
      <Text
        style={{
          color: '#0B774B',
          fontSize: 16,
          fontFamily: 'Roboto',
          marginLeft: 30,
          fontWeight: '400',
          marginTop: 10,
        }}
      >
        Sign in to GRIT Studies account
      </Text>
      <SafeAreaView marginTop={10}>
        <TextInput
          style={styles.input}
          textContentType="emailAddress"
          keyboardType="email-address"
          placeholder="Email / Username"
          value={email}
          onChangeText={txt => {
            setEmail(txt)
          }}
          placeholderTextColor={'#0B774B'}
          backgroundColor="#F9FFFC"
        />
        <TextInput
          style={styles.input}
          value={password}
          secureTextEntry={true}
          onChangeText={txt => {
            setPassword(txt)
          }}
          placeholder="Password"
          keyboardType="password"
          placeholderTextColor={'#0B774B'}
          backgroundColor="#F9FFFC"
        />
      </SafeAreaView>
      <Text
        style={{
          color: '#FF6E15',
          fontSize: 14,
          fontFamily: 'Roboto',
          marginLeft: 200,
          fontWeight: '400',
          marginTop: 10,
        }}
        onPress={() => navigation.navigate('LoginFourth')}
      >
        Forgot password?
      </Text>
      <Button
        type="solid"
        titleStyle={{ color: 'white', fontSize: 15 }}
        buttonStyle={{
          height: 50,
          width: 300,
          alignContent: 'center',
          margin: 0,
          flex: 1,
          marginTop: 10,
          paddingLeft: 0,
          marginLeft: 30,
          backgroundColor: '#0B774B',
          borderRadius: 12,
        }}
        // onPress={() => {
        //   EmailSignIn(email, password)
        // }}
      >
        Continue
      </Button>
      <Divider
        orientation="horizontal"
        color="#CDEFE9"
        width={1}
        style={{ width: '83%', marginLeft: 30, marginTop: 15 }}
      />
      <Text
        style={{
          color: '#0B774B',
          marginLeft: 160,
          marginTop: -10,
          backgroundColor: 'white',
          padding: 2,
          width: 27,
        }}
      >
        OR
      </Text>

      <Divider
        orientation="horizontal"
        color="#CDEFE9"
        width={1}
        style={{ width: '100%', marginTop: 15 }}
      />
      <Pressable
        onPress={() => {
          navigation.navigate('SignupEmail')
        }}
      >
        <Text
          style={{
            color: '#0B774B',
            textAlign: 'center',
            marginTop: 10,
            height: 50,
          }}
        >
          Not a member yet?
          <Text style={{ color: '#FF6E15', textAlign: 'center' }}>
            Join now
          </Text>
        </Text>
      </Pressable>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Roboto',
  },
  container: {
    backgroundColor: 'white',
  },
  input: {
    height: 50,
    marginTop: 15,
    borderWidth: 1,
    borderColor: '#CDEFE9',
    marginLeft: 30,
    padding: 10,
    width: 300,
    borderRadius: 4,
  },
})

export default EducatorLogin
