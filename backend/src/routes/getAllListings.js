import { db } from "../database";

export const getAllListingsRoute = {
  method: "GET",
  path: "/api/listings",
  handler: async (req, res) => {
    const { results } = await db.query("SELECT * FROM listings");

    return results;
  },
};
