const getDescription = description => {
  return description.replace(/<[^>]*>?/gm, '');
};

export default getDescription;
