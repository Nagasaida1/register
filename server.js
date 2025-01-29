const express = require('express');  
const app = express();               

app.use(express.json());  


app.post('/register', (req, res) => {
    const { name, email, password } = req.body;  

   
    if (!name || !email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    
    res.status(200).json({ message: 'Registration successful', user: { name, email } });
});


app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
