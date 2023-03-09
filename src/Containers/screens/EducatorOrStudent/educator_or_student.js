import React, { useState } from 'react'
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import { Button } from '@react-native-material/core'
import Icon from 'react-native-vector-icons/Ionicons'
import FontIcon from 'react-native-vector-icons/FontAwesome5'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import { useDispatch, useSelector } from 'react-redux'

const EducatorOrStudent = ({ navigation }) => {
  const { isLoggedIn } = useSelector(state => state.auth)
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 100,
        }}
      >
        <Image
          source={require('../../../Assets/Images/logo.png')}
          style={{ width: 200, height: 200, marginTop: 0 }}
        />
        <Text
          style={{
            marginTop: 0,
            color: '#267900',
            fontSize: 40,
            fontWeight: 'bold',
            fontFamily: 'Roboto',
          }}
        >
          GR
          <Text
            style={{
              marginTop: 0,
              color: '#FF6E15',
              fontSize: 40,
              fontWeight: 'bold',
              fontFamily: 'Roboto',
            }}
          >
            IT
          </Text>
          <Text
            style={{
              marginTop: 0,
              paddingLeft: 50,
              color: '#00C5E4',
              fontSize: 40,
              fontWeight: 'bold',
              fontFamily: 'Roboto',
            }}
          >
            {' '}
            Studies
          </Text>
        </Text>
        <Text>Select Your Choice</Text>
        <Button
          title="Student"
          leading={<Icon name="school" style={{ color: 'white' }} />}
          style={{
            backgroundColor: '#0B774B',
            width: 300,
            height: 50,
            color: 'white',
            marginVertical: 20,
            paddingVertical: 7,
          }}
          onPress={() => navigation.navigate('Onboarding_First')}
        />
        <Button
          title="Educator"
          leading={
            <FontIcon name="chalkboard-teacher" style={{ color: 'white' }} />
          }
          style={{
            backgroundColor: '#0B774B',
            width: 300,
            height: 50,
            color: 'white',
            paddingVertical: 7,
          }}
          onPress={() =>
            isLoggedIn
              ? navigation.navigate('Educator')
              : navigation.navigate('EducatorLogin')
          }
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Roboto',
  },
  container: {
    backgroundColor: 'white',
    paddingRight: 10,
    height: hp('100%'),
  },
  linearGradient: {
    padding: 10,
    marginLeft: 30,
    borderRadius: 10,
    height: 150,
    width: 352,
  },
  responsiveBox: {
    width: wp('100%'),
    flexDirection: 'column',
  },
})

export default EducatorOrStudent
