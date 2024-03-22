const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;

const mongoURI = 'mongodb+srv://Brandon:<password>@atlascluster.ypjfqgw.mongodb.net/?retryWrites=true&w=majority&appName=AtlasCluster';

router.post('/validar-correo', async (req, res) => {
  try {
    const client = await MongoClient.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
    const db = client.db('plantech');
    const collection = db.collection('usuarios');

    const { email } = req.body; // Suponiendo que el campo se llama "correo"

    const usuario = await collection.findOne({ email });

    if (usuario) {
      res.json({ success: true });
    } else {
      res.json({ success: false });
    }

    client.close();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error en el servidor' });
  }
});

module.exports = router;
