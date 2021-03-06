class Route {
    constructor(options) {
        this.verb = options.verb;
        this.action = options.action;
        this.level = options.level;
        this.path = options.path;
        this.permissions = options.permissions;
        this.middlewares = options.middlewares || [];
    }

    create(app) {
        if (this.permissions) {
            app[this.verb](
                this.path,
                this.permissions(this.level),
                this.middlewares,
                this.action
            );
            return;
        }
        app[this.verb](this.path, this.middlewares, this.action);
    }

    desc() {
        return `\t${this.level}\t${this.verb}\t[${this.path}]`;
    }
}

module.exports = Route;
