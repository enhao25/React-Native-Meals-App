import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
import CategoriesMealScreen from '../Screens/CategoriesMealScreen';
import CategoriesScreen from '../Screens/CategoriesScreen';
import MealDetailsScreen from '../Screens/MealDetailsScreen';

import Colors from '../Constants/Colors';
import { CATEGORIES, MEALS } from '../Data/Dummy-data';


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
            return { title: selectedCategory.title }
        }
    },
    MealDetail: {
        screen: MealDetailsScreen,
        navigationOptions: navigateData => {
            const mealId = navigateData.navigation.getParam('mealId');

            const selectedMeal = MEALS.find(meal => meal.id === mealId)
            
            return { title: selectedMeal.title }
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

export default createAppContainer(MealNavigator);