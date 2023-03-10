import React, { useState } from 'react'
import { StyleSheet, Text, View, ScrollView, Pressable } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import FontIcon from 'react-native-vector-icons/FontAwesome5'
import { Card } from '@rneui/themed'
import { LearnerDetails } from '../../../Constants/Learners'
import { CoursesDetails } from '../../../Constants/Courses'
import LinearGradient from 'react-native-linear-gradient'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'

// import NavTab from './bottomNavTab'

const UpcomingSessions = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.responsiveBox}>
      <Card
        width={wp('100%')}
        borderRadius={5}
        containerStyle={{ margin: 0, padding: 0 }}
      >
        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <Card
            height={hp('5%')}
            borderRadius={10}
            containerStyle={{
              padding: 0,
              marginTop: hp('2%'),
              left: 0,
              width: 30,
            }}
          >
            <Icon name="chevron-back-outline" size={27} color="black" />
          </Card>
          <Text
            style={{
              color: 'black',
              marginLeft: wp('1%'),
              marginTop: hp('3%'),
              fontSize: 16,
            }}
          >
            Upcoming Sessions
          </Text>
        </View>
      </Card>
      <LinearGradient
        colors={['#40D095', '#328764']}
        style={styles.linearGradient}
        // start={{ x: 0, y: 0.7 }}
        marginHorizontal={10}
      >
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          <View>
            <Card.Image
              source={require('../../../Assets/Images/course_images/react.jpeg')}
              style={{
                width: 64,
                height: 64,
                borderRadius: 100,
                marginLeft: wp('3%'),
              }}
            />
          </View>
          <View>
            <Text
              style={{
                fontSize: 16,
                fontFamily: 'Roboto',
                textAlign: 'center',
                marginTop: 5,
                marginLeft: 5,
                color: '#ffffff',
                backgroundColor: 'transparent',
              }}
            >
              Advanced Javascript
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontFamily: 'Roboto',
                textAlign: 'center',
                marginTop: 5,
                marginLeft: 5,
                color: '#ffffff',
                backgroundColor: 'transparent',
              }}
            >
              Students Interested 100+
            </Text>
          </View>
        </View>
        <Card
          style={{ color: '#ffffff' }}
          containerStyle={{ borderRadius: 10, width: wp('80%') }}
        >
          <View style={{ display: 'flex', flexDirection: 'row' }}>
            <Icon name="calendar" size={18} style={{ color: 'black' }} />
            <Text fontSize={12} style={{ paddingLeft: 3, color: 'black' }}>
              Monday, 26 Decemeber
            </Text>
            <Icon
              name="time-outline"
              size={18}
              style={{ color: 'black', marginLeft: 10 }}
            />
            <Text fontSize={12} style={{ color: 'black' }}>
              03:00 - 05:00
            </Text>
          </View>
        </Card>
      </LinearGradient>
      <LinearGradient
        colors={['#40D095', '#328764']}
        style={styles.linearGradient}
        // start={{ x: 0, y: 0.7 }}
        marginHorizontal={10}
      >
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          <View>
            <Card.Image
              source={require('../../../Assets/Images/course_images/react.jpeg')}
              style={{
                width: 64,
                height: 64,
                borderRadius: 100,
                marginLeft: wp('3%'),
              }}
            />
          </View>
          <View>
            <Text
              style={{
                fontSize: 16,
                fontFamily: 'Roboto',
                textAlign: 'center',
                marginTop: 5,
                marginLeft: 5,
                color: '#ffffff',
                backgroundColor: 'transparent',
              }}
            >
              Advanced Javascript
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontFamily: 'Roboto',
                textAlign: 'center',
                marginTop: 5,
                marginLeft: 5,
                color: '#ffffff',
                backgroundColor: 'transparent',
              }}
            >
              Students Interested 100+
            </Text>
          </View>
        </View>
        <Card
          style={{ color: '#ffffff' }}
          containerStyle={{ borderRadius: 10, width: wp('80%') }}
        >
          <View style={{ display: 'flex', flexDirection: 'row' }}>
            <Icon name="calendar" size={18} style={{ color: 'black' }} />
            <Text fontSize={12} style={{ paddingLeft: 3, color: 'black' }}>
              Monday, 26 Decemeber
            </Text>
            <Icon
              name="time-outline"
              size={18}
              style={{ color: 'black', marginLeft: 10 }}
            />
            <Text fontSize={12} style={{ color: 'black' }}>
              03:00 - 05:00
            </Text>
          </View>
        </Card>
      </LinearGradient>
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
  },
  linearGradient: {
    padding: 10,
    marginLeft: 20,
    marginTop: 10,
    borderRadius: 10,
    height: 150,
    width: wp('90%'),
  },
  responsiveBox: {
    width: wp('100%'),
    backgroundColor: 'white',
    flexDirection: 'column',
  },
})

export default UpcomingSessions
