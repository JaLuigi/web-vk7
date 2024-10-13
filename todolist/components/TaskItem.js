import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const TaskItem = ({ task, onRemoveTask }) => {
  return (
    <TouchableOpacity style={styles.taskItem} onPress={() => onRemoveTask(task.id)}>
      <Text>{task.task}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  taskItem: {
    padding: 15,
    backgroundColor: '#f9f9f9',
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
    marginBottom: 5,
  },
});

export default TaskItem;
