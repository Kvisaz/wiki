#  Node Versions management

## Mac OS/ Unix

Use n, an extremely simple Node version manager that can be installed via npm.

Usage:
n                            # Output versions installed
n latest                     # Install or activate the latest node release
n stable                     # Install or activate the latest stable node release
n <version>                  # Install node <version>
n use <version> [args ...]   # Execute node <version> with [args ...]
n bin <version>              # Output bin path for <version>
n rm <version ...>           # Remove the given version(s)
n --latest                   # Output the latest node version available
n --stable                   # Output the latest stable node version available
n ls                         # Output the versions of node available