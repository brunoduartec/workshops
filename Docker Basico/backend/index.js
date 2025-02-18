const express = require('express');
const cors = require('cors');
const redis = require('redis');

const app = express();
app.use(cors());

// Cria um cliente Redis que se conecta ao serviço "redis" (definido no docker-compose)
const client = redis.createClient({
  host: 'redis', // nome do serviço Redis lá no docker-compose
  port: 6379
});

// Apenas para logar possíveis erros do Redis
client.on("error", (error) => {
  console.error("Redis error", error);
});

// Rota simples para testar
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Olá Docker! Esta é a sua API com Redis.' });
});

// Rota que incrementa um contador no Redis e retorna seu valor
app.get('/api/click', async (req, res) => {
  try {
    // `INCR` no Redis retorna o valor incrementado
    const clicks = await new Promise((resolve, reject) => {
      client.incr('clicks', (err, reply) => {
        if (err) reject(err);
        else resolve(reply);
      });
    });

    res.json({ clicks });
  } catch (error) {
    console.error("Erro ao incrementar clicks no Redis", error);
    res.status(500).json({ error: "Erro ao incrementar contagem" });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`API rodando na porta ${PORT}`);
});