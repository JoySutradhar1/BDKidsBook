import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import SoundPlayer from 'react-native-sound-player';
import AppCard from '../AppCard';
import NamtaCard from './NamtaCard';

const NamtaNine = () => {
  const s = [
    {name: '৯ x ১ = ৯', sound: 'n1x9', id: 1},
    {name: '৯ x ২ = ১৮', sound: 'n2x9', id: 2},
    {name: '৯ x ৩ = ২৭', sound: 'n3x9', id: 3},
    {name: '৯ x ৪ = ৩৬', sound: 'n4x9', id: 4},
    {name: '৯ x ৫ = ৪৫', sound: 'n5x9', id: 5},
    {name: '৯ x ৬ = ৫৪', sound: 'n6x9', id: 6},
    {name: '৯ x ৭ = ৬৩', sound: 'n7x9', id: 7},
    {name: '৯ x ৮ = ৭২', sound: 'n8x9', id: 8},
    {name: '৯ x ৯ = ৮১', sound: 'n9x9', id: 9},
    {name: '৯ x ১০ = ৯০', sound: 'n9x10', id: 10},
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
          ৯ এর নামতা
        </Text>
        <NamtaCard array={s}></NamtaCard>
      </ScrollView>
    </View>
  );
};

export default NamtaNine;
