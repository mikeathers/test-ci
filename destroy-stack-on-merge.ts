import {execSync} from 'child_process'
import {readStackNameFromFile} from "./helpers";

async function main() {
  const stackName = await readStackNameFromFile('stack-name.txt')

  execSync(
      `cd deployment && npx cdk --context stage=dev --force --app "ts-node ./src/deployment.ts" destroy ${stackName}`,
      {encoding: 'utf-8'},
  )
}

main()