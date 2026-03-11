import { StyleSheet, Text, View } from 'react-native';


export default function DiaryListScreen() {

  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.title}>班級：數位二甲</Text>
        <Text style={styles.subtitle}>姓名：張依蓁</Text>
        <Text style={styles.subtitle}>學號：111319002</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 200,
    paddingLeft: 50,
    paddingBottom: 600,
    backgroundColor: 'pink'
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'brown',
  },
});

