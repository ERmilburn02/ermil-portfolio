import type { NextApiRequest, NextApiResponse } from "next";

export default function RedirectDuckSchema(
  req: NextApiRequest,
  res: NextApiResponse<void>
) {
  res.redirect("https://gist.github.com/ERmilburn02/82ef04332680e27a5400fe99840deda9/raw/b14df738e192b7d18fd8fd32b6232e7e6055615f/DuckDialogue.schema.json");
}
