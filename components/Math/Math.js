import React, {useState} from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Math = props => {
  const contentNames = [
    {
      id: 1,
      name: 'বাংলা সংখ্যা',
      img: require('../../rsc/img/ektdui.jpg'),
      title: 'Bangla Numbers',
      key: 'bangla76547',
    },
    {
      id: 2,
      name: ' ইংরেজি সংখ্যা',
      img: require('../../rsc/img/onetwo.jpg'),
      title: 'English Numbers',
      key: 'english75676',
    },
    {
      id: 3,
      name: 'গুণের নামতা',
      img: require('../../rsc/img/gun.jpg'),
      title: 'Namta',
      key: 'math67887',
    },
  ];
  const [checkId, setCheckId] = useState();
  const handlePress = (item, index) => {
    setCheckId(item.id);
    item.id === index + 1 && props.navigation.navigate(item.title);
  };
  return (
    <LinearGradient colors={['#c8b6ff', '#ff758f']} style={{flex: 1}}>
      <View style={{flex: 1}}>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'center',
            flexWrap: 'wrap',
            padding: 20,
            gap: 20,
          }}>
          <Text
            style={{
              fontSize: 40,
              fontWeight: 'bold',
              width: '100%',
              textAlign: 'center',
              borderBottomWidth: 1,
            }}>
            গণিত
          </Text>
          {contentNames.map((items, index) => (
            <TouchableOpacity
              style={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: 'orange',
                borderRadius: 20,
                shadowColor: 'black',
                shadowOffset: {width: 0, height: 2},
                shadowOpacity: 0.5,
                shadowRadius: 4,
                elevation: 5,
              }}
              key={items.key}
              onPress={() => handlePress(items, index)}>
              <Image
                source={items.img}
                style={{
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20,
                }}></Image>
              <Text style={{fontSize: 40, color: 'blue', fontWeight: 'bold'}}>
                {items.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </LinearGradient>
  );
};

export default Math;
