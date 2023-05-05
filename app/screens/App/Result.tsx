import { StyleSheet } from 'react-native';

import { Container, Header, Text } from 'components';
import { DashboardRoutes, StackNavigationProps } from 'navigation';
import { layout } from 'constant';

export default function Result({
  route,
}: StackNavigationProps<DashboardRoutes, 'Result'>): JSX.Element {
  const { value } = route.params;

  return (
    <>
      <Header title="Laugh Out Loud" />
      <Container alignItems="center" style={styles.container}>
        <Text textAlign="center" variant="bold" size={layout.fonts.title2}>
          ““
          {'\n'}
          {'\n'}
          {value}
          {'\n'}
          {'\n'}
          ””
        </Text>
      </Container>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
});
