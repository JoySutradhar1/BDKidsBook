import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import SoundPlayer from 'react-native-sound-player';
import AppCard from '../AppCard';
import NamtaCard from './NamtaCard';

const NamtaSeven = () => {
  const s = [
    {name: '৭ x ১ = ৭', sound: 'n1x7', id: 1},
    {name: '৭ x ২ = ১৪', sound: 'n2x7', id: 2},
    {name: '৭ x ৩ = ২১', sound: 'n3x7', id: 3},
    {name: '৭ x ৪ = ২৮', sound: 'n4x7', id: 4},
    {name: '৭ x ৫ = ৩৫', sound: 'n5x7', id: 5},
    {name: '৭ x ৬ = ৪২', sound: 'n6x7', id: 6},
    {name: '৭ x ৭ = ৪৯', sound: 'n7x7', id: 7},
    {name: '৭ x ৮ = ৫৬', sound: 'n7x8', id: 8},
    {name: '৭ x ৯ = ৬৩', sound: 'n7x9', id: 9},
    {name: '৭ x ১০ = ৭০', sound: 'n7x10', id: 10},
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
          ৭ এর নামতা
        </Text>
        <NamtaCard array={s}></NamtaCard>
      </ScrollView>
    </View>
  );
};

export default NamtaSeven;
