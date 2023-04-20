export default (err, req, res, next) => {
    const code = err.code || 400
    res.status(code).send(err.message)
}