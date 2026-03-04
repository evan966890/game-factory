import http.server
import socketserver

port = 0
handler = http.server.SimpleHTTPRequestHandler
with socketserver.TCPServer(('', port), handler) as httpd:
    print(f'Server started on port {httpd.server_address[1]}')
    httpd.serve_forever()