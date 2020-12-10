import React from 'react';
import { Text } from 'react-native';
import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CategoriesMealScreen from '../Screens/CategoriesMealScreen';
import CategoriesScreen from '../Screens/CategoriesScreen';
import MealDetailsScreen from '../Screens/MealDetailsScreen';
import FavoritesScreen from '../Screens/FavoritesScreen';

import Colors from '../Constants/Colors';
import { CATEGORIES, MEALS } from '../Data/Dummy-data';
import CustomHeaderButton from '../Components/HeaderButton';


const MealNavigator = createStackNavigator({
    Categories: {
        screen: CategoriesScreen,
        navigationOptions: {
            title: 'Meal Categories'
        }
    },
    CategoryMeals: {
        screen: CategoriesMealScreen,
        navigationOptions: navigateData => {
            const catId = navigateData.navigation.getParam('categoryId');

            const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
            return { headerTitle: selectedCategory.title }
        }
    },
    MealDetail: {
        screen: MealDetailsScreen,
        navigationOptions: navigateData => {
            const mealId = navigateData.navigation.getParam('mealId');

            const selectedMeal = MEALS.find(meal => meal.id === mealId)
            
            return { 
                headerTitle: selectedMeal.title,
                headerRight: <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                    <Item 
                        title="Favorite" 
                        iconName='ios-star' 
                        onPress={() => {
                            console.log("Mark as fav")
                        }} />
                </HeaderButtons>
            }
        }
    }
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
        },
        headerTintColor: Platform.OS == 'android' ? 'white' : Colors.primaryColor
    }
});

const MealsTabNavigator = createBottomTabNavigator({
    Meals:  MealNavigator,
    Favorites: FavoritesScreen
});

export default createAppContainer(MealsTabNavigator);