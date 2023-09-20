import redis

r = redis.Redis(
  host='neat-cod-32261.upstash.io',
  port=32261,
  password='f1be7ffc91294067b17ab82c6f707f89'
)

for key in r.keys('*'):
    value = r.get(key)
    print(f'Key: {key.decode("utf-8")}, Value: {value.decode("utf-8")}')


from http.server import BaseHTTPRequestHandler

class handler(BaseHTTPRequestHandler):

    def do_GET(self):
        self.send_response(200)
        self.send_header('Content-type','text/plain')
        self.end_headers()
        self.wfile.write('Hello, world!'.encode('utf-8'))
        return