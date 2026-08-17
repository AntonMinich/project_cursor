import { cpSync, mkdirSync, readdirSync, rmSync, statSync, writeFileSync } from 'node:fs';
import path from 'node:path';

const dist = path.resolve('dist');
const root = path.resolve('.');

function copyDir(from, to) {
  mkdirSync(to, { recursive: true });
  for (const entry of readdirSync(from)) {
    const src = path.join(from, entry);
    const dest = path.join(to, entry);
    if (statSync(src).isDirectory()) copyDir(src, dest);
    else cpSync(src, dest);
  }
}

rmSync(path.join(root, 'assets'), { recursive: true, force: true });
copyDir(dist, root);
writeFileSync(path.join(root, '.nojekyll'), '');
console.log('GitHub Pages files synced to repo root');
