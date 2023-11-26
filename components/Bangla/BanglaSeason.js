import React, {useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import SoundPlayer from 'react-native-sound-player';
import DayMonthSeason from '../DayMonthSeason';
import LinearGradient from 'react-native-linear-gradient';

const Banglabs = () => {
  const contents = [
    {
      id: 1,
      name: 'গ্রীষ্ম কাল',
      sound: 'bs1',
    },
    {
      id: 2,
      name: 'বর্ষা কাল ',
      sound: 'bs2',
    },
    {
      id: 3,
      name: 'শরৎ কাল ',
      sound: 'bs3',
    },
    {
      id: 4,
      name: 'হেমন্ত কাল ',
      sound: 'bs4',
    },
    {
      id: 5,
      name: 'শীত কাল',
      sound: 'bs5',
    },
    {
      id: 6,
      name: 'বসন্ত কাল',
      sound: 'bs6',
    },
  ];
  return (
    <LinearGradient colors={['#c8b6ff', 'skyblue']} style={{flex: 1}}>
      <View style={{flex: 1}}>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 10,
            gap: 20,
          }}>
          <Text
            style={{
              fontSize: 30,
              fontWeight: 'bold',
              color: 'black',
              width: '100%',
              textAlign: 'center',
              borderBottomWidth: 1,
            }}>
            বাংলাদেশ ছয় ঋতুর দেশ
          </Text>
          <DayMonthSeason array={contents} key={111111} />
        </ScrollView>
      </View>
    </LinearGradient>
  );
};

export default Banglabs;
