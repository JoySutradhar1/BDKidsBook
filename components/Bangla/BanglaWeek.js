import React, {useState} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import DayMonthSeason from '../DayMonthSeason';
import LinearGradient from 'react-native-linear-gradient';
const BanglaWeek = () => {
  const contents = [
    {
      id: 100,
      name: 'শনিবার',
      sound: 'bd1',
    },
    {
      id: 200,
      name: 'রবিবার',
      sound: 'bd2',
    },
    {
      id: 300,
      name: 'সোমবার',
      sound: 'bd3',
    },
    {
      id: 400,
      name: 'মঙ্গলবার',
      sound: 'bd4',
    },
    {
      id: 500,
      name: 'বুধবার',
      sound: 'bd5',
    },
    {
      id: 600,
      name: 'বৃহস্পতিবার',
      sound: 'bd6',
    },
    {
      id: 700,
      name: 'শুক্রবার',
      sound: 'bd7',
    },
  ];
  return (
    <LinearGradient colors={['#c8b6ff', '#4ed2ed']} style={{flex: 1}}>
      <View style={{flex: 1}}>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 10,
            gap: 10,
          }}>
          <Text
            style={{
              fontSize: 40,
              color: 'black',
              fontWeight: 'bold',
              width: '100%',
              textAlign: 'center',
              borderBottomWidth: 1,
            }}>
            বাংলা ৭ দিনের নাম
          </Text>
          <DayMonthSeason array={contents} key={111111} />
        </ScrollView>
      </View>
    </LinearGradient>
  );
};

export default BanglaWeek;
