module.exports = function (request, response, next)
{
    const PREFIX = '/api/';
    const validToken = 'TK259439191277xxNWinVle5365yotBmoT';
    const securedEndpoints = [
        PREFIX + 'user/profile'
    ];

    if (securedEndpoints.indexOf(request.originalUrl) > -1)
    {
        if (typeof request.headers.authorization === 'undefined' || request.headers.authorization != validToken)
        {
            // Invalid token. Return 401
            response.sendStatus(401);
        }
        else
        {
            // Valid token. Follow middleware pipeline
            next();
        }
    }
    else
    {
        // Public route. Follow middleware pipeline
        next();
    }
};
