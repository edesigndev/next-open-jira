import { FC, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { EntriesContext, entriesReducer } from './';
import { Entry } from '@/interfaces';

export interface EntriesState {
  entries: Entry[];
}

const Entries_INITIAL_STATE: EntriesState = {
  entries: [
    {
      _id: uuidv4(),
      description: 'Pendiente: lorem ipsum dolor sit amet',
      status: 'pending',
      createdAt: Date.now(),
    },
    {
      _id: uuidv4(),
      description: 'En progreso: lorem ipsum dolor sit amet',
      status: 'in-progress',
      createdAt: Date.now() - 100000,
    },
    {
      _id: uuidv4(),
      description: 'Terminada: lorem ipsum dolor sit amet',
      status: 'finished',
      createdAt: Date.now(),
    },
    {
      _id: uuidv4(),
      description: 'Pendiente: lorem ipsum dolor sit amet',
      status: 'pending',
      createdAt: Date.now() - 100000,
    },
  ],
};

export const EntriesProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

  const addNewEntry = (description: string) => {
    const newEntry: Entry = {
      _id: uuidv4(),
      description,
      createdAt: Date.now(),
      status: 'pending',
    };

    dispatch({ type: 'Entry- Add-Entry', payload: newEntry });
  };

  return (
    <EntriesContext.Provider value={{ ...state, addNewEntry }}>
      {children}
    </EntriesContext.Provider>
  );
};
