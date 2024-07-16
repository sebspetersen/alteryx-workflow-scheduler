import React, { useState } from 'react';

const WorkflowScheduler = () => {
  const [message, setMessage] = useState('');

  const scheduleWorkflow = (workflow) => {
    // In the future, this would interact with a backend API
    setMessage(`Scheduled ${workflow} workflow`);
    console.log(`Scheduling ${workflow} workflow`);
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
    </div>
  );
};

export default WorkflowScheduler;
