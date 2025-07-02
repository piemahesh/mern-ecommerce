export function printTable(data, isArray = false) {
  if (isArray) {
    console.table(data);
  } else {
    console.table([data]);
  }
}
