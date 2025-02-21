import { promises as fs } from 'fs';
import { resolve } from 'path';

export default defineEventHandler(async (event) => {
 
    const { path } = await readBody(event)
    const resolved = resolve(`content/${path.join('/')}`)

    let dir, data

    try {
        const stat = await fs.lstat(resolved)
        dir = stat.isDirectory()

    } catch (error) {
        throw new Error('Not a file or directory')
    }
    

    return {
        path,
        dir: dir.isDirectory()

    }
})
   