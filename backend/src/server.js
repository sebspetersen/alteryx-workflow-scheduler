require('dotenv').config();
    const express = require('express');
    const cors = require('cors');
    const workflowRoutes = require('./routes/workflows');
    const app = express();
    const port = process.env.PORT || 3001;

    app.use(cors());
    app.use(express.json());

    app.use('/api/workflows', workflowRoutes);

    app.get('/', (req, res) => {
      res.send('Alteryx Workflow Scheduler API');
    });

    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
