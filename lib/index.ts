import { readFileSync } from 'fs';

export function getIni(path: string) {
  return readFileSync(path, { encoding: 'utf8' } )
}