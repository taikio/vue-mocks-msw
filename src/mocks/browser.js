import { delay, http } from "msw";
import { setupWorker } from "msw/browser";
import { profileHandlers } from "./profile/profileHandlers";

const globalHandlers = [
  http.all("*", async () => {
    await delay(1000);
  }),
];

const finalHandlers = [...globalHandlers, ...profileHandlers];

export const worker = setupWorker(...finalHandlers);
