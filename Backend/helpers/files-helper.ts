import { unlink } from 'node:fs/promises';

export async function safeDelete(absolutePath: string) {
    
    
    try {
        // if(!absolutePath || !fs.existsSync(absolutePath)) return;
        await unlink(absolutePath)
    }
    catch (err) {
        console.log(err)
    }
}

