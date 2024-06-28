const express = require('express');
const router = express.Router();
const Help = require('../models/Help');
const auth = require('../middleware/auth');
const multer = require('multer');
const path = require('path');

// Configuração do Multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}_${file.originalname}`);
  }
});

const upload = multer({ storage: storage });

// Create Help
router.post('/', auth, upload.single('image'), async (req, res) => {
  const { title, description, meta, requester } = req.body;
  const file = req.file;

  if (!file) {
    return res.status(400).json({ msg: 'Image is required' });
  }

  try {
    const newHelp = new Help({
      title,
      description,
      image: file.path,
      meta,
      requester
    });
    const help = await newHelp.save();
    res.json(help);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// Get All Helps
router.get('/', async (req, res) => {
  try {
    const helps = await Help.find();
    res.json(helps);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// Get Help by ID
router.get('/:id', async (req, res) => {
  try {
    const help = await Help.findById(req.params.id);
    if (!help) return res.status(404).json({ msg: 'Help not found' });
    res.json(help);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

module.exports = router;
