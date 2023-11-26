import React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import SoundPlayer from 'react-native-sound-player';

const HumanBody = () => {
  const s = [
    {
      id: '1',
      name: 'চোখ',
      title: 'Eye',
      img: require('../rsc/img/eye-min.jpeg'),
      sound: 'eye',
    },
    {
      id: '2',
      name: 'নাক',
      title: 'Nose',
      img: require('../rsc/img/nose.jpeg'),
      sound: 'nose',
    },
    {
      id: '3',
      name: 'কান',
      title: 'Ear',
      img: require('../rsc/img/ear.jpeg'),
      sound: 'ear',
    },
    {
      id: '4',
      name: 'ঠোঁট',
      title: 'Lips',
      img: require('../rsc/img/lips.jpeg'),
      sound: 'lips',
    },
    {
      id: '5',
      name: 'দাঁত',
      title: 'Teeth',
      img: require('../rsc/img/teeth.jpeg'),
      sound: 'teeth',
    },
    {
      id: '6',
      name: 'গলা',
      title: 'Neck',
      img: require('../rsc/img/neck.png'),
      sound: 'neck',
    },
    {
      id: '7',
      name: 'চুল',
      title: 'Hair',
      img: require('../rsc/img/hair.jpeg'),
      sound: 'hair',
    },
    {
      id: '8',
      name: 'হাত',
      title: 'hand',
      img: require('../rsc/img/hand.jpeg'),
      sound: 'hand',
    },
    {
      id: '9',
      name: 'পা',
      title: 'Leg',
      img: require('../rsc/img/leg.jpeg'),
      sound: 'leg',
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
    <LinearGradient colors={['#c8b6ff', '#ff758f']} style={{flex: 1}}>
      <View style={{flex: 1}}>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            flexDirection: 'row',
            flexWrap: 'wrap',
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
            মানবদেহ
          </Text>
          {s.map(items => (
            <TouchableOpacity
              key={items.id}
              onPress={() => playSound(items.sound)}>
              <View
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#f3f1ff',
                  padding: 5,
                  borderRadius: 20,
                }}>
                <Image
                  style={{
                    height: 250,
                    width: 250,
                    backgroundColor: 'white',
                    borderRadius: 20,
                  }}
                  source={items.img}></Image>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 10,
                  }}>
                  <Text
                    style={{fontSize: 40, fontWeight: 'bold', color: 'black'}}>
                    {items.name}
                  </Text>
                  <Text
                    style={{fontSize: 25, fontWeight: 'bold', color: 'black'}}>
                    ({items.title})
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </LinearGradient>
  );
};

export default HumanBody;
