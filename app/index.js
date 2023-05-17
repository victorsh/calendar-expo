import React, { useState, useEffect, useRef } from 'react'
import { Text, View, Pressable, StyleSheet } from "react-native";
import Movies from './components/movies'
import alert from './components/alert'
import Tree from './tree'
import { Canvas, useFrame } from '@react-three/fiber/native'


export default function Main() {
  const [active, setActive] = useState(false)
  const pressHandler = () => {
    alert('Smiple Button Press')
    setActive(!active)
  }

  return (
    <View>
      <View style={styles.spView}></View>
      <Text>Index page</Text>
      <Pressable
        onPress={() => pressHandler()}
        style={({pressed}) => [
          {
            backgroundColor: pressed ? 'blue' : 'red'
          },
          {padding: 20, alignItems: 'center', justifyContent: 'center'}
        ]}
      >
        <Text>Click</Text>
      </Pressable>
      {active && <Text>Active!</Text>}
      <View>
        <Movies />
      </View>
      <View style={{ height: "100%", width: "100%", position: "relative", backgroundColor: "purple" }}>
            <Canvas>
                <color attach="background" args={["green"]} />
                <ambientLight />
                <mesh>
                  <boxGeometry args={[1, 1, 1]} />
                  <meshStandardMaterial color='red' />
                </mesh>
            </Canvas>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  exBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '10%',
    padding: 20,
    backgroundColor: 'red'
  },
  spView: {
    width: 100,
    height: 100,
    backgroundColor: 'blue'
  }
})