const express = require('express');
const router = express.Router();

router.post('/schedule', (req, res) => {
  const { workflow } = req.body;
  // TODO: Implement actual scheduling logic
  console.log(`Scheduling workflow: ${workflow}`);
  res.json({ message: `Scheduled ${workflow} workflow` });
});

module.exports = router;
