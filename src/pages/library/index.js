import React from 'react';
import { Text, View, SafeAreaView, Image, TouchableOpacity, FlatList, ScrollView, StatusBar} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

export default function Library() {
    return (
        <SafeAreaView style={styles.container}>
            <View><Text>Library</Text></View>
        </SafeAreaView>
    );
}