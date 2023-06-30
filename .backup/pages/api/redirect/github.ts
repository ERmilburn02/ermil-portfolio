import type { NextApiRequest, NextApiResponse } from "next";

export default function RedirectGitHub(
  req: NextApiRequest,
  res: NextApiResponse<void>
) {
  res.redirect("https://github.com/ERmilburn02");
}
