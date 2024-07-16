const express = require('express');
    const router = express.Router();
    const { addWorkflowToSchedule } = require('../services/excelService');
    const logger = require('../utils/logger');

    router.post('/schedule', async (req, res) => {
      try {
        const { workflow } = req.body;
        const scheduledTime = new Date().toISOString();
        await addWorkflowToSchedule(workflow, scheduledTime);
        logger.info(`Scheduled ${workflow} workflow for ${scheduledTime}`);
        res.json({ message: `Scheduled ${workflow} workflow for ${scheduledTime}` });
      } catch (error) {
        logger.error('Error scheduling workflow:', error);
        res.status(500).json({ error: 'Failed to schedule workflow' });
      }
    });

    module.exports = router;
