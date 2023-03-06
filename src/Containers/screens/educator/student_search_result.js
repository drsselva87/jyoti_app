import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { Card, SearchBar } from '@rneui/themed'
import * as Progress from 'react-native-progress'
import { Button } from '@rneui/base'
// import NavTab from '../Commons/bottom_tab'
import { CoursesDetails } from '../../../Constants/Courses'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'

const StudentSearchResult = ({ navigation }) => {
  return (
    <ScrollView style={styles.responsiveBox}>
      <Card
        width={wp('100%')}
        height={hp('10%')}
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
          {/* <Text
            style={{
              color: 'black',
              marginLeft: wp('1%'),
              marginTop: hp('3%'),
              fontSize: 16,
            }}
          >
            Student Details
          </Text> */}
        </View>
      </Card>
      <View style={{ height: hp('79%') }}>
        <SearchBar
          placeholder="Search"
          platform="android"
          lightTheme={true}
          round={true}
          placeholderTextColor="#0B774B"
          cancelIcon={{ color: '#0B774B' }}
          clearIcon={{ color: '#0B774B', disabled: false }}
          searchIcon={{ height: 30, color: '#0B774B' }}
          containerStyle={{
            color: '#0B774B',
            backgroundColor: '#DCFFF1',
            borderRadius: 5,
            width: wp('80%'),
            height: hp('6%'),
            marginLeft: wp('5%'),
            marginTop: hp('1%'),
            borderWidth: 0,
          }}
          inputContainerStyle={{ height: hp('5%'), width: 290 }}
        />
        <ScrollView
          vertical
          disableIntervalMomentum={true}
          snapToInterval={wp('100%')}
          marginLeft={20}
        >
          {CoursesDetails.map((items, key) => (
            <View key={key} style={{ marginTop: 20, height: 80 }}>
              <Card.Image
                source={items.img}
                style={{
                  width: 80,
                  height: 80,
                  marginLeft: 0,
                  padding: 0,
                  borderRadius: 50,
                }}
              >
                <Text
                  style={{
                    width: wp('100%'),
                    marginLeft: wp('22%'),
                    fontSize: 13,
                    top: 5,
                    fontWeight: 'bold',
                  }}
                >
                  {items.course_name}
                </Text>
                <Text
                  style={{
                    width: wp('100%'),
                    marginLeft: wp('22%'),
                    fontSize: 10,
                    marginTop: 9,
                  }}
                >
                  {items.published_by}
                </Text>
              </Card.Image>
              <View
                style={{
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  marginLeft: wp('20%'),
                }}
              >
                {items.rating.map((item, key) => (
                  <Icon
                    key={key}
                    name="star"
                    style={{
                      marginLeft: wp('2%'),
                      marginTop: -35,
                      color: '#FFC107',
                    }}
                  />
                ))}
              </View>
              <Text
                style={{
                  width: wp('100%'),
                  marginLeft: wp('23%'),
                  fontSize: 11,
                  top: 5,
                  marginTop: -25,
                  fontWeight: 'bold',
                }}
              >
                $ 125
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>
      {/* <NavTab /> */}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Roboto',
  },
  container: {
    flex: 1,
    padding: 20,
  },
  responsiveBox: {
    width: wp('100%'),
    height: hp('17%'),
    flexDirection: 'column',
    backgroundColor: 'white',
  },
})

export default StudentSearchResult
