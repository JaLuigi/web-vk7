import React from 'react';
import { FlatList } from 'react-native';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onRemoveTask }) => {
  const renderItem = ({ item }) => (
    <TaskItem task={item} onRemoveTask={onRemoveTask} />
  );

  return (
    <FlatList
      data={tasks}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default TaskList;
