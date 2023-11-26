import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import DayMonthSeason from '../DayMonthSeason';
import LinearGradient from 'react-native-linear-gradient';
const BanglaMonths = () => {
  const contents = [
    {
      id: 1,
      name: 'বৈশাখ',
      sound: 'b_m1',
    },
    {
      id: 2,
      name: 'জ্যৈষ্ঠ',
      sound: 'b_m2',
    },
    {
      id: 3,
      name: 'আষাঢ়',
      sound: 'b_m3',
    },
    {
      id: 4,
      name: 'শ্রাবণ',
      sound: 'b_m4',
    },
    {
      id: 5,
      name: 'ভাদ্র',
      sound: 'b_m5',
    },
    {
      id: 6,
      name: 'আশ্বিন',
      sound: 'b_m6',
    },
    {
      id: 7,
      name: 'কার্তিক',
      sound: 'b_m7',
    },
    {
      id: 8,
      name: 'অগ্রহায়ণ',
      sound: 'b_m8',
    },
    {
      id: 9,
      name: 'পৌষ',
      sound: 'b_m9',
    },
    {
      id: 10,
      name: 'মাঘ',
      sound: 'b_m10',
    },
    {
      id: 11,
      name: 'ফাল্গুন',
      sound: 'b_m11',
    },
    {
      id: 12,
      name: 'চৈত্র',
      sound: 'b_m12',
    },
  ];
  return (
    <LinearGradient colors={['#c8b6ff', '#ff758f']} style={{flex: 1}}>
      <View style={{flex: 1}}>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            flexWrap: 'wrap',
            padding: 10,
            gap: 20,
          }}>
          <Text
            style={{
              fontSize: 40,
              fontWeight: 'bold',
              width: '100%',
              color: 'black',
              textAlign: 'center',
              borderBottomWidth: 1,
            }}>
            ১২ মাসে ১ বছর
          </Text>
          <DayMonthSeason array={contents} key={111111} />
        </ScrollView>
      </View>
    </LinearGradient>
  );
};

export default BanglaMonths;
