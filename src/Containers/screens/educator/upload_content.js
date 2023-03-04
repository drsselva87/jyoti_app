import React, { useState } from 'react'
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

const UploadContent = ({ navigation }) => {
  const [text, onChangeText] = useState('Video Title')
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
            Upload Content
          </Text>
        </View>
      </Card>
      <View
        style={{
          height: hp('79%'),
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
          alignContent: 'center',
        }}
      >
        <TextInput
          style={{
            height: 60,
            width: wp('80%'),
            margin: 20,
            borderWidth: 1,
            padding: 10,
            backgroundColor: '#F9FFFC',
            color: 'gray',
            borderRadius: 5,
            borderColor: '#CDEFE9',
          }}
          value={text}
          onChange={onChangeText}
        />
        <Text
          style={{
            fontSize: 16,
            marginTop: 9,
            color: 'black',
          }}
        >
          Upload Videos
        </Text>
        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <Card
            containerStyle={{
              backgroundColor: '#D8FFF2',
              width: 100,
              height: 100,
              borderColor: '#CDEFE9',
              alignItems: 'center',
              justifyContent: 'center',
              paddingBottom: 0,
              borderRadius: 5,
            }}
          >
            <Icon
              name="camera"
              color="#27BC7F"
              size={40}
              style={{ marginLeft: 30 }}
            />
            <Text
              style={{
                backgroundColor: '#27BC7F',
                color: 'black',
                width: 100,
                paddingLeft: 10,
                marginTop: 20,
              }}
            >
              Take Video
            </Text>
          </Card>
          <Card
            containerStyle={{
              backgroundColor: '#D8FFF2',
              width: 100,
              height: 100,
              borderColor: '#CDEFE9',
              alignItems: 'center',
              justifyContent: 'center',
              paddingBottom: 0,
              borderRadius: 5,
            }}
          >
            <Icon
              name="image"
              color="#27BC7F"
              size={40}
              style={{ marginLeft: 30 }}
            />
            <Text
              style={{
                backgroundColor: '#27BC7F',
                color: 'black',
                width: 100,
                paddingLeft: 21,
                marginTop: 20,
              }}
            >
              Gallery
            </Text>
          </Card>
        </View>
        <Button
          type="solid"
          titleStyle={{ color: 'white', fontSize: 15 }}
          buttonStyle={{
            width: 300,
            marginTop: 100,
            alignContent: 'center',
            backgroundColor: '#0B774B',
            borderRadius: 12,
          }}
        >
          Submit
        </Button>
      </View>
      <View />
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

export default UploadContent
