Package.describe({
  name: 'ivansglazunov:refs',
  version: '0.1.1',
  summary: 'DEPRECATED',
  git: 'https://github.com/ivansglazunov/meteor-refs',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('mongo');
  api.use('aldeed:simple-schema@1.5.1');
  api.use('aldeed:collection2@2.7.0');
  api.use('dburles:collection-helpers@1.0.4');
  api.use('stevezhu:lodash@4.0.0');
  api.use('dburles:mongo-collection-instances@0.3.4');
  api.use('lai:collection-extensions@0.2.1');
  api.use('ecmascript');
  api.addFiles('Refs.js');
  api.export('Refs');
});