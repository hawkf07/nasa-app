import { APIContext } from "astro";
import { getApiDataFromNasaApiBySearch } from "../utils/api";
import { apiData } from "../utils/types";
export const get = async ({ request }: APIContext) => {
  const url = new URL(request.url);
  const params = new URLSearchParams(url.search);
  const searchQuery = params.get("search");
  const limit: number = Number(params.get("limit"));

  const data: apiData = await getApiDataFromNasaApiBySearch(searchQuery);
  const {
    collection: { links, href, metadata },
  } = data;

  if (!data) {
    return new Response(null, { status: 400, statusText: "data not found!" });
  }

  if (typeof limit == "number") {
    const limitData = data.collection.items.slice(0, limit);
    return new Response(
      JSON.stringify({
        data:limitData,
        links,
        href,
        metadata,
        total:limitData.length
      })
    );
  }

  return new Response(
    JSON.stringify({
      name: "all data from nasa api",
      description: "all api data from nasa images api",
      data,
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};
