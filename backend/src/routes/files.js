const angularRoutePaths = [
  "/",
  "/listings",
  "/contact/{id}",
  "/edit-listings/{id}",
  "/listings/{id}",
  "my-listing",
  "new-listing",
];

export const filesRoutes = angularRoutePaths.map ( path => ({
  method: "GET",
  path,
  handler: (req, res) => {
   return res.file("dist/angular/index.html")
  },
}))
export const staticFilesRoute = {
  method: "GET",
  path: "/{params*}",
  handler: {
    directory: {
      path: "/dist/angular",
    },
  },
};
