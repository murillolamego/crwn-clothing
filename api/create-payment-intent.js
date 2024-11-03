require("dotenv").config();

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export async function POST(request) {
  try {
    const { amount } = await request.json();

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
      payment_method_types: ["card"],
    });

    const response = new Response(JSON.stringify({ paymentIntent }), {
      headers: { "Content-Type": "application/json" },
    });
    return response;
  } catch (error) {
    console.log({ error });

    return new Response({ status: 400 }, { error });
  }
}
