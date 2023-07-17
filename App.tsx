import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import TodoList from './src/screen/TodoList';
import AddTodo from './src/screen/AddTodo';
import {Provider} from 'react-redux';
import {Store} from './src/screen/redux/Store';

const App = () => {
  return (
    <Provider store={Store}>
      <View>
        <Text style={styles.heading}>Todo App Tutorial</Text>
        <AddTodo />
        <TodoList />
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 18,
    color: '#012E40',
    justifyContent: 'center',
    alignSelf: 'center',
    fontWeight: '500',
    margin: 14,
  },
});

export default App;
