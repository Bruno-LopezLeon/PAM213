import { Text, StyleSheet, View, Button } from 'react-native'
import React, { useState } from 'react'
import ContadorScreen from './ContadorScreen'
import BotonesScreen from './BotonesScreen'
import TextInputScreen from './TextInputScreen';
import ImageBackgroundScreen from './ImageBackgroundScreen';
import ScrollViewScreen from './ScrollViewScreen';
import ActivityIndicatorScreen from './ActivityIndicatorScreen';
import FlatListScreen from './FlatListScreen';
import SectionListScreen from './SectionListScreen';
import ModalScreen from './ModalScreen';
import BottomSheetScreen from './BottomSheetScreen';
import RepasoScreen from './RepasoScreen';

export default function MenuScreen() {
    const [screen, setScreen]=useState('menu');

    switch(screen){
        case 'contador':
            return <ContadorScreen />
        case 'botones':
            return <BotonesScreen />
        case 'texto':
            return <TextInputScreen />
        case 'imagen':
            return <ImageBackgroundScreen />
        case 'scroll':
            return <ScrollViewScreen />
        case 'activity':
            return <ActivityIndicatorScreen />
        case 'flatlist':
            return <FlatListScreen />
        case 'section':
            return <SectionListScreen />
        case 'modal':
            return <ModalScreen />
        case 'bottomsheet':
            return <BottomSheetScreen />
        case 'repaso':
            return <RepasoScreen />
        case 'menu':
            default:
                return (
                    <View style={styles.botonesContainer}>
                    <Text style={styles.menuTitle}> Menú de prácticas </Text>
                     <Button title='Pract: Contador' onPress={()=>setScreen('contador')}/>
                     <Button title='Pract: Botones' onPress={()=>setScreen('botones')}/>
                     <Button title='Pract: TextInput' onPress={()=>setScreen('texto')}/>
                     <Button title='Pract: ImageBackground' onPress={()=>setScreen('imagen')}/>
                     <Button title='Pract: ScrollView' onPress={()=>setScreen('scroll')}/>
                     <Button title='Pract: Activity Indicator' onPress={()=>setScreen('activity')}/>
                     <Button title='Pract: FlatList' onPress={()=>setScreen('flatlist')}/>
                     <Button title='Pract: SectionList' onPress={()=>setScreen('section')}/>
                     <Button title='Pract: Modal' onPress={()=>setScreen('modal')}/>
                     <Button title='Pract: Bottom Sheet' onPress={()=>setScreen('bottomsheet')}/>
                     <Button title='Pract: Repaso' onPress={()=>setScreen('repaso')}/>
                    </View>
    )

        }
}

const styles = StyleSheet.create({
    botonesContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
        marginBottom: 50,
        marginLeft: 16,
        marginRight: 16,
        borderRadius: 8,
        borderColor: '#7bd1ffff',
        borderWidth: 2,
        backgroundColor: '#36434fff',
        gap: 16,
    },
    menuTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 24,
        color: '#7bd1ffff',
        
    }
});