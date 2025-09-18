// // pb_to_game.ts
// import type { PBReview, PBGenre } from '@/typings/pb'
// import type { Game, GenreSlug } from '@/typings/types'

// const to_url = (base: string, rec: {collectionId:string; id:string}, f?:string) =>
//   f ? `${base}/api/files/${rec.collectionId}/${rec.id}/${f}` : undefined

// export const map_review_to_game = (baseUrl: string, r: PBReview): Game => {
//   const g = r.expand?.game!
//   const req = g.expand?.request
//   const nicks = (req?.expand?.people ?? []).map(p => p.nickname).filter(Boolean).join(', ') || undefined

//   const genre_slugs = (g.expand?.genres ?? [])
//     .map((x: PBGenre) => (x.slug || '').toLowerCase())
//     .filter(Boolean) as GenreSlug[]

//   return {
//     id: g.id,
//     index: r.stream_index,
//     title: g.title,
//     slug: g.slug,
//     rating: r.score,
//     emoji: r.emoji,
//     text: r.text,
//     cover_url: to_url(baseUrl, g, g.cover_image),
//     requested: nicks,
//     genre: genre_slugs,
//   }
// }
