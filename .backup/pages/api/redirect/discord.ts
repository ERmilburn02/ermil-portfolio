import type { NextApiRequest, NextApiResponse } from "next";

export default function RedirectDiscord(
  req: NextApiRequest,
  res: NextApiResponse<void>
) {
  res.redirect("https://discord.gg/xgzyD5m");
}
