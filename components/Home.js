import React, {useState} from 'react';
import {Dimensions, ScrollView, TouchableOpacity, View} from 'react-native';
import AppCard from './AppCard';
import PageLogo from './PageLogo';
import LinearGradient from 'react-native-linear-gradient';
const Home = props => {
  const contentNames = [
    {
      id: 1,
      name: 'বাংলা',
      title: 'Bangla',
      img: require('../rsc/img/title/bangla.jpg'),
      key: 'bangla76547',
    },
    {
      id: 2,
      name: ' ইংরেজি',
      title: 'English',
      img: require('../rsc/img/title/english.jpg'),
      key: 'english75676',
    },
    {
      id: 3,
      name: 'গণিত',
      title: 'Math',
      img: require('../rsc/img/title/mathf.jpg'),
      key: 'math67887',
    },
    {
      id: 4,
      name: 'ফুলের নাম',
      title: 'Flowers',
      img: require('../rsc/img/title/flowers.jpg'),
      key: 'flowers678989',
    },
    {
      id: 5,
      name: 'ফলের নাম',
      title: 'Fruits',
      img: require('../rsc/img/title/fruit1.jpg'),
      key: 'fruits_name7866677',
    },
    {
      id: 6,
      name: ' পশুর নাম',
      title: 'Animal',
      img: require('../rsc/img/title/animal1.jpg'),
      key: 'animal8778879789',
    },
    {
      id: 7,
      name: 'পাখির নাম',
      title: 'Birds',
      img: require('../rsc/img/title/birds1.jpg'),
      key: 'birds879787897',
    },
    {
      id: 8,
      name: 'মানবদেহ',
      title: 'Human',
      img: require('../rsc/img/title/human1.jpg'),
      key: 'human7987987987',
    },
    {
      id: 9,
      name: 'চলো লিখি',
      title: 'Write',
      img: require('../rsc/img/title/write1.jpg'),
      key: 'human79879879878',
    },
  ];
  const [checkId, setCheckId] = useState();
  const handlePress = (item, index) => {
    setCheckId(item.id);
    item.id === index + 1 && props.navigation.navigate(item.title);
  };
  return (
    <View style={{flex: 1}}>
      <ScrollView style={{flexGrow: 1}}>
        <LinearGradient
          colors={['#FF0036', '#FE5E7F', '#ffe0e9']}
          style={{flex: 1}}>
          <View
            style={{
              height: 235,
              width: '100%',
              backgroundColor: 'skyblue',
              borderBottomRightRadius: 100,
              borderBottomLeftRadius: 100,
            }}>
            <PageLogo></PageLogo>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              flexWrap: 'wrap',
              padding: 10,
              gap: 20,
            }}>
            {contentNames.map((items, index) => (
              <TouchableOpacity
                key={items.key}
                onPress={() => handlePress(items, index)}>
                <AppCard
                  key={items.key}
                  id={items.key}
                  name={items.name}
                  image={items.img}
                  check={checkId}></AppCard>
              </TouchableOpacity>
            ))}
          </View>
        </LinearGradient>
      </ScrollView>
    </View>
  );
};

export default Home;
