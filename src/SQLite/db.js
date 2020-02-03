import { SQLite } from 'expo-sqlite';

const db = SQLite.openDatabase('books.db');

export const init = () => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS books (id INTEGER PRIMARY KEY NOT NULL,title TEXT NOT NULL,img_url TEXT NOT NULL,description TEXT NOT NULL);',
        [],
        () => {
          resolve();
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
};
