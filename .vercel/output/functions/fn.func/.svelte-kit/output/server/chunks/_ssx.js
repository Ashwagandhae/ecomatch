import spruceid from "@spruceid/ssx-server";
const ssx = new spruceid.SSXServer({
  signingKey: process.env.SSX_SIGNING_KEY
});
export {
  ssx as s
};
