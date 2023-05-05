import { StyleSheet } from 'react-native';

import { Container, Header, LoadingIndicator, Text } from 'components';
import { DashboardRoutes, StackNavigationProps } from 'navigation';
import { useGetRandomJokeByCategoryQuery } from 'service';
import { layout } from 'constant';

export default function Random({
  route,
}: StackNavigationProps<DashboardRoutes, 'Random'>): JSX.Element {
  const { id } = route.params;
  const { isLoading, data, refetch, isFetching } =
    useGetRandomJokeByCategoryQuery(id);

  return (
    <>
      {(isLoading || isFetching) && <LoadingIndicator />}
      <Header
        title={id}
        rightLabel="Refresh"
        onRightLabelPress={() => {
          refetch();
        }}
      />
      <Container alignItems="center" style={styles.container}>
        {data && (
          <Text textAlign="center" variant="bold" size={layout.fonts.title2}>
            ““
            {'\n'}
            {'\n'}
            {data?.value}
            {'\n'}
            {'\n'}
            ””
          </Text>
        )}
      </Container>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
});
