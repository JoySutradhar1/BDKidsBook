import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import DayMonthSeason from '../DayMonthSeason';

const EnglishWeek = () => {
  const days = [
    {id: 'day1', name: 'Saturday', sound: 'ed1'},
    {id: 'day2', name: 'Sunday', sound: 'ed2'},
    {id: 'day3', name: 'Monday', sound: 'ed3'},
    {id: 'day4', name: 'Tuesday', sound: 'ed4'},
    {id: 'day5', name: 'Wednesday', sound: 'ed5'},
    {id: 'day6', name: 'Thursday', sound: 'ed6'},
    {id: 'day7', name: 'Friday', sound: 'ed7'},
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
          ইংরেজিতে ৭ দিনের নাম
        </Text>
        <DayMonthSeason array={days} key={111111} />
      </ScrollView>
    </View>
  );
};

export default EnglishWeek;
