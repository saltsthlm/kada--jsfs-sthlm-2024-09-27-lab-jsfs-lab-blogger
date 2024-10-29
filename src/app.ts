import express from 'express';

const app = express();

app.get('/', (request, response) => {
  response.send('hej hej');
});

// MORE ROUTES HERE

export default app;
