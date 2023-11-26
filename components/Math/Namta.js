import React, {useState} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {Defs, LinearGradient, Stop, Svg, TSpan} from 'react-native-svg';

const Namta = props => {
  const contentNames = [
    {
      id: 1,
      title: 'One',
      name: '১ এর নামতা',
    },
    {
      id: 2,
      title: 'Two',
      name: '২ এর নামতা',
    },
    {
      id: 3,
      title: 'Three',
      name: '৩ এর নামতা',
    },
    {
      id: 4,
      title: 'Four',
      name: '৪ এর নামতা',
    },
    {
      id: 5,
      title: 'Five',
      name: '৫ এর নামতা',
    },
    {
      id: 6,
      title: 'Six',
      name: '৬ এর নামতা',
    },
    {
      id: 7,
      title: 'Seven',
      name: '৭ এর নামতা',
    },
    {
      id: 8,
      title: 'Eight',
      name: '৮ এর নামতা',
    },
    {
      id: 9,
      title: 'Nine',
      name: '৯ এর নামতা',
    },
    {
      id: 10,
      title: 'Ten',
      name: '১০ এর নামতা',
    },
  ];
  const [checkId, setCheckId] = useState();
  const handlePress = (item, index) => {
    setCheckId(item.id);
    item.id === index + 1 && props.navigation.navigate(item.title);
  };
  return (
    <View style={{flex: 1}}>
      <ScrollView
        contentContainerStyle={{
          backgroundColor: '#fc0580',
          flexGrow: 1,
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          flexWrap: 'wrap',
          padding: 20,
          gap: 30,
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
          গুণের নামতা
        </Text>
        {contentNames.map((items, index) => (
          <TouchableOpacity
            key={items.id}
            title={items.title}
            onPress={() => handlePress(items, index)}>
            <View
              check={checkId}
              style={{
                height: 70,
                width: 300,
                backgroundColor: 'white',
                borderRadius: 20,
              }}>
              <Svg width="100%" height="100%" viewBox="0 0 300 40">
                <Defs>
                  <LinearGradient
                    id="gradient"
                    x1="0"
                    y1="0"
                    x2="100%"
                    y2="100%">
                    <Stop offset="0%" stopColor="red" />
                    <Stop offset="100%" stopColor="blue" />
                  </LinearGradient>
                </Defs>
                <Text>
                  <TSpan
                    style={{
                      fontWeight: 'bold',
                    }}
                    x="50%"
                    y="50%"
                    fontSize="38"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill="url(#gradient)">
                    {items.name}
                  </TSpan>
                </Text>
              </Svg>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default Namta;
