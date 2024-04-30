const fs = require('fs');

function readDatabase(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                reject(new Error('Cannot read the database'));
            } else {
                const lines = data.trim().split('\n');
                const studentMap = {};

                lines.forEach(line => {
                    const [firstName, lastName, age, field] = line.split(',');
                    if (firstName && lastName && age && field) {
                        if (!studentMap[field]) {
                            studentMap[field] = [];
                        }
                        studentMap[field].push(firstName);
                    }
                });

                resolve(studentMap);
            }
        });
    });
}

module.exports = { readDatabase };

