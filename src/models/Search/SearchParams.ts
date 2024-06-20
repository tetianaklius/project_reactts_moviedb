export interface ISearchParams {
    page: string | null,
    with_genres?: string | null,
    language?: string | null,
    query?: string | null,
    sort_by?: string | null
    "vote_count.gte"?: number | null
}