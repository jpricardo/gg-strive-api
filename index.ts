import app from './src/server.js';
import config from './src/config.js';

app.listen(config.port, () => {
	console.log(`[SERVER] Servidor rodando na porta ${config.port}`);
});
