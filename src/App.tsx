import React from 'react';
import {
    AppContainer,
} from "./styles/Components";
import {Card, Column, CustomDragLayer} from "./Components";
import {AddNewItem} from "./Components/AddNewItem";
import {useDispatch, useSelector} from "react-redux";
import type {RootState} from './store/store';
import {addList, ListType} from "./store/slices/listsSlice";

const App = () => {
  const lists = useSelector<RootState, Array<ListType>>((state) => state.lists.lists);
  const dispatch = useDispatch();

  const addNewList = (title: string) => {
      dispatch(addList(title));
  }

  return (
    <AppContainer>
        <CustomDragLayer/>
        {lists.map((list, index) => (
            <Column
                title={list.title}
                id={list.id}
                index={index}
                key={list.id}
            >
                {list.tasks.map((task, index) => (
                    <Card
                        id={task.id}
                        text={task.text}
                        key={task.id}
                        index={index}
                        columnId={list.id}
                    />
                ))}
            </Column>
        ))}
      <AddNewItem
          onAdd={addNewList}
          toggleButtonText="+ Добавить еще список"
      />
    </AppContainer>
  );
}

export default App;
