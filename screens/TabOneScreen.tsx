import * as React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

import Swiper from 'react-native-deck-swiper'

import EditScreenInfo from '../components/EditScreenInfo'
// import { Text, View } from '../components/Themed'

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Swiper
        cards={[
          <View>
            <Text>HI</Text>
          </View>,
          'DO',
          'MORE',
          'OF',
          'WHAT',
          'MAKES',
          'YOU',
          'HAPPY',
        ]}
        renderCard={card => {
          return (
            <View style={styles.card}>
              <Text style={styles.text}>{card}</Text>
            </View>
          )
        }}
        onSwiped={cardIndex => {
          console.log(cardIndex)
        }}
        onSwipedAll={() => {
          console.log('onSwipedAll')
        }}
        cardIndex={0}
        backgroundColor={'#4FD0E9'}
        stackSize={3}
      >
        <Button
          onPress={() => {
            console.log('oulala')
          }}
          title="Press me"
        >
          You can press me
        </Button>
      </Swiper>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  card: {
    flex: 1,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#E8E8E8',
    justifyContent: 'center',
    backgroundColor: 'white',
  },

  text: {
    textAlign: 'center',
    fontSize: 50,
    backgroundColor: 'transparent',
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
})
