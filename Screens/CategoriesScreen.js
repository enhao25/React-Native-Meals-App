import React from 'react';
import { StyleSheet, FlatList } from 'react-native'; 
import CategoryGridTile from '../Components/CategoryGridTile';
import { CATEGORIES } from '../Data/Dummy-data'

const CategoriesScreen = props => {
    
    const renderGridItem = (itemData) => {
        return (
            <CategoryGridTile 
                title={itemData.item.title} 
                color={itemData.item.color}
                onSelect = {() => {
                    props.navigation.navigate({ routeName: 'CategoryMeals', params: {
                        categoryId: itemData.item.id 
                    }})
            }} />
        )
    }

    return(
        <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoriesScreen;