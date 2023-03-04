import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
  Pressable,
  Dimensions,
} from 'react-native'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import Icon from 'react-native-vector-icons/Ionicons'
import { Card, SearchBar } from '@rneui/themed'
import * as Progress from 'react-native-progress'
import { Button } from '@rneui/base'
import NavTab from '../Commons/nav_tab'
import { CoursesDetails } from '../../../Constants/Courses'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import { Divider } from 'react-native-paper'

const Earnings = ({ navigation }) => {
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
          <Text
            style={{
              color: 'black',
              marginLeft: wp('1%'),
              marginTop: hp('3%'),
              fontSize: 16,
            }}
          >
            My Earnings
          </Text>
        </View>
      </Card>
      <View style={{ height: hp('79%') }}>
        <ScrollView
          vertical
          disableIntervalMomentum={true}
          snapToInterval={wp('100%')}
        >
          <Text
            style={{
              color: 'black',
              fontSize: 20,
              marginTop: 10,
              marginLeft: 20,
            }}
          >
            Notifications
          </Text>
          <View
            style={{ display: 'flex', flexDirection: 'row', marginLeft: 10 }}
          >
            <MaterialIcon
              name="verified"
              size={30}
              color="green"
              style={{ marginTop: 10 }}
            />
            <Text
              style={{
                color: 'black',
                fontSize: 14,
                marginTop: 10,
                marginLeft: 20,
                width: 350,
              }}
            >
              Payment Credited for Mobile Application Development Course
            </Text>
          </View>
          <View
            style={{ display: 'flex', flexDirection: 'row', marginLeft: 10 }}
          >
            <MaterialIcon
              name="verified"
              size={30}
              color="green"
              style={{ marginTop: 10 }}
            />
            <Text
              style={{
                color: 'black',
                fontSize: 14,
                marginTop: 10,
                marginLeft: 20,
                width: 350,
              }}
            >
              Payment Credited for Mobile Application Development Course
            </Text>
          </View>
          <View
            style={{ display: 'flex', flexDirection: 'row', marginLeft: 10 }}
          >
            <MaterialIcon
              name="verified"
              size={30}
              color="green"
              style={{ marginTop: 10 }}
            />
            <Text
              style={{
                color: 'black',
                fontSize: 14,
                marginTop: 10,
                marginLeft: 20,
                width: 350,
              }}
            >
              Payment Credited for Mobile Application Development Course
            </Text>
          </View>
        </ScrollView>
      </View>
      <NavTab />
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

export default Earnings
