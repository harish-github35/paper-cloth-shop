import type { VercelRequest, VercelResponse } from "@vercel/node";

export default function hello(req: VercelRequest, res: VercelResponse) {
  const { body } = req;
  console.log(body);
  res.statusCode = 200;
  res.json({ message: "It works" });
}
