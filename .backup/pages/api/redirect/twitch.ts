import type { NextApiRequest, NextApiResponse } from "next";

export default function RedirectTwitch(
  req: NextApiRequest,
  res: NextApiResponse<void>
) {
  res.redirect("https://twitch.tv/ERmilburn02");
}
