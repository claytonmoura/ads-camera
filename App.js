import React, { useState, useEffect, useRef} from 'react'
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native'

import { Camera } from 'expo-camera'
import * as Permissions from 'expo-permissions'
import * as MediaLibrary from 'expo-media-library'
import { Ionicons} from '@expo/vector-icons'

import Cabecalho from './components/Cabecalho'

export default function App(){
  //referencia da camera
  const cameraRef = useRef(null)
  //status do acesso a camera
  const [temPermissao, setTemPermissao] = useState(null)

  useEffect(()=> {
    (async()=> {
      if (Platform.OS === 'web'){
        const cameraDisponivel = await Camera.isAvailableAsync()
        setTemPermissao(!cameraDisponivel)
      } else {
        const {status} = await Camera.requestPermissionsAsync()
        setTemPermissao(status === 'granted')
      }

    })
  },[])

  return (
    <SafeAreaView style={styles.container}>
      <Cabecalho titulo="ADS Câmera" />
      <Camera
      style={{flex: 1}}
      type={Camera.Constants.Type.front}
      flashMode={Camera.Constants.FlashMode.on}
      ratio={"16:9"}
      ref={cameraRef}>
        <View style={styles.camera}>
          <TouchableOpacity
          style={styles.touch}
          >
            <Ionicons name ="md-camera" size={40} color="#9e9e9e" />

          </TouchableOpacity>

        </View>

      </Camera>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {flex: 1,
  justifyContent: 'center'
},
camera: {
  flex: 1,
  backgroundColor: 'transparent',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'flex-end'
},
touch: {
  margin: 20
}
})

