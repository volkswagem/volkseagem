import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { existsSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), 'out');
const port = Number(process.env.PORT || 3000);
const contentTypes = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.json': 'application/json; charset=utf-8', '.svg': 'image/svg+xml', '.txt': 'text/plain; charset=utf-8' };

createServer(async (request, response) => {
  const requestPath = decodeURIComponent((request.url || '/').split('?')[0]);
  const safePath = path.normalize(requestPath).replace(/^([/\\])+/, '');
  let filePath = path.join(root, safePath || 'index.html');
  if (existsSync(filePath) && statSync(filePath).isDirectory()) filePath = path.join(filePath, 'index.html');
  if (!filePath.startsWith(root) || !existsSync(filePath)) filePath = path.join(root, '404.html');
  try {
    const body = await readFile(filePath);
    response.writeHead(filePath.endsWith('404.html') ? 404 : 200, { 'Content-Type': contentTypes[path.extname(filePath)] || 'application/octet-stream', 'Cache-Control': 'public, max-age=60' });
    response.end(body);
  } catch {
    response.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
    response.end('Server error');
  }
}).listen(port, '0.0.0.0', () => console.log(`Static site listening on ${port}`));
