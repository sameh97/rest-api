
module.exports = {
    connect: () => {
        const mongoose = require('mongoose')

        const mongoDB = `mongodb://127.0.0.1/sameh-store`;

        mongoose.connect(mongoDB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,

        })

        const db = mongoose.connection;

        db.on("open", () => {
            console.log(`Connected to MongoDB`)
        });

        db.on(
            "error",
            console.error.bind(console, "MongoDB connection error:")
        );
    }
}
