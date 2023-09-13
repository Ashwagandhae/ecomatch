import { s as ssx } from "../../../../chunks/_ssx.js";
import { j as json } from "../../../../chunks/index.js";
async function POST({ request }) {
  return json(
    {
      success: await ssx.logout() ?? true
    },
    {
      status: 200
    }
  );
}
export {
  POST
};
