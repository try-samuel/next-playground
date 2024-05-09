import db from "@/db/db";
import { notFound } from "next/navigation";
import Stripe from "stripe";

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function PurchasePage({
  params: { id },
}: {
  params: { id: string };
}) {
  const product = await db.product.findUnique({ where: { id } });
  if (product == null) {
    return notFound();
  }
  return (
    <h1>
      Hi, Nothing here because stripe does not work in Nigeria.{" "}
      <span className="font-bold">Paystack it is?</span>
    </h1>
  );
}
