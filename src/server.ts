import express from 'express';
import Config from './config.js';
import Middleware from './lib/middleware.js';
import Routes from './routers/implementations/routes.js';

export default class Server {
	private readonly app = express();
	private port: number | string;
	private httpServer: any;

	constructor(options?: { port?: number }) {
		options?.port ? (this.port = options.port) : (this.port = Config.port);
		this.registerMiddleware(this.app);
		this.registerRoutes(this.app);
	}

	private registerMiddleware(app: express.Application) {
		Middleware.registerMiddleware(app);
	}

	private registerRoutes(app: express.Application) {
		const routes = new Routes().setup();
		app.use('/', routes);
	}

	public run() {
		this.httpServer = this.app.listen(this.port, () => {
			console.log(`[SERVER] Servidor rodando na porta ${this.port}`);
		});
	}

	public stop() {
		this.httpServer && this.httpServer.close();
	}
}
