export const strengthLabel = (value: number) => {
  switch (value) {
    case 0:
      return { value: 0, text: 'Weak', color: '#F25F50' };
    case 1:
      return { value: 0.25, text: 'Weak', color: '#F25F5C' };
    case 2:
      return { value: 0.5, text: 'Fair', color: '#FFE066' };
    case 3:
      return { value: 0.75, text: 'Good', color: '#96d683' };
    case 4:
      return { value: 1, text: 'Strong', color: '#78b453' };
    default:
      return { value: 0, text: 'Weak', color: '#F25F50' };
  }
};
