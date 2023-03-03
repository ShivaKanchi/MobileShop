import express from 'express';

const mobileshop = express();

mobileshop.use(express.json());

mobileshop.get("/", (req, res) => {
    res.json({
        message: "Server is up"
    });
});
mobileshop.listen(4000, () => {
    console.log("Server is up"); //port 4000

});