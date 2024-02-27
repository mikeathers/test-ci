import {execSync} from 'child_process'
import {readStackNameFromFile} from "./helpers";

async function main() {
  console.log('process', process.env)
  const stackName = process.env.normalised_branch_name
  console.log({stackName})

  // execSync(
  //     `npx cdk --context stage=dev --force --app "ts-node ./src/deployment.ts" destroy ${stackName}`,
  //     {encoding: 'utf-8'},
  // )
}

main()