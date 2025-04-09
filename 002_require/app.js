// módulo require
const os = require('os');
console.log(os.platform());
console.log(os.version())
console.log(os.machine())
console.log(os.release())
console.log(os.cpus()[0].model)
console.log(os.cpus()[0].speed)
console.log(os.totalmem())