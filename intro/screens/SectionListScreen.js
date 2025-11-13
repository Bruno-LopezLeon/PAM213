import { View, Text, StyleSheet, SectionList } from 'react-native'
import React from 'react'

const houses = [
    {
        title: 'Star Wars',
        data: [
            'Luke Skywalker',
            'Leia Organa',
            'Han Solo',
            'Darth Vader',
            'Yoda',
            'Obi-Wan Kenobi',
        ],
    },
    {
        title: 'Marvel',
        data: [
            'Iron Man',
            'Captain America',
            'Thor',
            'Hulk',
            'Black Widow',
        ]
    },
    {
        title: 'DC',
        data: [
            'Superman',
            'Batman',
            'Wonder',
            'Aquaman',
            'Flash',
            'Green Lantern',
        ],
    }
];

const SectionListScreen = () => {
  return (
    <View style={styles.container}>
      <SectionList
        sections={houses}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
        renderSectionHeader={({section}) => (
            <Text style={styles.sectionHeader}>{section.title}</Text>
        )}
        />
    </View>
  )
}

 const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  item: {
    paddingVertical: 6,
    paddingHorizontal: 10,
  },
  sectionHeader: {
    backgroundColor: '#eee',
    paddingVertical: 8,
    paddingHorizontal: 10,
    fontWeight: 'bold',
  }
});

export default SectionListScreen