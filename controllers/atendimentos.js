module.exports = app => {
    app.get('/atendimentos', (req, res) => res.send(
        'realizando GET de atendimentos'));

    app.post('/atendimentos', (req, res) => {
        console.log(req.body)
        res.send(
        'Você está em atendimentos e realizando um POST');
    });
};