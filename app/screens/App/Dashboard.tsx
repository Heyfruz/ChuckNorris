import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native';

import { Container, Header, LoadingIndicator, Text } from 'components';
import { useGetCategoriesQuery } from 'service';
import { layout, pallets } from 'constant';
import { AppRoutes, RootNavigationProp, TabRoutes } from 'navigation';
import { setAuthenticated, useDispatch } from 'store';

const { padding } = layout.spacing;

export default function Dashboard({
  navigation,
}: RootNavigationProp<AppRoutes, TabRoutes, 'Dashboard'>): JSX.Element {
  const { data, isLoading } = useGetCategoriesQuery();
  const dispatch = useDispatch();

  return (
    <>
      {isLoading && <LoadingIndicator />}
      <Header
        hideLeftComp
        title="Norris Jokes"
        rightLabel="LOG OUT"
        onRightLabelPress={() => {
          dispatch(setAuthenticated(false));
        }}
      />
      <Container paddingVertical={0}>
        <FlatList
          data={data}
          numColumns={2}
          ListHeaderComponent={<View style={{ padding }} />}
          columnWrapperStyle={{}}
          renderItem={({ item }) => {
            return (
              <View style={styles.boxContainer}>
                <TouchableOpacity
                  style={styles.box}
                  onPress={() => {
                    navigation.navigate('DashboardStack', {
                      params: { id: item },
                      screen: 'Random',
                    });
                  }}>
                  <Text textTransform="capitalize">{item}</Text>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </Container>
    </>
  );
}

const styles = StyleSheet.create({
  box: {
    alignItems: 'center',
    backgroundColor: pallets.card,
    borderBottomEndRadius: 0,
    borderRadius: layout.cards.cardRadius,
    height: layout.cards.cardHeight,
    justifyContent: 'center',
    width: '95%',
  },
  boxContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    marginBottom: 8,
  },
});
