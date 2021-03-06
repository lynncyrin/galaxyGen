/**
 * awaits wasm `${SCRIPT}_bg.wasm` compilation
 * then passes it into the main script
 */

import { MainScript } from "./main";

export async function setupMainScript() {
  const main = new MainScript(
    await import("galaxy_gen_backend/galaxy_gen_backend"),
    // @ts-ignore: ignore `module not found` for the wasm file
    await import("galaxy_gen_backend/galaxy_gen_backend_bg.wasm")
  );
  main.generateData(100);
  console.log({ cells: main.cells() });
}
