import React from "react";

import Link from "next/link";

const NotFoundPage = () => {
  return (
    <main className="container">
      <title>Not found</title>
      <div className="py-5">
        <h1 className="mb-5 text-center">Page Not Found</h1>
        <div className="mb-5 pt-5 text-center">
          <div
            className="fs-5 fw-bold btn btn-info rounded-3"
            variant="info"
            size="lg"
          >
            <Link className="text-white" href="/">
              Go Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NotFoundPage;
