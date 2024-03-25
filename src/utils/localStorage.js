export const getLocalField = (fieldKey) =>
  JSON.parse(localStorage.getItem(fieldKey));

export const removeLocalField = (fieldKey) => {
  localStorage.removeItem(fieldKey);
};

export const setLocalField = (fieldKey, data) => {
  localStorage.setItem(fieldKey, JSON.stringify(data));
};
