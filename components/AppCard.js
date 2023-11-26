import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';

const AppCard = ({id, image}) => {
  return (
    <View key={id} style={styles.container}>
      {image ? <Image source={image} style={styles.image}></Image> : null}
    </View>
  );
};

export default AppCard;
const styles = StyleSheet.create({
  container: {
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
    backgroundColor: 'white',
    height: 165,
    width: 165,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    flexDirection: 'column',
  },
  image: {
    height: 165,
    width: 165,
    borderRadius: 20,
    // borderWidth: 2,
    // borderColor: 'gray',
  },
});
