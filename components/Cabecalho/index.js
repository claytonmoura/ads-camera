import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const Cabecalho = ({titulo}) => {
    return(
        <View>
            <Text style={styles.tituloCabecalho}>{titulo}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    tituloCabecalho: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingTop: 10,
        paddingBottom: 5,
        textAlign: 'center',
        backgroundColor: '#1a237e',
        color: "#FFFFFF"
    }
})
export default Cabecalho