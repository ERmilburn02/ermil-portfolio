import type { NextApiRequest, NextApiResponse } from "next";

export default function RedirectSTB(
  req: NextApiRequest,
  res: NextApiResponse<void>
) {
  res.redirect("https://www.stbgame.net/");
}
