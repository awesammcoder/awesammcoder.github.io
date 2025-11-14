import { readdirSync, renameSync } from 'fs';
import { join } from 'path';

const root = process.cwd();
const sourceDir = join(root, 'portfolio');

const entries = readdirSync(sourceDir);

for (const entry of entries) {
    const fromPath = join(sourceDir, entry);
    const toPath = join(root, entry);

    renameSync(fromPath, toPath);
    console.log(`Moved: ${entry}`);
}