const PARAM_PREFIX = "v_";

export function buildShareUrl(
  slug: string,
  category: string,
  inputs: Record<string, string>
): string {
  const base =
    typeof window !== "undefined"
      ? `${window.location.origin}/${category}/${slug}`
      : `/${category}/${slug}`;

  const params = new URLSearchParams();
  for (const [key, value] of Object.entries(inputs)) {
    if (value !== "") {
      params.set(`${PARAM_PREFIX}${key}`, value);
    }
  }

  const qs = params.toString();
  return qs ? `${base}?${qs}` : base;
}

export function parseShareParams(
  searchParams: Record<string, string | string[] | undefined>
): Record<string, string> {
  const result: Record<string, string> = {};
  for (const [key, value] of Object.entries(searchParams)) {
    if (key.startsWith(PARAM_PREFIX) && typeof value === "string") {
      result[key.slice(PARAM_PREFIX.length)] = value;
    }
  }
  return result;
}
