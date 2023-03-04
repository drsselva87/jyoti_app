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

const UploadedVideos = ({ navigation }) => {
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
            Uploaded Videos
          </Text>
        </View>
      </Card>
      <View style={{ height: hp('79%') }}>
        <ScrollView
          vertical
          disableIntervalMomentum={true}
          snapToInterval={wp('100%')}
          marginLeft={20}
        >
          {CoursesDetails.map((items, key) => (
            <Card key={key}>
              <View style={{ height: 80 }}>
                <Card.Image
                  source={items.img}
                  style={{
                    width: 80,
                    height: 80,
                    marginLeft: 0,
                    padding: 0,
                    borderRadius: 10,
                  }}
                >
                  <Text
                    style={{
                      width: wp('100%'),
                      marginLeft: wp('22%'),
                      fontSize: 13,
                      top: 5,
                      fontWeight: 'bold',
                      color: 'black',
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
                      color: 'black',
                    }}
                  >
                    {items.published_by}
                  </Text>
                  <Icon
                    name="time-outline"
                    size={18}
                    style={{
                      width: wp('100%'),
                      marginLeft: wp('22%'),
                      fontSize: 10,
                      marginTop: 9,
                      color: 'black',
                    }}
                  >
                    <Text
                      fontSize={12}
                      style={{
                        width: wp('100%'),
                        marginLeft: wp('22%'),
                        fontSize: 10,
                        marginTop: 9,
                        color: 'black',
                      }}
                    >
                      23 Min
                    </Text>
                  </Icon>
                </Card.Image>
              </View>
            </Card>
          ))}
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

export default UploadedVideos
