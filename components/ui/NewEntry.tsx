import React, { useContext, useState } from 'react';

import { Box, Button, TextField } from '@mui/material';

import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { EntriesContext } from '@/context/entries';
import { UIContext } from '@/context/ui';

export const NewEntry = () => {
  const [inputValue, setInputValue] = useState('');
  const [tocuched, setTocuched] = useState(false);

  const { addNewEntry } = useContext(EntriesContext);
  const { isAddingEntry, setIsAddingEntry } = useContext(UIContext);

  const onSave = () => {
    if (inputValue.trim().length === 0) return;
    addNewEntry(inputValue);
    setIsAddingEntry(false);
    setTocuched(false);
    setInputValue('');
  };

  return (
    <Box sx={{ marginBottom: 2, paddingX: 1 }}>
      {isAddingEntry ? (
        <>
          <TextField
            fullWidth
            sx={{ marginTop: 2, marginBottom: 2 }}
            placeholder='Nueva Entrada'
            autoFocus
            multiline
            label='Nueva entrada'
            helperText={
              tocuched &&
              inputValue.trim().length === 0 &&
              'Escribe una nueva entrada'
            }
            error={tocuched && inputValue.trim().length === 0}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onBlur={() => setTocuched(true)}
          />
          <Box display={'flex'} justifyContent='space-between'>
            <Button
              variant='text'
              color='secondary'
              onClick={() => setIsAddingEntry(false)}
            >
              CANCELAR
            </Button>
            <Button
              variant='outlined'
              color='secondary'
              endIcon={<SaveOutlinedIcon />}
              onClick={onSave}
            >
              GUARDAR
            </Button>
          </Box>
        </>
      ) : (
        <Button
          startIcon={<AddCircleOutlineOutlinedIcon />}
          fullWidth
          variant='outlined'
          onClick={() => setIsAddingEntry(true)}
        >
          Agregar Tarea
        </Button>
      )}
    </Box>
  );
};
