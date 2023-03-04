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

const StudentAttendance = ({ navigation }) => {
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
            Student Attendance
          </Text>
        </View>
      </Card>
      <View
        style={{
          height: hp('79%'),
          marginTop: 20,
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Card
          containerStyle={{
            borderRadius: 10,
            width: wp('85%'),
          }}
        >
          <View style={{ flexDirection: 'column', alignItems: 'center' }}>
            <Image
              source={require('../../../Assets/Images/tutor_images/arul.jpeg')}
              style={{
                width: 80,
                height: 80,
                borderRadius: 50,
              }}
            />
            <Text
              style={{
                color: 'black',
                fontSize: 13,
                top: 5,
                fontWeight: 'bold',
              }}
            >
              Arul Jeyaraj
            </Text>
            <Text
              style={{
                color: 'black',
                fontSize: 10,
                marginTop: 9,
              }}
            >
              Mobile App Development
            </Text>
          </View>
        </Card>
        <Card
          containerStyle={{
            borderRadius: 5,
            width: wp('85%'),
          }}
        >
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Text
              style={{
                color: 'black',
                fontSize: 13,
                top: 5,
                fontWeight: 'bold',
              }}
            >
              Payment Status:
            </Text>
            <Text
              style={{
                color: 'green',
                fontSize: 13,
                top: 5,
                fontWeight: 'bold',
              }}
            >
              Paid
            </Text>
          </View>
          <Text
            style={{
              color: 'black',
              fontSize: 13,
              top: 5,
              marginTop: 10,
            }}
          >
            Leaves Taken
          </Text>
          <View style={{ flexDirection: 'column', marginTop: 10 }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'space-between',
              }}
            >
              <Text
                style={{
                  color: 'black',
                  fontSize: 13,
                  top: 5,
                }}
              >
                January
              </Text>
              <Text
                style={{
                  color: 'gray',
                  fontSize: 13,
                  top: 5,
                }}
              >
                5 Days
              </Text>
            </View>
            <Progress.Bar
              progress={0.4}
              width={wp('70%')}
              color="#FF6E15"
              marginTop={20}
              backgroundColor="#FFE1CF"
            />
          </View>
          <View style={{ flexDirection: 'column', marginTop: 10 }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'space-between',
              }}
            >
              <Text
                style={{
                  color: 'black',
                  fontSize: 13,
                  top: 5,
                }}
              >
                January
              </Text>
              <Text
                style={{
                  color: 'gray',
                  fontSize: 13,
                  top: 5,
                }}
              >
                5 Days
              </Text>
            </View>
            <Progress.Bar
              progress={0.4}
              width={wp('70%')}
              color="#FF6E15"
              marginTop={20}
              backgroundColor="#FFE1CF"
            />
          </View>
        </Card>
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

export default StudentAttendance
