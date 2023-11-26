// import React from 'react';
// import {Text} from 'react-native';
// import MaskedView from '@react-native-community/masked-view';
// import LinearGradient from 'react-native-linear-gradient';

// const GradientText = props => {
//   return (
//     <MaskedView maskElement={<Text {...props} />}>
//       <LinearGradient
//         colors={['red', 'green']}
//         start={{x: 0, y: 0}}
//         end={{x: 1, y: 0}}>
//         <Text {...props} style={[props.style, {opacity: 0}]} />
//       </LinearGradient>
//     </MaskedView>
//   );
// };
// export default GradientText;
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Svg, LinearGradient, Text, Defs, Stop, TSpan} from 'react-native-svg';

const GradientText = name => {
  return (
    <View style={styles.container}>
      <Svg width="100%" height="100%" viewBox="0 0 200 100">
        <Defs>
          <LinearGradient id="gradient" x1="0" y1="0" x2="100%" y2="0">
            <Stop offset="0%" stopColor="red" />
            <Stop offset="100%" stopColor="blue" />
          </LinearGradient>
        </Defs>
        <Text
          x="50%"
          y="50%"
          fontSize="24"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="url(#gradient)">
          <TSpan fill="url(#gradient)">Gradient Text</TSpan>
        </Text>
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default GradientText;
