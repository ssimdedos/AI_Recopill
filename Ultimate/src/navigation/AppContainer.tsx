import React from 'react';
import { View } from 'react-native';
import { enableScreens } from 'react-native-screens';
import { NavigationContainer } from '@react-navigation/native';
import { useTheme } from '@ui-kitten/components';
import { RootStackParamList } from 'types/navigation-types';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { navigationRef } from './root-navigation';

import InitNavigator from './InitNavigator';
import MainNavigator from './MainNavigator';
import FoodNavigator from './FoodNavigator';

import ReadingNavigator from './ReadingNavigator';
import FitnessHealthNavigator from './FitnessHealthNavigator';

enableScreens();

const Stack = createNativeStackNavigator<RootStackParamList>();
const AppContainer = () => {
  const themes = useTheme();
  return (
    <NavigationContainer ref={navigationRef}>
      <View style={{ backgroundColor: themes['background-basic-color-1'], flex: 1 }}>
        <Stack.Navigator
          initialRouteName={'Init'}
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Init" component={InitNavigator} />
          <Stack.Screen name="Main" component={MainNavigator} />
          <Stack.Screen name="Food" component={FoodNavigator} />
          <Stack.Screen name="Reading" component={ReadingNavigator} />
          <Stack.Screen name="FitnessHealth" component={FitnessHealthNavigator} />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
};

export default AppContainer;
