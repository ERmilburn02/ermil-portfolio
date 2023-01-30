import type { NextApiRequest, NextApiResponse } from "next";

export default function RedirectTwitter(
  req: NextApiRequest,
  res: NextApiResponse<void>
) {
  res.redirect("https://twitter.com/ERmilburn02");
}
