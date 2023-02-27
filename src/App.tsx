import React from 'react';
import {
  AppContainer,
} from "./styles/Components";
import {Card, Column} from "./Components";
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
        {lists.map((list) => (
            <Column
                title={list.title}
                id={list.id}
                key={list.id}
            >
                {list.tasks.map((task) => (
                    <Card text={task.text} key={task.id}/>
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
