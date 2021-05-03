from flask import Flask
from helpers import send_command

app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route('/command/<cmd>')
def command(cmd):
    send_command(cmd)
    return 'done'

if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port, debug=True)