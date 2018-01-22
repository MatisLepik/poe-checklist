export default name =>
  name
    .toLowerCase()
    .replace(/\smap/g, '')
    .trim()
    .replace(/ /g, '_')
    .replace(/[^\wüõäö]/g, '')
    .concat('.jpg');
