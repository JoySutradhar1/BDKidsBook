import React, {useState} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import AppCard from '../AppCard';
import LinearGradient from 'react-native-linear-gradient';

const Bangla = props => {
  const contents = [
    {
      id: 11,
      name: 'স্বরবর্ণ',
      img: require('../../rsc/img/bangla/soroborno1-reduce.png'),
      title: 'Bangla Vowels',
      key: 'gsfyvcsjf',
    },
    {
      id: 12,
      name: 'ব্যঞ্জনবর্ণ',
      img: require('../../rsc/img/bangla/benjonTiny.png'),
      title: 'Bangla Consonant',
      key: 'kchsk',
    },
    {
      id: 13,
      name: 'স্বরচিহ্ন / কার',
      img: require('../../rsc/img/bangla/sorochinho.png'),
      title: 'kar',
      key: 'kjhsdcj',
    },
    {
      id: 14,
      name: 'ফলা',
      img: require('../../rsc/img/bangla/folaaaa.png'),
      title: 'fola',
      key: 'jchgs',
    },
    {
      id: 15,
      name: 'সপ্তাহ',
      img: require('../../rsc/img/bangla/banglaweek.png'),
      title: 'BanglaWeek',
      key: 'ksbdcks',
    },
    {
      id: 16,
      name: 'মাস',
      img: require('../../rsc/img/bangla/mmmmmm-min.png'),
      title: 'BanglaMonths',
      key: 'cnjs',
    },
    {
      id: 17,
      name: 'ঋতু',
      img: require('../../rsc/img/bangla/ritu111.png'),
      title: 'BanglaSeason',
      key: 'kcvskk',
    },
  ];
  const [checkId, setCheckId] = useState();
  const handlePress = (item, index) => {
    setCheckId(item.id);
    item.id === index + 11 && props.navigation.navigate(item.title);
  };
  return (
    <LinearGradient
      colors={['green', 'green', 'red', 'green', 'green']}
      style={{flex: 1}}>
      <View style={{flex: 1}}>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            flexWrap: 'wrap',
            padding: 10,
            gap: 20,
          }}>
          <Text
            style={{
              fontSize: 40,
              fontWeight: 'bold',
              color: 'black',
              width: '100%',
              textAlign: 'center',
              borderBottomWidth: 1,
            }}>
            বাংলা
          </Text>
          {contents.map((items, index) => (
            <TouchableOpacity
              key={items.key}
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

export default Bangla;
