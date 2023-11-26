import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import SoundPlayer from 'react-native-sound-player';
import AppCard from '../AppCard';
import NamtaCard from './NamtaCard';

const NamtaSix = () => {
  const s = [
    {name: '৬ x ১ = ৬', sound: 'n1x6', id: 1},
    {name: '৬ x ২ = ১২', sound: 'n2x6', id: 2},
    {name: '৬ x ৩ = ১৮', sound: 'n3x6', id: 3},
    {name: '৬ x ৪ = ২৪', sound: 'n4x6', id: 4},
    {name: '৬ x ৫ = ৩০', sound: 'n5x6', id: 5},
    {name: '৬ x ৬ = ৩৬', sound: 'n6x6', id: 6},
    {name: '৬ x ৭ = ৪২', sound: 'n6x7', id: 7},
    {name: '৬ x ৮ = ৪৮', sound: 'n6x8', id: 8},
    {name: '৬ x ৯ = ৫৪', sound: 'n6x9', id: 9},
    {name: '৬ x ১০ = ৬০', sound: 'n6x10', id: 10},
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
          ৬ এর নামতা
        </Text>
        <NamtaCard array={s}></NamtaCard>
      </ScrollView>
    </View>
  );
};

export default NamtaSix;
