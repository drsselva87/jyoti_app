import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  Image,
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { Card, SearchBar } from '@rneui/themed'
import * as Progress from 'react-native-progress'
import { Button } from '@rneui/base'
import { EducatorDetails } from '../../../Constants/Educators'
import { CoursesDetails } from '../../../Constants/Courses'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import { useSelector } from 'react-redux'

const StudentHome = ({ navigation }) => {
  const userEmail = useSelector(store => store.user.email)
  const userName = useSelector(store => store.user.name)
  const userPhoto = useSelector(store => store.user.photo)
  return (
    <ScrollView style={styles.responsiveBox}>
      <Card
        width={wp('100%')}
        height={160}
        borderRadius={5}
        containerStyle={{ backgroundColor: '#27BC7F', margin: 0, padding: 0 }}
      >
        <Image
          source={
            userPhoto
              ? { uri: userPhoto }
              : require('../../../Assets/Images/avatar.jpeg')
          }
          style={{
            width: 50,
            height: 50,
            borderRadius: 100,
            marginTop: 40,
            marginLeft: 20,
          }}
        />
        <Text
          style={{
            color: 'white',
            marginLeft: wp('20%'),
            marginTop: hp('-6%'),
            fontSize: 14,
          }}
        >
          Hello!
        </Text>
        <Text
          style={{
            color: '#0a5943',
            marginLeft: wp('20%'),
            fontWeight: 'bold',
            fontSize: 16,
          }}
        >
          {userName}
        </Text>
        <Card
          height={30}
          borderRadius={10}
          containerStyle={{
            padding: 0,
            top: hp('-8%'),
            marginLeft: wp('85%'),
            width: wp('7%'),
          }}
        >
          <Icon
            name="notifications-outline"
            style={{ color: 'black' }}
            size={27}
          />
        </Card>
        <SearchBar
          placeholder="Looking for a course?"
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
            height: 40,
            marginTop: hp('-4%'),
            marginLeft: wp('6%'),
            borderWidth: 0,
          }}
          inputContainerStyle={{ height: 25, width: wp('80%') }}
        />
      </Card>
      <Text style={{ color: '#343434', marginTop: 20, marginLeft: wp('7%') }}>
        Continue Learning
      </Text>
      <Card
        width={wp('85%')}
        height={100}
        borderRadius={10}
        containerStyle={{
          padding: 10,
          paddingLeft: wp('5%'),
          backgroundColor: '#96F2D4',
          marginLeft: wp('7%'),
        }}
      >
        <Text marginLeft={20} style={{ color: '#00301C' }}>
          Grit Studies
        </Text>
        <Text
          marginLeft={20}
          style={{ color: '#00301C', fontWeight: 'bold', top: 5 }}
        >
          DevOps & Software Engineering
        </Text>
        <Progress.Bar
          progress={0.4}
          width={wp('70%')}
          color="#FF6E15"
          marginTop={20}
          backgroundColor="#FFE1CF"
        />
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
        <Text style={{ color: '#343434', marginTop: 20 }}>Top Categories</Text>
        <Text
          style={{
            color: 'orange',
          }}
          onPress={() => navigation.navigate('HomeSearchResult')}
        >
          See all
        </Text>
      </View>
      <ScrollView horizontal style={{ marginTop: 10 }}>
        <View>
          <Button
            type="outline"
            titleStyle={{ color: '#0B774B', fontSize: 12 }}
            icon={{ size: 15 }}
            buttonStyle={{
              height: 35,
              alignContent: 'center',
              margin: 0,
              flex: 1,
              marginTop: 5,
              paddingLeft: 0,
              marginLeft: 20,
              borderColor: '#0B774B',
              borderRadius: 12,
            }}
          >
            NEET and JEE coaching
          </Button>
        </View>
        <View>
          <Button
            type="outline"
            style={{ flex: 1 }}
            titleStyle={{ color: '#0B774B', fontSize: 12 }}
            icon={{ size: 15 }}
            buttonStyle={{
              height: 35,
              flex: 2,
              alignContent: 'center',
              marginLeft: 10,
              marginTop: 5,
              paddingLeft: 0,
              borderColor: '#0B774B',
              borderRadius: 12,
            }}
          >
            UPSC AND TNPSC
          </Button>
        </View>
        <View>
          <Button
            type="outline"
            style={{ flex: 1 }}
            titleStyle={{ color: '#0B774B', fontSize: 12 }}
            icon={{ size: 15 }}
            buttonStyle={{
              height: 35,
              flex: 2,
              alignContent: 'center',
              marginLeft: 10,
              marginTop: 5,
              paddingLeft: 0,
              borderColor: '#0B774B',
              borderRadius: 12,
            }}
          >
            LEADERSHIP
          </Button>
        </View>
      </ScrollView>
      <ScrollView horizontal>
        <View>
          <Button
            type="outline"
            style={{ flex: 1 }}
            titleStyle={{ color: '#0B774B', fontSize: 12 }}
            icon={{ size: 15 }}
            buttonStyle={{
              height: 35,
              flex: 2,
              alignContent: 'center',
              marginLeft: 20,
              marginTop: 5,
              paddingLeft: 0,
              borderColor: '#0B774B',
              borderRadius: 12,
            }}
          >
            IT SOFTWARE COURSES
          </Button>
        </View>
        <View>
          <Button
            type="outline"
            titleStyle={{ color: '#0B774B', fontSize: 12 }}
            icon={{ size: 15 }}
            buttonStyle={{
              height: 35,
              alignContent: 'center',
              margin: 5,
              flex: 1,
              paddingLeft: 0,
              marginLeft: 10,
              borderColor: '#0B774B',
              borderRadius: 12,
            }}
          >
            BANK COACHING
          </Button>
        </View>
        <View>
          <Button
            type="outline"
            style={{ flex: 1 }}
            titleStyle={{ color: '#0B774B', fontSize: 12 }}
            icon={{ size: 15 }}
            buttonStyle={{
              height: 35,
              flex: 2,
              alignContent: 'center',
              margin: 5,
              paddingLeft: 0,
              borderColor: '#0B774B',
              borderRadius: 12,
            }}
          >
            DevOps and software engineering
          </Button>
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
        <Text style={{ color: 'black' }}>Recommended Course For You</Text>
        <Pressable
          style={{
            color: 'orange',
            marginTop: 10,
          }}
        >
          <Text
            style={{
              color: 'orange',
            }}
            onPress={() => navigation.navigate('HomeSearchResult')}
          >
            See all
          </Text>
        </Pressable>
      </View>
      <ScrollView
        horizontal
        disableIntervalMomentum={true}
        snapToInterval={wp('100%')}
        marginLeft={20}
      >
        {CoursesDetails.map((items, key) => (
          <View key={key}>
            <Card
              width={200}
              height={100}
              borderRadius={10}
              containerStyle={{
                backgroundColor: '#96F2D4',
                padding: 0,
                marginLeft: 5,
              }}
            >
              <Card.Image
                source={items.img}
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 10,
                  marginLeft: 0,
                  padding: 0,
                }}
              >
                <Text
                  style={{
                    width: 90,
                    marginLeft: 105,
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
                    width: 90,
                    marginLeft: 105,
                    fontSize: 10,
                    marginTop: 9,
                    color: 'black',
                  }}
                >
                  {items.published_by}
                </Text>
              </Card.Image>
              <View
                style={{
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  marginLeft: 100,
                }}
              >
                {items.rating.map((item, key) => (
                  <Icon
                    key={key}
                    name="star"
                    style={{ marginLeft: 10, marginTop: -27, color: '#FFC107' }}
                  />
                ))}
              </View>
            </Card>
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
        <Text
          style={{
            color: '#343434',
            marginTop: 20,
          }}
        >
          Our Best Instructors
        </Text>
        <Pressable
          style={{
            color: 'orange',
            marginTop: 20,
            paddingLeft: wp('28%'),
          }}
          onPress={() => navigation.navigate('HomeSearch')}
        >
          <Text
            style={{
              color: 'orange',
            }}
          >
            See all
          </Text>
        </Pressable>
      </View>
      <ScrollView
        horizontal
        disableIntervalMomentum={true}
        snapToInterval={wp('100%')}
      >
        {EducatorDetails.map((items, key) => (
          <View
            style={{ marginTop: 10, alignItems: 'center', marginLeft: 3 }}
            key={key}
          >
            <Card.Image
              source={items.img}
              style={{
                width: 80,
                height: 80,
                borderRadius: 100,
              }}
            />
            <View style={{ flexDirection: 'column', alignItems: 'center' }}>
              <Text
                style={{
                  fontSize: 13,
                  top: 5,
                  fontWeight: 'bold',
                  color: 'black',
                  textAlign: 'center',
                }}
              >
                {items.name}
              </Text>
              <Text
                style={{
                  fontSize: 9,
                  top: 5,
                  textAlign: 'center',
                  color: 'grey',
                  width: 80,
                }}
              >
                {items.info}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  marginTop: 5,
                  width: wp('20%'),
                  marginLeft: wp('7%'),
                }}
              >
                {items.rating.map((item, key) => (
                  <Icon
                    key={key}
                    name="star"
                    style={{ marginLeft: 0, color: '#FFC107' }}
                  />
                ))}
              </View>
            </View>
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
    flex: 1,
    padding: 20,
  },
  responsiveBox: {
    width: wp('100%'),
    height: hp('17%'),
    flexDirection: 'column',
  },
})

export default StudentHome
