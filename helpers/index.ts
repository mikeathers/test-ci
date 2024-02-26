import * as fs from "fs";
import * as fsPromises from 'fs/promises'
import * as path from "node:path";

export const writeStackNameToFile = (stackName: string) => {
    const writeStream = fs.createWriteStream('stack-name.txt')
    writeStream.write(stackName)
    writeStream.end()
}

export const readStackNameFromFile = async (fileName: string) => {
    const filePath = path.join(__dirname, fileName)
    const result = await fsPromises.readFile(filePath)
    return result.toString()
}