import { RouteProp } from '@react-navigation/native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import { TabRoutes } from 'navigation/types';

type IconName = Pick<React.ComponentProps<typeof Ionicons>, 'name'>['name'];

export const getTabIcon = (
  route: RouteProp<TabRoutes, keyof TabRoutes>,
): IconName => {
  switch (route.name) {
    case 'Dashboard':
      return 'grid';
    case 'Search':
      return 'search';
    default:
      return 'search-circle';
  }
};

export const getTotalAmount = (
  accumulator: number,
  a: number,
  _currentIndex: number,
  _array: number[],
): number => {
  return accumulator + a;
};

export * from './validation';
