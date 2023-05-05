import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { useState } from 'react';

import { Container, Header, Text } from 'components';
import { useGetJokesBySearchQuery } from 'service';
import FormInput from 'components/Form/FormInput';
import { layout, pallets } from 'constant';
import { AppRoutes, RootNavigationProp, TabRoutes } from 'navigation';

export default function Search({
  navigation,
}: RootNavigationProp<AppRoutes, TabRoutes, 'Search'>): JSX.Element {
  const [query, setQuery] = useState('');
  const { data, isFetching } = useGetJokesBySearchQuery(query);

  return (
    <>
      <Header title="Search" hideLeftComp />
      <Container>
        <FormInput
          value={query}
          onChangeText={setQuery}
          placeholder="Search for a Chuck Norris joke"
        />
        {isFetching && (
          <View style={{ marginBottom: 20 }}>
            <ActivityIndicator size="small" color={pallets.primary} />
          </View>
        )}
        {data && (
          <FlatList
            data={data?.result}
            ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('DashboardStack', {
                      params: { value: item.value },
                      screen: 'Result',
                    });
                  }}
                  style={styles.list}>
                  <Text numberOfLines={2}>{item.value} </Text>
                </TouchableOpacity>
              );
            }}
          />
        )}
      </Container>
    </>
  );
}

const styles = StyleSheet.create({
  list: {
    backgroundColor: pallets.card,
    borderBottomEndRadius: 0,
    borderRadius: layout.cards.cardRadius,
    padding: 20,
  },
});
