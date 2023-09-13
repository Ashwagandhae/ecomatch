import { s as ssx } from "../../../../chunks/_ssx.js";
import "../../../../chunks/index.js";
async function GET({ request, cookies }) {
  const nonce = ssx.generateNonce();
  return new Response(nonce, {
    status: 200,
    headers: { "Set-Cookie": `nonce=${nonce}` }
  });
}
export {
  GET
};
