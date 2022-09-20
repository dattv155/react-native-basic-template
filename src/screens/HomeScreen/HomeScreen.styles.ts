import {StyleSheet} from 'react-native';
import {SCREEN_WIDTH} from 'src/configs/consts';

const itemWidth = (SCREEN_WIDTH - 48) / 2;

export const homeScreenStyles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
  },
  cardItem: {
    flexDirection: 'row',
    backgroundColor: 'white',
    width: '100%',
    alignItems: 'center',
    marginVertical: 8,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#F1F1F1',
    padding: 8,
  },
  imageContainer: {
    width: '35%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#f0003c',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    height: 50,
    borderRadius: 5,
    marginTop: 16,
    marginBottom: 16,
  },
  fetchText: {
    color: 'white',
    width: '100%',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  listContainer: {
    borderRadius: 8,
    padding: 8,
  },
  columnContainer: {
    justifyContent: 'space-between',
  },
  cardImage: {
    width: itemWidth - 48,
    height: itemWidth - 48,
  },
  username: {
    color: 'black',
    fontWeight: 'bold',
    marginTop: 8,
  },
  title: {
    color: 'black',
  },
});
