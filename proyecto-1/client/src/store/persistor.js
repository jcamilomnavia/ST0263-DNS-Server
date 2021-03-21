import storageSession from 'redux-persist/lib/storage/session';
import localForage from 'localforage';

const isDebug = process.env.NODE_ENV !== 'production';

localForage.config({
  name: 'cloudpotato',
  storeName: 'cloudpotato',
});

export const rootPersistConfig = {
  key: 'root',
  storage: localForage,
  debug: isDebug,
  whitelist: ['me', 'queue', 'channel', 'auth'],
};

export const authPersistConfig = {
  key: 'auth',
  storage: storageSession,
  debug: isDebug,
  blacklist: ['auth'],
};
