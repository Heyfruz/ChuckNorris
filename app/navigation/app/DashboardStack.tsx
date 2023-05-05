import { createStackNavigator } from '@react-navigation/stack';

import { DashboardRoutes } from 'navigation';
import { Random, Result } from 'screens';

const { Navigator, Screen } = createStackNavigator<DashboardRoutes>();

export default function DashboardNavigator() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name="Random" component={Random} />
      <Screen name="Result" component={Result} />
    </Navigator>
  );
}
