import React from 'react'
import { StyleSheet, Text, View, ScrollView, Image,StatusBar } from 'react-native'
import { Button } from '@react-native-material/core'
import Icon from 'react-native-vector-icons/Ionicons'
import FontIcon from 'react-native-vector-icons/FontAwesome5'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import { color } from 'react-native-reanimated'

const EducatorOrStudent = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar
        backgroundColor="#27BC7F"
        barStyle="dark-content"
      />
      {/* <View
        style={{
          
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 100,
        }}
      > */}
        <Image
          source={require('../../../Assets/Images/logo.png')}
          style={{ width: 190, height: 190, marginTop: 0 ,resizeMode:"contain"}}
        />
        <Text
          style={{
            marginTop: 0,
            color: '#267900',
            fontSize: 35,
            fontWeight: 'bold',
            fontFamily: 'Roboto',
          }}
        >
          GR
          <Text
            style={{
              marginTop: 0,
              color: '#FF6E15',
              fontSize: 35,
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
              fontSize: 35,
              fontWeight: 'bold',
              fontFamily: 'Roboto',
            }}
          >
            {' '}
            Studies
          </Text>
        </Text>
        {/* <Text>Select Your Choice</Text> */}
        <Button
          title="Student"
          uppercase={false}
          leading={<Icon name="school" style={{ color: 'white' }} />}
          style={{
            backgroundColor: '#0B774B',
            width: "60%",
            height: 50,
            color: 'white',
            marginVertical: 20,
            paddingVertical: 7,
          }}
          onPress={() => navigation.navigate('Onboarding_First')}
        />
        <Button
          title="Educator"
          uppercase={false}
          leading={
            <FontIcon name="chalkboard-teacher" style={{ color: 'white' }} />
          }
          style={{
            backgroundColor: '#0B774B',
            width: "60%",
            height: 50,
            color: 'white',
            paddingVertical: 7,
          }}
          onPress={() => navigation.navigate('Educator')}
        />
      {/* </View> */}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Roboto',
  },
  container: {
    backgroundColor: 'white',
   
    height: "100%",width:"100%",justifyContent:"center",alignItems:"center"
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
