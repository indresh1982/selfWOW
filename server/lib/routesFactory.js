// Singleton
const Singleton = {
  // Set Routes
  setRoutes: (app, routes) => {
    for (let i = 0; i < routes.length; i++) {
      app.use(routes[i].path, routes[i].handler);
    }
  }
};

// exports
module.exports = Singleton;
