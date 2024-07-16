const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Alteryx Workflow Scheduler API');
});

// TODO: Add routes for scheduling workflows

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
