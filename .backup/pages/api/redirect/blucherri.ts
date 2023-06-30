import type { NextApiRequest, NextApiResponse } from "next";

export default function RedirectBluCherri(
  req: NextApiRequest,
  res: NextApiResponse<void>
) {
  res.redirect("https://blucherri.com/");
}
