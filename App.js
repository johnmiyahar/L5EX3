import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, SectionList, Button, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  button: {
    margin: 10,
    padding: 10,
  },
  opacityStyle: {
    borderWidth: 1,
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'lightgray'
  },
  textStyle: {
    fontSize: 15,
    margin: 10,
    textAlign: 'left',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  headerText: {
    fontSize: 20,
    marginLeft: 10,
    fontWeight: 'bold',
    color: '#000',
  },
  imageStyle: {
    width: 200,
    height: 300,
    margin: 10,
  },
});

const datasource = [
  {
    title: 'GRASS',
    bgColor: 'lightgreen',
    iconColor: 'darkgreen',
    iconName: 'leaf',
    data: [
      {
        key: 'Bulbasaur',
        imageUrl: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_1-2x.png',
      },
      {
        key: 'Butterfree',
        imageUrl: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_12-2x.png',
      },
    ],
  },
  {
    title: 'WATER',
    bgColor: 'skyblue',
    iconColor: 'darkblue',
    iconName: 'water',
    data: [
      {
        key: 'Squirtle',
        imageUrl: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_7-2x.png',
      },
      {
        key: 'Psyduck',
        imageUrl: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_54-2x.png',
      },
    ],
  },
];

const renderItem = ({item}) => {
  return (
      <TouchableOpacity style={styles.opacityStyle}>
        <Text style={styles.textStyle}>{item.key}</Text>
        <Image source={{uri: item.imageUrl}} style={styles.imageStyle} />
      </TouchableOpacity>
  );
};

const App = () => {
  return (
      <View style={styles.container}>
        <Button style={styles.button} title="Add Pokémon" onPress={() => {}} />
        <SectionList
            sections={datasource}
            renderItem={renderItem}
            renderSectionHeader={({section: {title, bgColor, iconColor, iconName}}) => (
                <View style={[styles.headerContainer, {backgroundColor: bgColor}]}>
                  <Icon name={iconName} size={20} color={iconColor} />
                  <Text style={styles.headerText}>{title}</Text>
                </View>
            )}
            keyExtractor={(item) => item.key}
        />
      </View>
  );
};

export default App;
