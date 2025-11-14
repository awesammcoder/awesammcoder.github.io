import { readdirSync, statSync, rmSync } from 'fs';
import { join } from 'path';

const root = process.cwd();

const keep = new Set([
    'node_modules',
    'old',
    'public',
    'scripts',
    'src',
    'LICENSE',
    'tsconfig.json',
]);

const isKept = (name) => {
    if (keep.has(name)) return true;
    if (name.startsWith('.')) return true;
    if (name.startsWith('package')) return true;
    if (name.endsWith('.md')) return true;
    return false;
};

const entries = readdirSync(root);

for (const entry of entries) {
    if (isKept(entry)) continue;

    const fullPath = join(root, entry);
    const stats = statSync(fullPath);

    if (stats.isDirectory() || stats.isFile()) {
        rmSync(fullPath, { recursive: true, force: true });
        console.log(`Deleted: ${entry}`);
    }
}