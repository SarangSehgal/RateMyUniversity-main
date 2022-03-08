import express from 'express';
import asyncHandler from 'express-async-handler';
const router = express.Router();
import University from '../models/universityModel.js';


// @desc    Fetch all universities
// @route   GET /api/universities
// @access  Public
router.get(
  '/',
  asyncHandler(async (req, res) => {
    const universities = await University.find({});
    
    res.json(universities);
  })
);

// @desc    Fetch singleuniversities
// @route   GET /api/universities/:id
// @access  Public
router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const university = await University.findById(req.params.id);

    if (university) {
      res.json(university);
    } else {
      res.status(404);
      throw new Error('University not found');
    }
  })
);

export default router;
