import type { NextApiRequest, NextApiResponse } from "next";

export default function RedirectItch(
  req: NextApiRequest,
  res: NextApiResponse<void>
) {
  res.redirect("https://ermilburn02.itch.io/");
}
