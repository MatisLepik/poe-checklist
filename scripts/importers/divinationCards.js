const importer = require('./wikiImporter');

console.log('Importing...');

importer
  .getData({
    limit: 500,
    tables: 'items',
    fields: 'name,drop_areas_html',
    where: 'class="Divination Card"',
    group_by: 'items._pageName',
  })
  .then(data => {
    console.log('data', data);
  });
