import type { NextApiRequest, NextApiResponse } from "next";

export default function RedirectLinkedin(
  req: NextApiRequest,
  res: NextApiResponse<void>
) {
  res.redirect("https://www.linkedin.com/in/dean-milburn/");
}
