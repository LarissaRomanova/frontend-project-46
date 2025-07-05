import fs from 'fs'
import path from 'path'
import process from 'process'

export function readFile(filePath) {
  const absolutePath = path.resolve(process.cwd(), filePath)
  const data = fs.readFileSync(absolutePath, 'utf-8')

  const extension = filePath.slice(filePath.lastIndexOf('.') + 1)

  if (extension === 'json') {
    return JSON.parse(data)
  }

  throw new Error(`Unsupported file extension: ${extension}`)
}
