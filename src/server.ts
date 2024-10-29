import app from './app';

const port = 8080;

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`App listening on port ${port}!`);
});
