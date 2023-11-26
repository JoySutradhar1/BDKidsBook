import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import SoundPlayer from 'react-native-sound-player';
import AppCard from '../AppCard';
import AlphabetCard from '../AlphabetCard';

const BanglaNumbers = () => {
  const s = [
    {
      id: 1,
      sound: 'mb1',
      title: 'এক',
      name: '১',
    },
    {
      id: 2,
      sound: 'mb2',
      title: 'দুই',
      name: '২',
    },
    {
      id: 3,
      sound: 'mb3',
      title: 'তিন',
      name: '৩',
    },
    {
      id: 4,
      sound: 'mb4',
      title: 'চার',
      name: '৪',
    },
    {
      id: 5,
      sound: 'mb5',
      title: 'পাঁচ',
      name: '৫',
    },
    {
      id: 6,
      sound: 'mb6',
      title: 'ছয়',
      name: '৬',
    },
    {
      id: 7,
      sound: 'mb7',
      title: 'সাত',
      name: '৭',
    },
    {
      id: 8,
      sound: 'mb8',
      title: 'আট',
      name: '৮',
    },
    {
      id: 9,
      sound: 'mb9',
      title: 'নয়',
      name: '৯',
    },
    {
      id: 10,
      sound: 'mb10',
      title: 'দশ',
      name: '১০',
    },
    {
      id: 11,
      sound: 'mb11',
      title: 'এগারো',
      name: '১১',
    },
    {
      id: 12,
      sound: 'mb12',
      title: 'বারো',
      name: '১২',
    },
    {
      id: 13,
      sound: 'mb13',
      title: 'তেরো',
      name: '১৩',
    },
    {
      id: 14,
      sound: 'mb14',
      title: 'চৌদ্দ',
      name: '১৪',
    },
    {
      id: 15,
      sound: 'mb15',
      title: 'পনেরো',
      name: '১৫',
    },
    {
      id: 16,
      sound: 'mb16',
      title: 'ষোল',
      name: '১৬',
    },
    {
      id: 17,
      sound: 'mb17',
      title: 'সতেরো',
      name: '১৭',
    },
    {
      id: 18,
      sound: 'mb18',
      title: 'আঠারো',
      name: '১৮',
    },
    {
      id: 19,
      sound: 'mb19',
      title: 'উনিশ',
      name: '১৯',
    },
    {
      id: 20,
      sound: 'mb20',
      title: 'বিশ',
      name: '২০',
    },
  ];

  const playSound = track => {
    try {
      SoundPlayer.playSoundFile(track, 'mp3');
    } catch (e) {
      console.log('Error playing sound:', e);
    }
  };
  return (
    <View style={{flex: 1}}>
      <ScrollView
        contentContainerStyle={{
          backgroundColor: 'wheat',
          flexGrow: 1,
          justifyContent: 'center',
          alignItems: 'center',
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
          বাংলা সংখ্যা
        </Text>
        <AlphabetCard array={s}></AlphabetCard>
      </ScrollView>
    </View>
  );
};

export default BanglaNumbers;
