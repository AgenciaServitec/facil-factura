import { firebase } from "./index";

export const firestoreTimestamp = firebase.firestore.Timestamp;
export const firestoreFieldValue = firebase.firestore.FieldValue;
//export const now = () => firebase.firestore.Timestamp.now();
export const toTimestamp = ({ seconds, nanoseconds }) =>
  new firebase.firestore.Timestamp(seconds, nanoseconds);

export const querySnapshotToArray = (querySnapshot) => {
  const documents = [];

  querySnapshot.forEach((documentSnapshot) => {
    const document = documentSnapshot.data();
    documents.push({ ...document, id: documentSnapshot.id });
  });

  return documents;
};

export const fetchCollectionOnce = async (query) => {
  const querySnapshot = await query.get();

  return querySnapshotToArray(querySnapshot);
};

export const fetchDocumentOnce = async (documentReference) => {
  const documentSnapshot = await documentReference.get();

  return documentSnapshot.data();
};

export const setDocument = async (docRef, document) => docRef.set(document);

export const updateDocument = async (docRef, document) =>
  docRef.update(document);

export const mergeDocument = async (docRef, document) =>
  docRef.set(document, { merge: true });

export const deleteDocument = async (docRef) => docRef.delete();
