'use client';
import {initializeApp} from 'firebase/app';
import {getAnalytics, isSupported} from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyDT4YUNQB3ftPldj6tekTJZO4NVzGtqf04',
  authDomain: 'web-evo-38d50.firebaseapp.com',
  projectId: 'web-evo-38d50',
  storageBucket: 'web-evo-38d50.appspot.com',
  messagingSenderId: '17743451838',
  appId: '1:17743451838:web:739365d4eda1b859be30ef',
  measurementId: 'G-QJB07C22CV',
};
const app = initializeApp(firebaseConfig);
// const analytics = typeof window !== undefined ? await isSupported() ? getAnalytics(app): null : null;
const analytics = isSupported().then((yes) => yes ? getAnalytics(app) : null);
export {
  analytics,
};


