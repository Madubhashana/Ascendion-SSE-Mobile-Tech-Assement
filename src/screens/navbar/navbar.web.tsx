import React from 'react';
import {StyleSheet, View} from 'react-native';

import {colors} from '../../shared/config/colors';
import {NavItems} from './constants';
import {NavItemType} from '../../shared/types/navbar.types';
import {NavBarItem} from '../../components/elements/NavbarItem';
import {BrowserRouter} from 'react-router-dom';
import AppTextInput from '../../components/elements/AppTextInput.component';
import {TextTypes} from '../../components/elements/AppText.component';

const NavbarPage = () => {
  const renderNavItems = (navItem: NavItemType) => {
    return <NavBarItem key={navItem.name} nav={navItem} />;
  };

  return (
    <BrowserRouter>
      <View style={styles.container}>
        <View style={styles.navbarContainer}>
          <View style={styles.navItemsContainer}>
            {NavItems.map(renderNavItems)}
          </View>
          <AppTextInput
            placeholder="Search documentation..."
            textType={TextTypes.Body}
            containerStyle={styles.search}
          />
        </View>
      </View>
    </BrowserRouter>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bgGray,
    padding: 15,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: colors.gray,
  },
  navbarContainer: {
    flex: 1,
    maxWidth: 1400,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  navItemsContainer: {
    flexDirection: 'row',
    gap: 20,
  },
  search: {
    backgroundColor: colors.white,
    maxWidth: 200,
    width: '100%',
  },
});

export default NavbarPage;
