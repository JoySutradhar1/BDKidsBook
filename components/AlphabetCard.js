import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import SoundPlayer from 'react-native-sound-player';
import {Defs, LinearGradient, Stop, Svg, TSpan} from 'react-native-svg';

const AlphabetCard = props => {
  const playSound = track => {
    try {
      SoundPlayer.playSoundFile(track, 'mp3');
    } catch (e) {
      console.log('Error playing sound:', e);
    }
  };
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
      }}>
      {props.array.map((items, index) => (
        <TouchableOpacity
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            shadowColor: 'black',
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.5,
            shadowRadius: 4,
            elevation: 5,
            backgroundColor: 'orange',
            height: 150,
            width: 150,
            borderRadius: 20,
            marginBottom: 10,
            flexDirection: 'column',
          }}
          key={items.id}
          onPress={() => playSound(items.sound)}>
          <Svg width="100%" height="100%" viewBox="0 0 150 90">
            <Defs>
              <LinearGradient id="gradient" x1="0" y1="0" x2="100%" y2="100%">
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
                fontSize="80"
                textAnchor="middle"
                dominantBaseline="middle"
                fill="url(#gradient)">
                {items.name}
              </TSpan>
            </Text>
          </Svg>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default AlphabetCard;

// import React, {useState, useCallback} from 'react';
// import {Dimensions, FlatList, TouchableOpacity} from 'react-native';
// import SoundPlayer from 'react-native-sound-player';
// import {Defs, LinearGradient, Stop, Svg, Text, TSpan} from 'react-native-svg';

// const AlphabetCard = ({array}) => {
//   const playSound = track => {
//     try {
//       SoundPlayer.playSoundFile(track, 'mp3');
//     } catch (e) {
//       console.log('Error playing sound:', e);
//     }
//   };

//   const [windowWidth, setWindowWidth] = useState(
//     Dimensions.get('screen').width,
//   );

//   const updateWindowWidth = useCallback(() => {
//     setWindowWidth(Dimensions.get('screen').width);
//   }, []);

//   const itemWidth = windowWidth * 0.4;

//   const renderItem = ({item}) => (
//     <TouchableOpacity
//       style={{
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         shadowColor: 'black',
//         shadowOffset: {width: 0, height: 2},
//         shadowOpacity: 0.5,
//         shadowRadius: 4,
//         elevation: 5,
//         backgroundColor: 'orange',
//         height: 150,
//         width: 150,
//         borderRadius: 20,
//         marginBottom: 10,
//         flexDirection: 'column',
//         margin: 10,
//       }}
//       onPress={() => playSound(item.sound)}>
//       <Svg width="100%" height="100%" viewBox="0 0 150 90">
//         <Defs>
//           <LinearGradient id="gradient" x1="0" y1="0" x2="100%" y2="100%">
//             <Stop offset="0%" stopColor="red" />
//             <Stop offset="100%" stopColor="blue" />
//           </LinearGradient>
//         </Defs>
//         <Text>
//           <TSpan
//             style={{
//               fontWeight: 'bold',
//             }}
//             x="50%"
//             y="50%"
//             fontSize="80"
//             textAnchor="middle"
//             dominantBaseline="middle"
//             fill="url(#gradient)">
//             {item.name}
//           </TSpan>
//         </Text>
//       </Svg>
//     </TouchableOpacity>
//   );

//   const numColumns = Math.floor(windowWidth / itemWidth);

//   return (
//     <FlatList
//       data={array}
//       renderItem={renderItem}
//       keyExtractor={item => item.id}
//       numColumns={numColumns}
//       contentContainerStyle={{
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//       }}
//       onLayout={updateWindowWidth} // Re-calculate width on layout change
//     />
//   );
// };

// export default AlphabetCard;
