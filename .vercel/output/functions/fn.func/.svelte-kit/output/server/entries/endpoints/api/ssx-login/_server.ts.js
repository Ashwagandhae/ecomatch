import { s as ssx } from "../../../../chunks/_ssx.js";
import { j as json } from "../../../../chunks/index.js";
async function POST({ request, cookies }) {
  const body = await request.json();
  const nonce = cookies.get("nonce");
  return json(
    await ssx.login(
      body.siwe,
      body.signature,
      body.daoLogin,
      body.resolveEns,
      nonce ?? "",
      body.resolveLens
    ),
    {
      status: 200
    }
  );
}
export {
  POST
};
