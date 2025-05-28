import React from 'react';
import {Link} from 'react-router-dom';
import {NavItemType} from '../../../shared/types/navbar.types';
import AppText from '../AppText.component';
import {StyleSheet} from 'react-native';

type NavBarItemPropsType = {
  nav: NavItemType;
  onPress?: (navItem: NavItemType) => void;
};

const NavBarItem = ({nav}: NavBarItemPropsType) => {
  // <Link> compiles to <a></a>

  return (
    <Link to={nav.route ?? '/'} style={styles.container}>
      <AppText>{nav.name}</AppText>
    </Link>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
});

export default NavBarItem;
