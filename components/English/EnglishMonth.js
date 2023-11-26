import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import AppCard from '../AppCard';
import SoundPlayer from 'react-native-sound-player';
import DayMonthSeason from '../DayMonthSeason';

const EnglishMonth = () => {
  const month = [
    {id: 'month1', name: 'January', sound: 'e_m1'},
    {id: 'month2', name: 'February', sound: 'e_m2'},
    {id: 'month3', name: 'March', sound: 'e_m3'},
    {id: 'month4', name: 'April', sound: 'e_m4'},
    {id: 'month5', name: 'May', sound: 'e_m5'},
    {id: 'month6', name: 'June', sound: 'e_m6'},
    {id: 'month7', name: 'July', sound: 'e_m7'},
    {id: 'month8', name: 'August', sound: 'e_m8'},
    {id: 'month9', name: 'September', sound: 'e_m9'},
    {id: 'month10', name: 'October', sound: 'e_m10'},
    {id: 'month11', name: 'November', sound: 'e_m11'},
    {id: 'month12', name: 'December', sound: 'e_m12'},
  ];
  return (
    <View style={{flex: 1}}>
      <ScrollView
        contentContainerStyle={{
          backgroundColor: 'wheat',
          flexGrow: 1,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 20,
          gap: 40,
        }}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            width: '100%',
            color: 'black',
            textAlign: 'center',
            borderBottomWidth: 1,
          }}>
          ইংরেজিতে ১২ মাসের নাম
        </Text>
        <DayMonthSeason array={month} key={111111} />
      </ScrollView>
    </View>
  );
};

export default EnglishMonth;
