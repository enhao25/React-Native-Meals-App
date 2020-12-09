import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

import { MEALS } from '../Data/Dummy-data'

const MealDetailsScreen = props => {
    const mealId = props.navigation.getParam('mealId');

    const selectedMeal = MEALS.find(meal => meal.id === mealId)
    
    return(
        <View style={styles.screen}>
            <Text>{selectedMeal.title}</Text>
            <Button title="Go back to home page" onPress={() => {
                props.navigation.popToTop();
            }} />
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

export default MealDetailsScreen;