import React, {useState} from 'react';
import { 
  Text, 
  View, 
  StyleSheet,
  } from 'react-native';
  import { TextInput } from 'react-native-paper';
  import { RoundedButton } from '../components/RoundedButton';
  import { spacing } from '../utils/sizes';

export const Focus = ({ addSubject }) => {
  const[subject, setSubject] = useState(null);

return (
  <View style={styles.container}>
    <View style={styles.inputContainer}>
      <TextInput 
        style={styles.textInput} 
        label='What would you like to focus on?' 
        onChangeText={setSubject}/>
      <View style={styles.button}>
        <RoundedButton title='+' size={50} onPress={() => addSubject(subject)}/>
      </View>
    </View>
  </View>
)}

const styles = StyleSheet.create({
  container: {
  },
  inputContainer: {
    flexDirection: 'row',
    padding: spacing.lg,
    justifyContent: 'top',
  },
  textInput:{
    flex: 1,
    marginRight: spacing.sm,
  },
  button: {
    justifyContent: 'center'
  }
})