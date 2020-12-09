import React from 'react';
import { StyleSheet, View, Text, Button, FlatList } from 'react-native';
import MealItem from '../Components/MealItem';
import { CATEGORIES, MEALS } from '../Data/Dummy-data'

const CategoriesMealScreen = props => {
    const catId = props.navigation.getParam('categoryId');

    const displayedMeals = MEALS.filter(meal => meal.categoryId.indexOf(catId) >= 0);

    const renderMealItem = itemData => {
        return (
            <MealItem 
                title={itemData.item.title} 
                duration={itemData.item.duration}
                complexity={itemData.item.complexity}
                affordability={itemData.item.affordability}
                image={itemData.item.imageUrl} 
                onSelectMeal={() => {
                    props.navigation.navigate({ routeName: 'MealDetail', params: {
                        mealId: itemData.item.id
                    } })
                }} />
        )
    }

    return(
        <View style={styles.screen}>
            <FlatList data={displayedMeals} renderItem={renderMealItem} style={{width: '100%'}} />
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