import http.server
import os

os.chdir("/Users/MacBook/Downloads/SNS運用代行会社HP")

handler = http.server.SimpleHTTPRequestHandler
server = http.server.HTTPServer(("", 3456), handler)
server.serve_forever()
