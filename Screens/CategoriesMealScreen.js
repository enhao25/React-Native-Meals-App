import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const CategoriesMealScreen = props => {
    return(
        <View style={styles.screen}>
            <Text>Categories Meal Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoriesMealScreen;