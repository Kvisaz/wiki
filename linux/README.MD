# Linux / Mac OS commands

to delete all package-lock.json recursivele

`find . -name "package-lock.json" -exec rm -rf '{}' +;`

to delete all node-modules recursivele

`find . -name "node_modules" -exec rm -rf '{}' +;`