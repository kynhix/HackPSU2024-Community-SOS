"use client";

import { useEffect } from "react";

export default function Page({ params }: { params: { id: string } }) {
  const id = parseInt(params.id);
  if (!Number.isSafeInteger(id) || id < 0) {
    return <p>Invalid Event ID</p>;
  }

  var map = <iframe id="map-view"></iframe>

  function displayMap(address: string){

    useEffect(() => {
      const link = `https://www.google.com/maps?q=${address}&output=embed`

      document.getElementById("map-view")!.setAttribute("src", link);
    },
    []
    );

  }

  displayMap("Penn State Business Building")

  return map
}
