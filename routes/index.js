import express from 'express';
/* eslint-disable */
const router = express.Router();
/* GET home page. */
let count = 0;

router.get('/update*', (req, res) => {
  // res.send('GET request to the homepage');
  // res.end(200);
  let foo = {count:count};
  res.json(foo);
  count += 1;
  res.end(200);
});


router.get('*', (req, res) => {
  res.render('index');
});
export default router;
