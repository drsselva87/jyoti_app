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
import NavTab from '../Commons/educator_bottom_tab'
import { createAppContainer } from 'react-navigation'

const EducatorHome = ({ navigation }) => {
  {
    console.log(navigation.navigate('Dashboard'))
  }
  return (
    <ScrollView contentContainerStyle={styles.responsiveBox}>
      <Card
        width={wp('100%')}
        borderRadius={5}
        containerStyle={{ margin: 0, padding: 0 }}
      >
        <View style={{ display: 'flex', flexDirection: 'row', padding: 10 }}>
          <Pressable onPress={() => navigation.navigate('Dashboard')}>
            <Card.Image
              source={require('../../../Assets/Images/avatar.jpeg')}
              style={{
                width: 50,
                height: 50,
                borderRadius: 100,
                marginTop: 20,
                marginLeft: wp('3%'),
              }}
            />
          </Pressable>
          <View marginTop={20} marginLeft={wp('2%')}>
            <Text style={{ color: 'black', fontSize: 14 }}>Hello!</Text>
            <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 16 }}>
              Jyoti Jha
            </Text>
          </View>
          <Pressable marginTop={20} marginLeft={wp('50%')}>
            <Icon name="search" size={27} color="black" />
          </Pressable>
        </View>
      </Card>
      <View
        style={{
          elevation: 5,
          marginLeft: wp('5%'),
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'space-between',
          marginRight: wp('5%'),
          marginTop: 10,
        }}
      >
        <Text
          style={{
            color: '#343434',
          }}
        >
          Attendance
        </Text>
        <Pressable
          onPress={() => {
            navigation.navigate('EducatorProfile')
          }}
        >
          <Text
            style={{
              color: '#27BC7F',
              marginTop: 10,
            }}
          >
            View All
          </Text>
        </Pressable>
      </View>
      <ScrollView
        horizontal
        disableIntervalMomentum={true}
        snapToInterval={wp('100%')}
      >
        {LearnerDetails.map((items, key) => (
          <View style={{ marginTop: 10 }} key={key}>
            <Card.Image
              source={items.img}
              style={{
                width: 64,
                height: 64,
                borderRadius: 100,
                marginLeft: wp('5%'),
              }}
            />
          </View>
        ))}
      </ScrollView>
      <View
        style={{
          elevation: 5,
          marginLeft: wp('5%'),
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'space-between',
          marginRight: wp('5%'),
          marginTop: 10,
        }}
      >
        <Text style={{ color: '#343434' }}>Upcoming Sessions</Text>
        <Pressable
          onPress={() => {
            navigation.navigate('StudentSearchResult')
          }}
        >
          <Text style={{ color: '#27BC7F' }}>View all</Text>
        </Pressable>
      </View>

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

      <View
        style={{
          elevation: 5,
          marginLeft: wp('5%'),
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'space-between',
          marginRight: wp('5%'),
          marginTop: 10,
        }}
      >
        <Text style={{ color: '#343434' }}>Categories</Text>
        <Pressable
          onPress={() => {
            navigation.navigate('HomeCategories')
          }}
        >
          <Text style={{ color: '#27BC7F' }}>View all</Text>
        </Pressable>
      </View>
      <ScrollView
        horizontal
        disableIntervalMomentum={true}
        snapToInterval={wp('100%')}
        style={{ marginLeft: 10 }}
      >
        <View>
          <Card
            containerStyle={{
              borderRadius: 50,
              justifyContent: 'center',
              alignContent: 'center',
            }}
          >
            <Icon name="logo-html5" size={25} color="#27BC7F" />
          </Card>
          <Text style={{ textAlign: 'center', color: 'black' }}>Software</Text>
        </View>
        <View>
          <Card containerStyle={{ borderRadius: 50 }}>
            <FontIcon name="stethoscope" size={25} color="#27BC7F" />
          </Card>
          <Text style={{ textAlign: 'center', color: 'black' }}>NEET</Text>
        </View>
        <View>
          <Card containerStyle={{ borderRadius: 50 }}>
            <Icon name="bulb-outline" size={25} color="#27BC7F" />
          </Card>
          <Text style={{ textAlign: 'center', color: 'black' }}>JEE</Text>
        </View>
        <View>
          <Card containerStyle={{ borderRadius: 50 }}>
            <Icon name="cloud-circle" size={25} color="#27BC7F" />
          </Card>
          <Text style={{ textAlign: 'center', color: 'black' }}>UPSC</Text>
        </View>
        <View>
          <Card containerStyle={{ borderRadius: 50 }}>
            <Icon name="ios-analytics-outline" size={25} color="#27BC7F" />
          </Card>
          <Text style={{ textAlign: 'center', color: 'black' }}>Commerce</Text>
        </View>
        <View>
          <Card containerStyle={{ borderRadius: 50 }}>
            <Icon name="logo-html5" size={25} color="#27BC7F" />
          </Card>
        </View>
      </ScrollView>
      <View
        style={{
          elevation: 5,
          marginLeft: wp('5%'),
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'space-between',
          marginRight: wp('5%'),
          marginTop: 10,
        }}
      >
        <Text style={{ color: '#343434' }}>Recently Uploaded Videos</Text>
        <Pressable
          onPress={() => {
            navigation.navigate('HomeSearch')
          }}
        >
          <Text style={{ color: '#27BC7F' }}>View all</Text>
        </Pressable>
      </View>

      <ScrollView
        vertical
        disableIntervalMomentum={true}
        snapToInterval={wp('100%')}
        marginLeft={20}
      >
        {CoursesDetails.map((items, key) => (
          <View key={key}>
            <Card
              width={wp('90%')}
              height={80}
              borderRadius={10}
              containerStyle={{
                backgroundColor: 'white',
                padding: 0,
                marginLeft: 5,
              }}
            >
              <Card.Image
                source={items.img}
                style={{
                  width: 100,
                  height: 80,
                  borderRadius: 10,
                  marginLeft: 0,
                  padding: 0,
                }}
              >
                <Text
                  style={{
                    width: 300,
                    marginLeft: 105,
                    fontSize: 16,
                    top: 5,
                    fontWeight: 'bold',
                    color: 'black',
                  }}
                >
                  {items.course_name}
                </Text>
                <View
                  style={{
                    elevation: 5,
                    marginLeft: 105,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'space-between',
                    marginRight: wp('5%'),
                    marginTop: 10,
                  }}
                >
                  <Text
                    style={{
                      width: 90,
                      fontSize: 14,
                      marginTop: 9,
                      color: 'black',
                    }}
                  >
                    {items.published_by}
                  </Text>
                  <Icon
                    name="time-outline"
                    style={{
                      width: 90,
                      fontSize: 14,
                      color: 'black',
                    }}
                  >
                    <Text style={{ color: 'black' }}>23 Min</Text>
                  </Icon>
                  <Icon
                    name="heart"
                    style={{
                      width: 90,
                      fontSize: 14,
                      color: 'black',
                    }}
                  >
                    <Text style={{ color: 'black' }}>485 Likes</Text>
                  </Icon>
                </View>
                <Text />
              </Card.Image>
            </Card>
          </View>
        ))}
      </ScrollView>
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

export default EducatorHome
