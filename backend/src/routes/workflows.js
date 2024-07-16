const ExcelJS = require('exceljs');
const path = require('path');

const excelFile = path.join(__dirname, '..', '..', 'data', 'schedule.xlsx');

async function addWorkflowToSchedule(workflow, scheduledTime) {
  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.readFile(excelFile);
  
  const worksheet = workbook.getWorksheet('Schedule');
  
  // Add a new row with the workflow details
  worksheet.addRow([
    workflow,
    scheduledTime,
    '1', // interval
    'dk-msv-05-7875', // machine_id
    '1', // schedule_id
    '1', // stop_if_fail
    '(\\d).*' // filename_regex
  ]);

  await workbook.xlsx.writeFile(excelFile);
}

module.exports = { addWorkflowToSchedule };
