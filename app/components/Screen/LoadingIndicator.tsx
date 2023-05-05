import { ActivityIndicator, StyleSheet, View } from 'react-native';

import { pallets } from 'constant';

export default function LoadingIndicator(): JSX.Element {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="small" color={pallets.primary} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    backgroundColor: `${pallets.white}80`, //50% Opacity
    justifyContent: 'center',
    // opacity: 0.5,
    position: 'absolute',
    zIndex: 10,
  },
});
