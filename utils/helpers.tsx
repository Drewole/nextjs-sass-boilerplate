/// Useful functions that can be used as needed
// Creates a range (array) of numbers.
// type range = (integer: number, start?: number) => number[];
// export const range = ({ integer, start = 0 }: range) =>
//   [...Array(parseInt(integer)).keys()].map((i) => i + parseInt(start));

// //form select options helper
// export const selectOptionHelper = ({arr = []}: Array) => {
//   return arr.map((ele) => {
//     return { value: ele, label: ele };
//   });
// };

// // abbreviate class name with a prefix
// export const _classes = (styles) => (name) => {
//   if (typeof name === 'string') {
//     return styles[name] || name || '';
//   }

//   if (Array.isArray(name)) {
//     return name.map((n) => styles[n] || n || '').join(' ');
//   }

//   return '';
// };
