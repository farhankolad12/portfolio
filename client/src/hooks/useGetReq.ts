import { useEffect, useState } from "react";

export function useGetReq(endpoint: string, params: any) {
  const [data, setData] = useState<any | undefined>();
  const [loading, setLoading] = useState<boolean>(true);
  const [err, setErr] = useState("");

  useEffect(() => {
    (async () => {
      setData(undefined);
      setLoading(true);
      await fetch(
        `${import.meta.env.VITE_APP_API}${endpoint}${
          params ? "?" + new URLSearchParams(params) : ""
        }`,
        {
          headers: {
            "Content-Type": "application/json",
            // "Access-Control-Allow-Origin": import.meta.env.VITE_APP_API,
          },
          method: "GET",
        }
      )
        .then(async (res) => {
          const d = await res.json();
          setData(d);
        })
        .catch((error) => setErr(error.message))
        .finally(() => setLoading(false));
    })();
  }, [params.id]);

  return { data, loading, err };
}
