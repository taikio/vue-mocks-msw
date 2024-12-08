import { setupWorker } from "msw/browser";
import { profileHandlers } from "./profile/profileHandlers";

export const worker = setupWorker(...profileHandlers);
