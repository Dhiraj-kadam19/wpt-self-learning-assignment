const http = require('http');
const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        if (req.url === '/') {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(`
                <h2>Simple Node.js App</h2>
                <form method="POST" action="/submit">
                    <input type="text" name="username" placeholder="Enter Name" required>
                    <br><br>
                    <button type="submit">Submit</button>
                </form>
            `);
        }
    }
    else if (req.method === 'POST' && req.url === '/submit') {
        let body = "";
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            let username = body.split('=')[1];

            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(`<h2>Hello ${username}</h2>`);
        });
    }

});
server.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});