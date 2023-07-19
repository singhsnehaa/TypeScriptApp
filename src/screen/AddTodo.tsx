import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { useDispatch } from 'react-redux';
import {addTodo} from './redux/features/todo/todoSlice';
import { useAppDispatch } from './redux/Store';

const AddTodo = () => {
  // const dispatch = useDispatch();
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState('Aruuu');
  
  const addTodoItem = () => {
    console.log('addTodoItem');
    const body = {
      todo: title,
      completed: false,
      userId: 1,
    };
    dispatch(addTodo(body))
  };

  return (
    <View style={styles.inputWrp}>
      <TextInput
        style={styles.input}
        placeholder="enter Item"
        onChangeText={setTitle}
        value={title}
      />
      <TouchableOpacity onPress={() => addTodoItem()}>
        <Text style={styles.plusBtn}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddTodo;

const styles = StyleSheet.create({
  inputWrp: {
    marginHorizontal: 8,
    marginBottom: 8,
    flexDirection: 'row',
  },
  plusBtn: {
    fontWeight: '400',
    fontSize: 20,
    marginTop: 2,
    marginLeft: 4,
    borderWidth: 1,
    backgroundColor: '#026773',
    paddingHorizontal: 8,
    color: 'white',
    borderRadius: 4,
  },
  input: {
    height: 32,
    borderWidth: 1,
    padding: 6,
    flex: 1,
    borderColor: '#026773',
    color: '#026773',
    borderRadius: 4,
  },
});
