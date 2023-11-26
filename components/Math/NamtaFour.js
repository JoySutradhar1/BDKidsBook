import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import SoundPlayer from 'react-native-sound-player';
import AppCard from '../AppCard';
import NamtaCard from './NamtaCard';

const NamtaFour = () => {
  const s = [
    {name: '৪ x ১ = ৪', sound: 'n1x4', id: 1},
    {name: '৪ x ২ = ৮', sound: 'n2x4', id: 2},
    {name: '৪ x ৩ = ১২', sound: 'n3x4', id: 3},
    {name: '৪ x ৪ = ১৬', sound: 'n4x4', id: 4},
    {name: '৪ x ৫ = ২০', sound: 'n4x5', id: 5},
    {name: '৪ x ৬ = ২৪', sound: 'n4x6', id: 6},
    {name: '৪ x ৭ = ২৮', sound: 'n4x7', id: 7},
    {name: '৪ x ৮ = ৩২', sound: 'n4x8', id: 8},
    {name: '৪ x ৯ = ৩৬', sound: 'n4x9', id: 9},
    {name: '৪ x ১০ = ৪০', sound: 'n4x10', id: 10},
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
          ৪ এর নামতা
        </Text>
        <NamtaCard array={s}></NamtaCard>
      </ScrollView>
    </View>
  );
};

export default NamtaFour;
