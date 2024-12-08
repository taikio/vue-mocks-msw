import { http, HttpResponse } from "msw";
import { profileMocks } from "./profileMocks";

export const profileHandlers = [
  http.get("http://minhaapi.com/user/profile/:id", ({ params }) => {
    return HttpResponse.json({ ...profileMocks.success });
  }),

  http.put(
    "http://minhaapi.com/user/profile/:id",
    async ({ params, request }) => {
      const updatedProfile = await request.json();

      return HttpResponse.json({
        ...updatedProfile,
        id: params.id,
      });
    }
  ),
];
