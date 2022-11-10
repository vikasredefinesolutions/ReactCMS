export const extractString = (array: string[]) => {
  if (array.length === 0) return;
  let text = '';
  array.forEach((str, index) => {
    if (index === array.length - 1) {
      text += `${str} `;
      return;
    }
    text += `${str}, `;
  });
  return text;
};
