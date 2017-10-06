module.exports = function (request, response, next)
{
    const PREFIX = '/api/';
    const loginRoute = PREFIX + 'user/login';
    const studentRoute = PREFIX + 'student';

    if (request.originalUrl === loginRoute) // Login
    {
        if (typeof request.body.username !== 'undefined' && typeof request.body.password !== 'undefined' &&
            (request.body.username === 'pepita@algo.com' && request.body.password === 'Abc123'))
        {
            response.set('Content-Type', 'application/json');
            response.send(JSON.stringify(require('../data/login')));
        }
        else
        {
            response.sendStatus(401);
        }
    }
    else if(request.originalUrl === studentRoute)
    {
        response.set('Content-Type', 'application/json');
        response.send(JSON.stringify(require('../data/students')));
    }
    else
    {
        // No route match. Follow middleware pipeline
        next();
    }
};
