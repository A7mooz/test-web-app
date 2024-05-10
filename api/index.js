const express = require('express');
const app = express();

const cors = require('cors')

// The following is not needed, CORS middleware will be applied
// using the Apollo Server's middleware API (see further below)
app.use(cors())

app.get('/users', (req, res) => {
    res.json([{id: "479269670998900736", username: "user1"}, { id: "799307094099623936", "username": "user2" }]);
});

app.listen(4000, () => {
    console.log('API is up');
});