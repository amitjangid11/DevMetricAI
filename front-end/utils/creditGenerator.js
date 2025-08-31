export const creditGenerator = (totalMarks) => {
  if (totalMarks >= 90 && totalMarks <= 100) return 15;
  if (totalMarks >= 75 && totalMarks <= 89) return 12;
  if (totalMarks >= 60 && totalMarks <= 74) return 9;
  if (totalMarks >= 40 && totalMarks <= 59) return 6;
  if (totalMarks >= 20 && totalMarks <= 39) return 3;
  return 1;
};

const credit = creditGenerator(5);
console.log(credit);
