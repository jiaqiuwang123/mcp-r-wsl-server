const express = require('express');
const { spawn } = require('child_process');
const app = express();
const port = 3001;

app.use(express.json());

app.post('/execute-r', (req, res) => {
    const rCode = req.body.code;
    if (!rCode) {
        return res.status(400).json({ error: 'No R code provided.' });
    }

    // Execute R code in WSL
    const rProcess = spawn('wsl.exe', ['R', '-e', rCode]);

    let stdout = '';
    let stderr = '';

    rProcess.stdout.on('data', (data) => {
        stdout += data.toString();
    });

    rProcess.stderr.on('data', (data) => {
        stderr += data.toString();
    });

    rProcess.on('close', (code) => {
        res.json({
            stdout: stdout,
            stderr: stderr,
            exitCode: code
        });
    });

    rProcess.on('error', (err) => {
        console.error('Failed to start R process:', err);
        res.status(500).json({ error: 'Failed to execute R code.', details: err.message });
    });
});

app.get('/tools', (req, res) => {
    res.json([
            {
                name: 'execute-r',
                description: 'Executes R code in WSL.',
                parameters: {
                    type: 'object',
                    properties: {
                        code: {
                            type: 'string',
                            description: 'The R code to execute.'
                        }
                    },
                    required: ['code']
                }
            }
        ]);
});

app.listen(port, () => {
    console.log(`R MCP server listening at http://localhost:${port}`);
});
