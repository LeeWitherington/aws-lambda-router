module.exports = {
    combineMiddlewares: (middlewares, handler) => middlewares.reduceRight((acc, cv) => (request, context) => cv(request, context, acc), handler)
};