import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import {NavItemType} from '../../../shared/types/navbar.types';
import AppText, {TextTypes} from '../AppText.component';

type NavBarItemPropsType = {
  nav: NavItemType;
  onPress?: (navItem: NavItemType) => void;
};

const NavBarItem = ({nav, onPress}: NavBarItemPropsType) => {
  const handleOnPress = () => onPress?.(nav);

  return (
    <Pressable style={styles.container} onPress={handleOnPress}>
      <AppText type={TextTypes.Section}>{nav.name}</AppText>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
});

export default NavBarItem;
