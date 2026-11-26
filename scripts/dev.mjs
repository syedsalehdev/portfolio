import { spawn } from 'node:child_process';
// Accept standard host/port flags used by preview tools, then pass Next.js flags.
const args = process.argv.slice(2).flatMap(arg => arg === '--strictPort' ? [] : [arg === '--host' ? '--hostname' : arg]);
const child = spawn(process.execPath, ['node_modules/next/dist/bin/next', 'dev', ...args], { stdio: 'inherit' });
child.on('exit', code => process.exit(code ?? 0));
for (const signal of ['SIGINT', 'SIGTERM']) process.on(signal, () => child.kill(signal));
