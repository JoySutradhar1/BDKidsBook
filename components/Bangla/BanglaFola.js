import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import AppCard from '../AppCard';
import SoundPlayer from 'react-native-sound-player';

const BanglaFola = () => {
  const s = [
    {
      id: '1',
      name: ' ্য',
      img: require('../../rsc/img/bangla/jofolaa.png'),
      title: 'য-ফলা',
      sound: 'fola1',
    },
    {
      id: '2',
      name: ' ্র',
      img: require('../../rsc/img/bangla/rofolaa.png'),
      title: 'র-ফলা',
      sound: 'fola2',
    },
    {
      id: '3',
      name: 'ল',
      img: require('../../rsc/img/bangla/lo-fola.png'),
      title: 'ল-ফলা',
      sound: 'fola3',
    },
    {
      id: '4',
      name: 'ব',
      img: require('../../rsc/img/bangla/bofola.png'),
      title: 'ব-ফলা',
      sound: 'fola4',
    },
    {
      id: '5',
      name: 'ন',
      img: require('../../rsc/img/bangla/no-fola.png'),
      title: 'ন-ফলা',
      sound: 'fola5',
    },
    {
      id: '6',
      name: 'ম',
      img: require('../../rsc/img/bangla/mofolaa.png'),
      title: 'ম-ফলা',
      sound: 'fola6',
    },
    {
      id: '7',
      name: '´',
      img: require('../../rsc/img/bangla/ref.png'),
      title: 'রেফ-ফলা',
      sound: 'fola7',
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
          backgroundColor: 'orange',
          flexGrow: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
          padding: 20,
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
          ফলা চিহ্ন
        </Text>
        {s.map(items => (
          <TouchableOpacity
            key={items.id}
            onPress={() => playSound(items.sound)}>
            <AppCard image={items.img}></AppCard>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default BanglaFola;
