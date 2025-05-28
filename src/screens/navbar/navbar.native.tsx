import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';
import {NavItems} from './constants';
import {DrawerNavItemType, NavItemType} from '../../shared/types/navbar.types';
import ScreenContainer from '../../components/wrappers/ScreenContainer.component';
import AppText, {TextTypes} from '../../components/elements/AppText.component';
import {NavBarItem} from '../../components/elements/NavbarItem';
import {Pressable, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {colors} from '../../shared/config/colors';
import CloseIcon from '../../res/icons/Close.icon';
import SearchIcon from '../../res/icons/Search.icon';

const Drawer = createDrawerNavigator();

const TempScreen = () => (
  <ScreenContainer>
    <AppText type={TextTypes.Title}>Navbar</AppText>
  </ScreenContainer>
);

const NavbarScreen = () => {
  const renderDrawerMenus = (navItem: NavItemType) => {
    return (
      <Drawer.Screen
        name={navItem.name}
        key={navItem.name}
        component={TempScreen}
      />
    );
  };

  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={DrawerContent}
        screenOptions={{drawerType: 'front'}}>
        {NavItems.map(renderDrawerMenus)}
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const DrawerContent = (drawerProps: DrawerContentComponentProps) => {
  const currentRoute = drawerProps.state.routes[drawerProps.state.index];

  const handleOnPressClose = () => drawerProps.navigation.closeDrawer();

  const handleOnPressMenuItem = (menu: NavItemType) => {
    drawerProps.navigation.navigate(menu.name);
  };

  const renderNavItems = (navItem: DrawerNavItemType) => {
    return (
      <NavBarItem
        nav={{name: navItem.name, route: navItem.path}}
        onPress={handleOnPressMenuItem}
      />
    );
  };

  return (
    <SafeAreaView style={styles.drawerContentContainer}>
      <View style={styles.header}>
        <AppText type={TextTypes.Section} color={colors.active}>
          {currentRoute.name}
        </AppText>
        <View style={styles.headerActionsContainer}>
          <SearchIcon size={18} />
          <Pressable onPress={handleOnPressClose}>
            <CloseIcon size={22} />
          </Pressable>
        </View>
      </View>
      {drawerProps.state.routes.map(renderNavItems)}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  drawerContentContainer: {
    paddingHorizontal: 20,
    gap: 5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: colors.gray,
    paddingVertical: 14,
    alignItems: 'center',
  },
  headerActionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
});

export default NavbarScreen;
