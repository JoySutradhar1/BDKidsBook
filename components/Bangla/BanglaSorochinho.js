import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import AppCard from '../AppCard';
import SoundPlayer from 'react-native-sound-player';

const BanglaSorochinho = () => {
  const s = [
    {
      id: '1',
      name: ' া',
      img: require('../../rsc/img/bangla/kaaaaaaaaar1.jpg'),
      title: 'আ-কার',
      sound: 'kar1',
    },
    {
      id: '2',
      name: ' ি',
      img: require('../../rsc/img/bangla/kaaaaaaaaar2.jpg'),
      title: 'ই-কার',
      sound: 'kar2',
    },
    {
      id: '3',
      name: ' ী',
      img: require('../../rsc/img/bangla/kaaaaaaaaar3.jpg'),
      title: 'ঈ-কার',
      sound: 'kar3',
    },
    {
      id: '4',
      name: ' ু	',
      img: require('../../rsc/img/bangla/kaaaaaaaaar4.jpg'),
      title: 'উ-কার',
      sound: 'kar4',
    },
    {
      id: '5',
      name: ' ূ	',
      img: require('../../rsc/img/bangla/kaaaaaaaaar5.jpg'),
      title: 'ঊ-কার',
      sound: 'kar5',
    },
    {
      id: '6',
      name: ' ৃ	',
      img: require('../../rsc/img/bangla/kaaaaaaaaar6.jpg'),
      title: 'ঋ-কার',
      sound: 'kar6',
    },
    {
      id: '7',
      name: ' ে',
      img: require('../../rsc/img/bangla/kaaaaaaaaar7.jpg'),
      title: 'এ-কার',
      sound: 'kar7',
    },
    {
      id: '8',
      name: ' ৈ',
      img: require('../../rsc/img/bangla/kaaaaaaaaar8.jpg'),
      title: 'ঐ-কার',
      sound: 'kar8',
    },
    {
      id: '9',
      name: ' ো	',
      img: require('../../rsc/img/bangla/kaaaaaaaaar9.jpg'),
      title: 'ও-কার',
      sound: 'kar9',
    },
    {
      id: '10',
      name: ' ৌ',
      img: require('../../rsc/img/bangla/kaaaaaaaaar10.jpg'),
      title: 'ঔ-কার',
      sound: 'kar10',
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
          backgroundColor: '#37BFB5',
          flexGrow: 1,
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
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
          স্বরচিহ্ন
        </Text>
        {s.map(items => (
          <TouchableOpacity
            key={items.id}
            onPress={() => playSound(items.sound)}>
            <AppCard
              name={items.name}
              title={items.title}
              id={items.id}
              image={items.img}
              key={items.id}></AppCard>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default BanglaSorochinho;
