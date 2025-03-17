const parseIsFavourite = (isFavourite) => {
  const isString = typeof isFavourite === 'string';
  if (!isString) return;
  const checkFavourite = (isFavourite) =>
    ['true', 'false'].includes(isFavourite);
  if (checkFavourite(isFavourite)) return isFavourite;

  return true;
};

const parseContactType = (contactType) => {
  const isString = typeof contactType === 'string';

  if (!isString) return;

  const isType = (contactType) =>
    ['home', 'personal', 'work'].includes(contactType);
  if (isType(contactType)) return contactType;
};

export const parseFilterParams = (query) => {
  const { isFavourite, contactType } = query;

  const parsedIsFavourite = parseIsFavourite(isFavourite);
  const parsedContactType = parseContactType(contactType);

  return {
    isFavourite: parsedIsFavourite,
    contactType: parsedContactType,
  };
};
