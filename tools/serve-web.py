"""Serve the recovered public web build on loopback; no production API proxy."""
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import urlsplit
import argparse
import json

WORKSPACE = Path(__file__).resolve().parent.parent
WEB_ROOT = WORKSPACE / 'local-web'
LANDING = WEB_ROOT / 'index.html'


class Handler(SimpleHTTPRequestHandler):
    extensions_map = {**SimpleHTTPRequestHandler.extensions_map, '.woff2': 'font/woff2', '.woff': 'font/woff', '.js': 'application/javascript', '.mjs': 'application/javascript'}
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(WEB_ROOT), **kwargs)

    def end_headers(self):
        self.send_header('Cache-Control', 'no-store')
        self.send_header('Content-Security-Policy', "default-src 'self' data: blob:; script-src 'self' 'unsafe-inline' 'unsafe-eval' blob:; style-src 'self' 'unsafe-inline'; connect-src 'self' data: blob:; img-src 'self' data: blob:; media-src 'self' data: blob:; font-src 'self' data:; object-src 'none'; frame-src 'self' blob:; form-action 'self'; base-uri 'self'")
        self.send_header('X-Content-Type-Options', 'nosniff')
        super().end_headers()

    def local_api_unavailable(self):
        body = json.dumps({'error': 'local_backend_unavailable'}).encode()
        self.send_response(503)
        self.send_header('Content-Type', 'application/json; charset=utf-8')
        self.send_header('Content-Length', str(len(body)))
        self.end_headers()
        if self.command != 'HEAD':
            self.wfile.write(body)

    def do_GET(self):
        route = urlsplit(self.path).path
        if route.startswith(('/v1/', '/api/', '/updates/', '/download/')) and route.rstrip('/') != '/api/docs':
            return self.local_api_unavailable()
        if route in ('/', '/index.html') or ('.' not in route.rsplit('/', 1)[-1] and not (WEB_ROOT / route.lstrip('/')).exists()):
            body = LANDING.read_bytes()
            self.send_response(200)
            self.send_header('Content-Type', 'text/html; charset=utf-8')
            self.send_header('Content-Length', str(len(body)))
            self.end_headers()
            if self.command != 'HEAD':
                self.wfile.write(body)
            return
        return super().do_GET()

    def do_HEAD(self):
        return self.do_GET()

    def do_POST(self):
        return self.local_api_unavailable()

    do_PUT = do_PATCH = do_DELETE = do_POST


if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('--port', type=int, default=5173)
    args = parser.parse_args()
    if not LANDING.is_file():
        raise SystemExit(f'Missing recovered HTML: {LANDING}')
    server = ThreadingHTTPServer(('127.0.0.1', args.port), Handler)
    print(f'Local web: http://localhost:{args.port}/', flush=True)
    print('Free local features, browser storage, no production API proxy.', flush=True)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
    finally:
        server.server_close()
