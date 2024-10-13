import React, { useReducer } from 'react';
import { View, StyleSheet } from 'react-native';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';

const initialState = [];

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [...state, { id: Date.now().toString(), task: action.payload }];
    case 'REMOVE_TASK':
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
};

export default function App() {
  const [tasks, dispatch] = useReducer(reducer, initialState);

  const addTask = (task) => {
    dispatch({ type: 'ADD_TASK', payload: task });
  };

  const removeTask = (id) => {
    dispatch({ type: 'REMOVE_TASK', payload: id });
  };

  return (
    <View style={styles.container}>
      <AddTask onAddTask={addTask} />
      <TaskList tasks={tasks} onRemoveTask={removeTask} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    marginTop: 24,
  },
});
