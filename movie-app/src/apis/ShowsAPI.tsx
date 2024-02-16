/**
 *
 */
export default async function searchShows(query: string) {
  const res = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
  return await res.json();
}
