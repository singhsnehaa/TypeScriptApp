import React, {useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getTodos} from './redux/features/todo/todoSlice';
import {useAppDispatch} from './redux/Store';
import {RootState} from './redux/Store';

const TodoList = () => {
  //   const dispatch = useDispatch();
  const dispatch = useAppDispatch();
  const {todoResponse} = useSelector((state: RootState) => state.todos);

  // console.log('todoResponse=>',todoResponse)

  useEffect(() => {
    dispatch(getTodos());
  }, []);

  const editHandler = () => {
    console.log('EditHandler');
  };

  const deleteHandler = () => {
    console.log('deleteHandler');
  };


  const handleEmpty= ()=>{
    return(
      <View style={{...styles.OuterWraper,height:'30%'}}>
            <Text style={{...styles.todoMarked,alignSelf:'center'}}> You have nothing to do!</Text>
        </View>
    )
  }

  const renderItem = ({item}:any) => {
    return (
      <View style={styles.OuterWraper}>
        <Text style={styles.todoItem}>{item.todo}</Text>
        <View style={styles.InnerWraper}>
          <Text style={styles.todoMarked}>Mark completed</Text>
          <View style={styles.BtnWrapper}>
            <TouchableOpacity onPress={() => editHandler()}>
              <Text style={styles.btn}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => deleteHandler()}>
              <Text style={styles.btn}>Delete</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };


  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={{paddingBottom: 200}}
        ListEmptyComponent={handleEmpty}
        data={todoResponse}
        extraData={todoResponse}
        renderItem={renderItem}
        // keyExtractor={item => item.id}
      />
    </View>
  );
};
export default TodoList;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: 'white',
    marginHorizontal: 10,
  },
  OuterWraper: {
    backgroundColor: '#026773',
    width: '100%',
    marginVertical: 8,
    borderRadius: 6,
    padding: 10,
  },
  todoItem: {
    fontSize: 16,
    color: 'white',
    borderStyle: 'dotted',
    borderColor: '#F2E3D5',
    borderBottomWidth: 1,
  },
  InnerWraper: {
    marginTop: 14,
  },
  todoMarked: {
    fontSize: 14,
    color: 'white',
  },
  BtnWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  btn: {
    fontSize: 12,
    color: '#9EF8EE',
    borderColor: '#22BABB',
    borderWidth: 1,
    paddingHorizontal: 6,
    marginHorizontal: 4,
  },
});
