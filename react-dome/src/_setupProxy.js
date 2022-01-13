const proxy = require ( 'http-middleware' )
module.exports = function ( app ) {
    app.use
    {
        '/api',
            proxy ( {
                target: '',
                changeOrigin: true
            } )
    }
}
