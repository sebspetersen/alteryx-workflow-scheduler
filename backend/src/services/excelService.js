const ExcelJS = require('exceljs');
   const path = require('path');

   const excelFile = path.join(__dirname, '..', '..', process.env.EXCEL_FILE_PATH || 'data/schedule.xlsx');

   async function addWorkflowToSchedule(workflow, scheduledTime) {
     const workbook = new ExcelJS.Workbook();
     
     try {
       await workbook.xlsx.readFile(excelFile);
     } catch (error) {
       // If the file doesn't exist, create a new workbook
       const worksheet = workbook.addWorksheet('Schedule');
       worksheet.addRow(['Workflow', 'Scheduled Time', 'Interval', 'Machine ID', 'Schedule ID', 'Stop If Fail', 'Filename Regex']);
     }
     
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
