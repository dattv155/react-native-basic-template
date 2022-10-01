import {StyleSheet} from 'react-native';
import {Colors} from 'src/styles';

export const homeScreenStyles = StyleSheet.create({
  containerView: {
    marginBottom: 90,
    marginHorizontal: 16,
  },
  cardItem: {
    flexDirection: 'row',
    backgroundColor: Colors.White,
    alignItems: 'center',
    marginVertical: 8,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Colors.LightGray,
    padding: 8,
  },
  imageContainer: {
    alignItems: 'center',
  },
  button: {
    backgroundColor: Colors.Red,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginVertical: 16,
    padding: 10,
    width: '50%',
  },
  cardImage: {
    width: 100,
    height: 100,
  },
});
