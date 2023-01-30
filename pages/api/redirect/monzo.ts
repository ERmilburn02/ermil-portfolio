import type { NextApiRequest, NextApiResponse } from "next";

export default function RedirectMonzo(
  req: NextApiRequest,
  res: NextApiResponse<void>
) {
  res.redirect("https://monzo.me/elizamilburn");
}
