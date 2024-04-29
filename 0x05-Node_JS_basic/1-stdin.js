process.stdout.write('Welcome to Holberton School, what is your name?\n');
process.stdin.setEncoding('utf8');
process.stdin.on('data', (input) => {
  const name = input.trim();

  if (name.length > 0) {
    process.stdout.write(`Your name is: ${name}\n`);
  } else {
    process.stdout.write('Please enter a valid name.\n');
  }
});

// Listen for the 'end' event on stdin (when input stream ends)
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
