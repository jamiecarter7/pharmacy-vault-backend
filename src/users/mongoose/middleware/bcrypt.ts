import * as bcrypt from 'bcrypt';
const saltRounds = 10;

export async function hashPassword(
  passwordToBeHashed: string,
): Promise<string> {
  return await bcrypt.hash(passwordToBeHashed, saltRounds);
}

export async function comparePassword(
  passwordToBeCompared: string,
  DatabaseUserPasswordHash: string,
): Promise<boolean> {
  return await bcrypt.compare(passwordToBeCompared, DatabaseUserPasswordHash);
}
