function response(sts, msg, aftrows, data = null){
    return {
        status: sts,
        message: msg,
        affectedRows: aftrows,
        data: data,
        timestamp: new Date().getTime()
    }
}
module.exports = {
    response
}