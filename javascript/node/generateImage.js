const fs = require('fs');
const path = require('path');

/**
 *  this is Node utility for create index for importing a lot of files
 *  run 'node 0batch' to generate actual image index
 */

const params = {
  indexName: 'images.ts',
  extensions: ['.svg', '.png'],
  constantName: 'Icons',
  /**
   * some icon has bad names like number, Number
   */
  iconPrefix: 'icon_',
};


// find images in current path
const files = fs.readdirSync('./').filter(file => params.extensions.includes(path.extname(file)));

// get imports
const imports = [];
files.forEach(file => {
  const name = normalizeName(path.basename(file, path.extname(file)));
  imports.push(`import ${name} from './${file}';`);
});


// make ts code
let tsCode = `\n${imports.join('\n')}\n\n`;
tsCode += `const ${params.constantName} = {\n`;

files.forEach(file => {
  const name = normalizeName(path.basename(file, path.extname(file)));
  tsCode += `  ${name},\n`;
});

tsCode += `};\n`;
tsCode += `export default ${params.constantName};\n`;

fs.writeFileSync(`./${params.indexName}`, tsCode);

console.log(`${params.indexName} generated successfully`);


function normalizeName (name) {
  return params.iconPrefix + name.replace(/-/g, '_');
}
