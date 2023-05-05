import type { VercelRequest, VercelResponse } from "@vercel/node";
import env from "dotenv";
env.config();
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2022-11-15",
  typescript: true,
});

export default async function hello(req: VercelRequest, res: VercelResponse) {
  try {
    const { amount } = req.body;

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "inr",
      payment_method_types: ["card"],
    });

    res.statusCode = 200;
    res.json({ paymentIntent });
  } catch (e) {
    console.log(e.message);

    res.statusCode = 400;
    res.json({ error: e });
  }
}
