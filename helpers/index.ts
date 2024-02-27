import * as fs from "fs";
import {execSync} from "child_process";
import {promises as fsPromises } from "fs";

export const writeStackNameToFile = (stackName: string) => {
    fs.writeFile('stack-name.txt', stackName, {}, (err) => {
        if (err) console.log({err})
        else console.log('file written successfully')
    })


    const rootLs = execSync(`ls`, {encoding: 'utf-8'})
    console.log({rootLs})
    const helpersLs = execSync(`cd src/helpers && ls`, {encoding: 'utf-8'})
    console.log({helpersLs})
    const scriptsLs = execSync(`cd scripts && ls`, {encoding: 'utf-8'})
    console.log({scriptsLs})
}

export const readStackNameFromFile = async (fileName: string) => {
    // const filePath = path.join(__dirname, fileName)
    const result = await fsPromises.readFile(fileName)
    return result.toString()
}