from flask import Flask, jsonify

app = Flask(__name__)

@app.get('/')
def home():
    return jsonify(message="Flask API is running in Kubernetes!", status="Success")

@app.get('/health')
def health():
    return jsonify(status="Healthy")

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
