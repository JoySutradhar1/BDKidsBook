import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import SoundPlayer from 'react-native-sound-player';
import AppCard from '../AppCard';
import NamtaCard from './NamtaCard';

const NamtaFive = () => {
  const s = [
    {name: '৫ x ১ = ৫', sound: 'n1x5', id: 1},
    {name: '৫ x ২ = ১০', sound: 'n2x5', id: 2},
    {name: '৫ x ৩ = ১৫', sound: 'n3x5', id: 3},
    {name: '৫ x ৪ = ২০', sound: 'n4x5', id: 4},
    {name: '৫ x ৫ = ২৫', sound: 'n5x5', id: 5},
    {name: '৫ x ৬ = ৩০', sound: 'n5x6', id: 6},
    {name: '৫ x ৭ = ৩৫', sound: 'n5x7', id: 7},
    {name: '৫ x ৮ = ৪০', sound: 'n5x8', id: 8},
    {name: '৫ x ৯ = ৪৫', sound: 'n5x9', id: 9},
    {name: '৫ x ১০ = ৫০', sound: 'n5x10', id: 10},
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
          ৫ এর নামতা
        </Text>
        <NamtaCard array={s}></NamtaCard>
      </ScrollView>
    </View>
  );
};

export default NamtaFive;
