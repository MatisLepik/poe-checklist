import ui from 'src/redux/modules/ui';
import filters from 'src/redux/modules/filters';
import checklist from 'src/redux/modules/checklist';
import { persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export default function getReducer() {
  const reducers = {
    ui,
    filters,
    checklist,
  };

  const config = {
    key: 'root',
    storage,
  };

  return persistCombineReducers(config, reducers);
}
