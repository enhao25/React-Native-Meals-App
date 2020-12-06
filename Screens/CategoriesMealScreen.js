import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { CATEGORIES } from '../Data/Dummy-data'

const CategoriesMealScreen = props => {
    const catId = props.navigation.getParam('categoryId');

    const selectedCategory = CATEGORIES.find(cat => cat.id === catId)

    return(
        <View style={styles.screen}>
            <Text>Categories Meal Screen</Text>
            <Text>{selectedCategory.title}</Text>
            <Button title="Go to Meal Details" onPress={() => {
                props.navigation.navigate('MealDetail');
            }} />
            <Button title="Go back button" onPress={() => {
                props.navigation.goBack()
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

export default CategoriesMealScreen;