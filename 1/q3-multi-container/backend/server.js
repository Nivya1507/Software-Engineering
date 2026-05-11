const express = require('express');
const redis = require('redis');
const cors = require('cors');

const app = express();
app.use(cors());

// Connect to Redis - 'redis-service' is the name we will use in Docker/K8s
const client = redis.createClient({
    url: 'redis://redis-service:6379'
});

client.on('error', (err) => console.log('Redis Client Error', err));

app.get('/api/hits', async (req, res) => {
    await client.connect();
    const hits = await client.incr('hits');
    await client.disconnect();
    res.json({ count: hits, message: "Hello from API with Database!" });
});

app.listen(5000, () => console.log('Backend on 5000'));
