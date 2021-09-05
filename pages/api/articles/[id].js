import { articles } from '../../../data';

export default function handler(req, res) {
  const ids = req.query.id;
  const filtered = articles.filter(article => article.id === ids);

  if (filtered.length > 0) {
    res.status(200).json(filtered[0]);
  } else {
    res
      .status(404)
      .json({ message: `Article with the id of ${ids} is not found` });
  }
}
