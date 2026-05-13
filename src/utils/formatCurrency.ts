export const formatPKR = (amount: number): string => {
  return `PKR ${Math.round(amount).toLocaleString('en-PK')}`;
};

export const formatNumber = (num: number): string => {
  return Math.round(num).toLocaleString('en-PK');
};
