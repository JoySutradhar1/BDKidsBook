import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import SoundPlayer from 'react-native-sound-player';
import AppCard from '../AppCard';
import NamtaCard from './NamtaCard';

const NamtaTen = () => {
  const s = [
    {name: '১০ x ১ = ১০', sound: 'n1x10', id: 1},
    {name: '১০ x ২ = ২০', sound: 'n2x10', id: 2},
    {name: '১০ x ৩ = ৩০', sound: 'n3x10', id: 3},
    {name: '১০ x ৪ = ৪০', sound: 'n4x10', id: 4},
    {name: '১০ x ৫ = ৫০', sound: 'n5x10', id: 5},
    {name: '১০ x ৬ = ৬০', sound: 'n6x10', id: 6},
    {name: '১০ x ৭ = ৭০', sound: 'n7x10', id: 7},
    {name: '১০ x ৮ = ৮০', sound: 'n8x10', id: 8},
    {name: '১০ x ৯ = ৯০', sound: 'n9x10', id: 9},
    {name: '১০ x ১০ = ১০০', sound: 'n10x10', id: 10},
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
          10 এর নামতা
        </Text>
        <NamtaCard array={s}></NamtaCard>
      </ScrollView>
    </View>
  );
};

export default NamtaTen;
