const http = require('http');
const countStudents = require('./3-read_file_async'); // Import countStudents function correctly

const args = process.argv.slice(2);
const DATABASE = args[0];

const hostname = '127.0.0.1';
const port = 1245;

const app = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  const { url } = req;

  if (url === '/') {
    res.end('Hello Holberton School!');
  } else if (url === '/students') {
    res.write('This is the list of our students\n');
    try {
      const students = await countStudents(DATABASE);
      // Format and send student information
      students.forEach((student) => {
        res.write(`Name: ${student.firstName} ${student.lastName}, Age: ${student.age}, Field: ${student.field}\n`);
      });
      res.end(); // End response after sending all student information
    } catch (error) {
      res.end(error.message); // Send error message if countStudents function fails
    }
  } else {
    res.statusCode = 404;
    res.end('Not Found'); // Handle 404 for unknown routes
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
