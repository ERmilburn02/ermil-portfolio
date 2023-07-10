import type { NextApiRequest, NextApiResponse } from "next";

export default function RedirectPayPal(
  req: NextApiRequest,
  res: NextApiResponse<void>
) {
  res.redirect("https://paypal.me/ERmilburn02");
}
