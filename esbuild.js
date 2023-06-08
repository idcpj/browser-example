require('esbuild').build({
    entryPoints: ['src/index.ts'],
    outfile: 'dist/main.js',
    bundle: true,
}).catch(() => process.exit(1));

