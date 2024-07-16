import React, { useState } from 'react';
   import axios from 'axios';

   const API_URL = 'http://localhost:3001/api/workflows';

   const WorkflowScheduler = () => {
     const [message, setMessage] = useState('');
     const [error, setError] = useState('');

     const scheduleWorkflow = async (workflow) => {
       try {
         const response = await axios.post(`${API_URL}/schedule`, { workflow });
         setMessage(response.data.message);
         setError('');
       } catch (err) {
         console.error('Error scheduling workflow:', err);
         setError('Failed to schedule workflow. Please try again.');
         setMessage('');
       }
     };

     return (
       <div className="container mx-auto p-4">
         <h1 className="text-2xl font-bold mb-4">Alteryx Workflow Scheduler</h1>
         <div className="grid grid-cols-2 gap-4">
           <button onClick={() => scheduleWorkflow('SMT')} className="bg-blue-500 text-white p-4 rounded">SMT</button>
           <button onClick={() => scheduleWorkflow('AEROGAIN')} className="bg-blue-500 text-white p-4 rounded">AEROGAIN</button>
           <button onClick={() => scheduleWorkflow('ENGINEERING')} className="bg-blue-500 text-white p-4 rounded">ENGINEERING</button>
           <button onClick={() => scheduleWorkflow('Lensar corespecs')} className="bg-blue-500 text-white p-4 rounded">Lensar corespecs</button>
         </div>
         {message && (
           <p className="mt-4 text-center text-green-600">{message}</p>
         )}
         {error && (
           <p className="mt-4 text-center text-red-600">{error}</p>
         )}
       </div>
     );
   };

   export default WorkflowScheduler;
