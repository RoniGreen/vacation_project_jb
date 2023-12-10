import crypto from 'crypto';

export function hashPassword(passord: string){
    const saletedPassword = salt(passord);
    return crypto.createHash('sha256').update(saletedPassword).digest('hex');
}


function salt(password: string){
    return password.split('').join('-');
}