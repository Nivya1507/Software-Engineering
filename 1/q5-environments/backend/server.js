const express = require('express');
const app = express();
// This reads the 'APP_ENV' variable from Kubernetes
const environment = process.env.APP_ENV || 'unknown';

app.get('/', (req, res) => {
  res.send(`
    <div style="text-align:center; font-family:sans-serif; margin-top:50px;">
      <h1>Environment-Based Deployment</h1>
      <p style="font-size:1.5rem;">Current Environment: 
        <span style="color: ${environment === 'production' ? 'red' : 'green'}; font-weight:bold;">
          ${environment.toUpperCase()}
        </span>
      </p>
    </div>
  `);
});

app.listen(5000, () => console.log(`App running in ${environment}`));
