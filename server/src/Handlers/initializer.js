

const initializer = (req, res) => {
    try {
        res.status(200).send('server initialized!')
        console.log('server initialized!');
    } catch (error) {
        res.status(401).send(error.message)
    }
}
module.exports = initializer;