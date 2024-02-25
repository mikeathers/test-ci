const process = require('process');
const execSync = require('child_process').execSync;


async function main() {
  console.log(process.argv[2]);
  const output = execSync('ls', { encoding: 'utf-8' })

  console.log('Output was:\n', output);

}

main()
