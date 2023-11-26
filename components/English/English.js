import React, {useEffect, useState} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import AppCard from '../AppCard';
import jsonData from '../../rsc/EnglishLetter.json';
import LinearGradient from 'react-native-linear-gradient';

const English = props => {
  const contents = [
    {
      id: 1,
      name: 'Capital Letter',
      img: require('../../rsc/img/english/capital.png'),
      title: 'Capital Letters',
    },
    {
      id: 2,
      name: 'Small Letter',
      img: require('../../rsc/img/english/small.png'),
      title: 'Small Letters',
    },
    {
      id: 3,
      name: 'Week',
      img: require('../../rsc/img/english/week.png'),
      title: 'Week',
    },
    {
      id: 4,
      name: 'Month',
      img: require('../../rsc/img/english/months.png'),
      title: 'Month',
    },
    {
      id: 5,
      name: 'Season',
      img: require('../../rsc/img/english/seasons.jpg'),
      title: 'Season',
    },
  ];
  const [letters, setLetters] = useState([]);
  const [checkId, setCheckId] = useState();
  const handlePress = (item, index) => {
    setCheckId(item.id);
    item.id === index + 1 && props.navigation.navigate(item.title);
  };
  return (
    <LinearGradient
      style={{flex: 1}}
      colors={['#dec9e9', '#a06cd5', '#7251b5']}>
      <View style={{flex: 1}}>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            flexWrap: 'wrap',
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
            ইংরেজি
          </Text>
          {contents.map((items, index) => (
            <TouchableOpacity
              key={items.id}
              onPress={() => handlePress(items, index)}>
              <AppCard
                id={items.id}
                image={items.img}
                check={checkId}></AppCard>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </LinearGradient>
  );
};

export default English;
