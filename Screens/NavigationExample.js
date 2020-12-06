import React from 'react';
import { StyleSheet, View, Text, Button, FlatList } from 'react-native';

const NavigationExample = props => {
    return(
        <View style={styles.screen}>
            <Text>Categories Screen</Text>
            <Button title="Go to Meals!" onPress={() => {
                // Same as props.navigation.navigate('CategoryMeals')
                // Same as props.navigation.push('CategoryMeals')
                props.navigation.navigate({ routeName: 'CategoryMeals' })
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

export default NavigationExample;