import { mkdirSync, cpSync, rmSync, writeFileSync } from 'node:fs';
import path from 'node:path';

const dist = path.resolve('dist');
const assetsDest = path.resolve('assets');

rmSync(assetsDest, { recursive: true, force: true });
mkdirSync(assetsDest, { recursive: true });
cpSync(path.join(dist, 'assets'), assetsDest, { recursive: true });
cpSync(path.join(dist, 'index.html'), path.resolve('index.html'));
writeFileSync(path.resolve('.nojekyll'), '');
