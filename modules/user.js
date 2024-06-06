const mongoose = require('mongoose');
const MONGODB_URI = "mongodb+srv://raj12345chaurasiya:geg6fZXd0dTBk2De@raj.2fcwxc7.mongodb.net/?retryWrites=true&w=majority&appName=Raj";
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB Atlas');
}).catch(err => {
    console.error('Error connecting to MongoDB Atlas:', err.message);
});

const userSchema = mongoose.Schema({
    firstname: String,
    lastname: String,
    number: Number,
    email: String,
    street: String,
    City: String,
    LogIN: String,
    country: String,
    password: String,
    date_time: String,
});

module.exports = mongoose.model("user", userSchema);