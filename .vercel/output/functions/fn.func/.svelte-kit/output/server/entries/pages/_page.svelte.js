import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
import { SSX } from "@spruceid/ssx";
import { w as writable } from "../../chunks/index2.js";
const Button_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "button.svelte-1a6h1qh{padding:var(--pad) calc(var(--pad) * 2);border-radius:var(--rad);border:none;background-color:var(--back-button);color:var(--text-button);font-size:1rem;cursor:pointer;transition:background-color var(--trans) ease-in-out, transform var(--trans) ease-in-out}button.svelte-1a6h1qh:hover{background-color:var(--back-button-hover);transform:scale(1.05) rotate(3deg)}button.svelte-1a6h1qh:active{background-color:var(--back-button-active);transform:scale(1)}button.svelte-1a6h1qh:disabled{background-color:var(--back-button);color:var(--text-weak);cursor:not-allowed}",
  map: null
};
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { disabled = false } = $$props;
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  $$result.css.add(css$2);
  return `<button ${disabled ? "disabled" : ""} class="svelte-1a6h1qh">${slots.default ? slots.default({}) : ``}</button>`;
});
const Login_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".content.svelte-1c63lyr{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh}h1.svelte-1c63lyr{text-align:center}",
  map: null
};
const Login = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { login } = $$props;
  if ($$props.login === void 0 && $$bindings.login && login !== void 0)
    $$bindings.login(login);
  $$result.css.add(css$1);
  return `<div class="content svelte-1c63lyr"><h1 class="svelte-1c63lyr" data-svelte-h="svelte-1wsy7a9">Login</h1> ${validate_component(Button, "Button").$$render($$result, {}, {}, {
    default: () => {
      return `Sign in with Ethereum`;
    }
  })} </div>`;
});
const Ask_svelte_svelte_type_style_lang = "";
const Box_svelte_svelte_type_style_lang = "";
const Org_svelte_svelte_type_style_lang = "";
const Recommend_svelte_svelte_type_style_lang = "";
const Prelude_svelte_svelte_type_style_lang = "";
const App_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-413gbe{display:flex;flex-direction:column;align-items:center;justify-content:flex-start;height:100vh;width:100vw;box-sizing:border-box;background:var(--back);position:relative}.loading.svelte-413gbe{position:absolute;top:0;left:0;width:100vw;height:100vh;display:flex;align-items:center;justify-content:center;font-size:1rem}.topbar.svelte-413gbe{display:flex;justify-content:space-between;padding:var(--pad);width:100vw;box-sizing:border-box;background:var(--back)}.logo.svelte-413gbe{font-size:1.5rem;font-weight:bold}.address.svelte-413gbe{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.content.svelte-413gbe{position:relative;display:flex;flex-direction:row;align-items:center;padding:var(--pad);padding-top:0;height:100%;width:100%;gap:var(--pad);box-sizing:border-box;position:relative}@media(max-width: 800px){.content.svelte-413gbe{flex-direction:column}}.buttons.svelte-413gbe{display:flex;flex-direction:row;align-items:center;justify-content:flex-end;gap:var(--pad)}",
  map: null
};
const App = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { logout } = $$props;
  let { address } = $$props;
  let { ssx } = $$props;
  let benchmark = writable({
    age: 3,
    mobility: 3,
    location: 3,
    involvement: 3
  });
  const handlePostContent = async (key, value) => {
    if (!key || !value) {
      alert("Invalid key or value");
      return;
    }
    const formatedKey = "content/" + key.replace(/\ /g, "_");
    await ssx.storage.put(formatedKey, value);
  };
  benchmark.subscribe((b) => {
    handlePostContent("benchmark", JSON.stringify(b));
  });
  if ($$props.logout === void 0 && $$bindings.logout && logout !== void 0)
    $$bindings.logout(logout);
  if ($$props.address === void 0 && $$bindings.address && address !== void 0)
    $$bindings.address(address);
  if ($$props.ssx === void 0 && $$bindings.ssx && ssx !== void 0)
    $$bindings.ssx(ssx);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${`<div class="loading svelte-413gbe" data-svelte-h="svelte-8f5md2">Loading...</div>`}`;
  } while (!$$settled);
  return $$rendered;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let address;
  let ssxProvider = null;
  const ssxHandler = async () => {
    const ssx = new SSX({
      providers: { server: { host: "/api" } },
      modules: {
        storage: {
          prefix: "my-app",
          hosts: ["https://kepler.spruceid.xyz"],
          autoCreateNewOrbit: true
        },
        credentials: true
      }
    });
    await ssx.signIn();
    ssxProvider = ssx;
  };
  const ssxLogoutHandler = async () => {
    ssxProvider?.signOut();
    ssxProvider = null;
  };
  address = ssxProvider?.address() || "";
  return `${ssxProvider == null ? ` ${validate_component(Login, "Login").$$render($$result, { login: ssxHandler }, {}, {})}` : `${validate_component(App, "App").$$render(
    $$result,
    {
      logout: ssxLogoutHandler,
      address,
      ssx: ssxProvider
    },
    {},
    {}
  )}`}`;
});
export {
  Page as default
};
