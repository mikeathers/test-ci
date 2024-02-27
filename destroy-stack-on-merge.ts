import {execSync} from 'child_process'
import {readStackNameFromFile} from "./helpers";

async function main() {
  console.log('process', process.argv)
  const stackName = process.argv[2]
  console.log({stackName})

  // execSync(
  //     `npx cdk --context stage=dev --force --app "ts-node ./src/deployment.ts" destroy ${stackName}`,
  //     {encoding: 'utf-8'},
  // )
}

main()