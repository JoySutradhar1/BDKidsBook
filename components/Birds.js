import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import SoundPlayer from 'react-native-sound-player';
import AppCard from './AppCard';
import CreatureCard from './CreatureCard';
import LinearGradient from 'react-native-linear-gradient';

const Birds = () => {
  const s = [
    {
      id: '1',
      name: 'দোয়েল',
      title: 'Magpie',
      img: require('../rsc/img/birds/duyel.jpg'),
      sound: 'magpie',
    },
    {
      id: '2',
      name: 'তোঁতা',
      title: 'Parrot',
      img: require('../rsc/img/birds/tiya.jpg'),
      sound: 'parrot',
    },
    {
      id: '3',
      name: 'ময়না',
      title: 'Mynah',
      img: require('../rsc/img/birds/moyna.jpg'),
      sound: 'mynah',
    },
    {
      id: '4',
      name: 'হাঁস',
      title: 'Duck',
      img: require('../rsc/img/birds/has.jpg'),
      sound: 'duck',
    },
    {
      id: '5',
      name: 'মুরগি',
      title: 'Hen',
      img: require('../rsc/img/birds/hen.jpg'),
      sound: 'hen',
    },
    {
      id: '6',
      name: 'পেঙ্গুইন',
      title: 'Penguin',
      img: require('../rsc/img/birds/penguin.jpg'),
      sound: 'penguin',
    },
    {
      id: '7',
      name: 'ময়ূর',
      title: 'Peacock',
      img: require('../rsc/img/birds/mayur.jpg'),
      sound: 'peacock',
    },
    {
      id: '8',
      name: 'কাকাতুয়া',
      title: 'Cockatoo',
      img: require('../rsc/img/birds/kakatua.jpg'),
      sound: 'cockatoo',
    },
    {
      id: '9',
      name: 'ঈগল',
      title: 'Eagle',
      img: require('../rsc/img/birds/egle.jpg'),
      sound: 'eagle',
    },
    {
      id: '10',
      name: 'বক',
      title: 'Heron',
      img: require('../rsc/img/birds/bok.jpg'),
      sound: 'heron',
    },
  ];
  return (
    <LinearGradient colors={['#c8b6ff', '#ff758f']} style={{flex: 1}}>
      <ScrollView
        contentContainerStyle={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 20,
          gap: 40,
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
          পাখির নাম
        </Text>
        <CreatureCard array={s}></CreatureCard>
      </ScrollView>
    </LinearGradient>
  );
};

export default Birds;
