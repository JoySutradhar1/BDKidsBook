import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import SoundPlayer from 'react-native-sound-player';
import AppCard from '../AppCard';
import AlphabetCard from '../AlphabetCard';

const EnglishNumbers = () => {
  const s = [
    {
      id: 1,
      sound: 'me1',
      title: 'One',
      name: '1',
    },
    {
      id: 2,
      sound: 'me2',
      title: 'Two',
      name: '2',
    },
    {
      id: 3,
      sound: 'me3',
      title: 'Three',
      name: '3',
    },
    {
      id: 4,
      sound: 'me4',
      title: 'Four',
      name: '4',
    },
    {
      id: 5,
      sound: 'me5',
      title: 'Five',
      name: '5',
    },
    {
      id: 6,
      sound: 'me6',
      title: 'Six',
      name: '6',
    },
    {
      id: 7,
      sound: 'me7',
      title: 'Seven',
      name: '7',
    },
    {
      id: 8,
      sound: 'me8',
      title: 'Eight',
      name: '8',
    },
    {
      id: 9,
      sound: 'me9',
      title: 'Nine',
      name: '9',
    },
    {
      id: 10,
      sound: 'me10',
      title: 'Ten',
      name: '10',
    },
    {
      id: 11,
      sound: 'me11',
      title: 'Eleven',
      name: '11',
    },
    {
      id: 12,
      sound: 'me12',
      title: 'Twelve',
      name: '12',
    },
    {
      id: 13,
      sound: 'me13',
      title: 'Thirteen',
      name: '13',
    },
    {
      id: 14,
      sound: 'me14',
      title: 'Fourteen',
      name: '14',
    },
    {
      id: 15,
      sound: 'me15',
      title: 'Fifteen',
      name: '15',
    },
    {
      id: 16,
      sound: 'me16',
      title: 'Sixteen',
      name: '16',
    },
    {
      id: 17,
      sound: 'me17',
      title: 'Seventeen',
      name: '17',
    },
    {
      id: 18,
      sound: 'me18',
      title: 'Eighteen',
      name: '18',
    },
    {
      id: 19,
      sound: 'me19',
      title: 'Nineteen',
      name: '19',
    },
    {
      id: 20,
      sound: 'me20',
      title: 'Twenty',
      name: '20',
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
          ইংরেজি সংখ্যা
        </Text>
        <AlphabetCard array={s}></AlphabetCard>
      </ScrollView>
    </View>
  );
};

export default EnglishNumbers;
