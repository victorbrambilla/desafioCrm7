import React from 'react';

import {
  gridPageCountSelector,
  gridPageSelector,
  useGridApiContext,
  useGridSelector,
} from '@mui/x-data-grid';
import { Box, Button, Pagination } from '@mui/material';

import ModalPage from '../Modal';
import { dataService } from '../../services/dataService';
import { GlobalContext } from '../../contexts/GlobalStorage';

export function CustomFooterStatusComponent(props) {
  const apiRef = useGridApiContext();
  const page = useGridSelector(apiRef, gridPageSelector);
  const pageCount = useGridSelector(apiRef, gridPageCountSelector);
  const global = React.useContext(GlobalContext);

  const deleteContact = (id) => {
    if (window.confirm('Delete this contact?')) {
      dataService.deleteContact(id).then(() => {
        global.getCont();
      });
    }
  };

  const deleteAllContact = (id) => {
    if (window.confirm('Delete all contacts?')) {
      const newIds = JSON.stringify(id)
        .replace(/"/g, '')
        .replace(']', '')
        .replace('[', '');
      dataService.deleteAllContacts(newIds).then(() => {
        global.getCont();
      });
    }
  };

  return (
    <Box
      sx={{ padding: '10px', display: 'flex', justifyContent: 'space-between' }}
    >
      <div>
        {props.selectionModel.length > 1 && (
          <Button
            size="small"
            onClick={() => {
              deleteAllContact(props.selectionModel);
            }}
            color="error"
          >
            Delete all
          </Button>
        )}

        {props.selectionModel.length === 1 && (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <ModalPage id={props.selectionModel} />
            <Button
              size="small"
              onClick={() => {
                deleteContact(props.selectionModel);
              }}
              color="error"
            >
              Delete
            </Button>
          </Box>
        )}
      </div>

      <Pagination
        color="primary"
        count={pageCount}
        page={page + 1}
        onChange={(event, value) => apiRef.current.setPage(value - 1)}
      />
    </Box>
  );
}
