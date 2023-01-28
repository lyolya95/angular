import { fakeListings } from "./fake-data";
import Boom from "@hapi/boom";

export const getListingRoute = {
  method: "GET",
  path: "/api/listings/{id}",
  handler: (req, res) => {
    const id = req.params.id;
    const listing = fakeListings.find(
      (listing) => listing.id.toString() === id
    );

    if (!listing) throw Boom.notFound(`Listing doesn't exist with id ${id}`);

    return listing;
  },
};
