async function fetchAPI(query, { variables } = {}) {
  const res = await fetch(process.env.GRAPHCMS_PROJECT_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.GRAPHCMS_PROD_AUTH_TOKEN}`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  })
  const json = await res.json()

  if (json.errors) {
    console.log(process.env.NEXT_EXAMPLE_CMS_GCMS_PROJECT_ID)
    console.error(json.errors)
    throw new Error('Failed to fetch API')
  }

  return json.data
}

//   export async function getPreviewPostBySlug(slug) {
//     const data = await fetchAPI(
//       `
//       query PostBySlug($slug: String!, $stage: Stage!) {
//         post(where: {slug: $slug}, stage: $stage) {
//           slug
//         }
//       }`,
//       {
//         preview: true,
//         variables: {
//           stage: 'DRAFT',
//           slug,
//         },
//       }
//     )
//     return data.post
//   }

export async function getAllDesigns() {
  const data = await fetchAPI(`
  {
    designs(first: 4, orderBy: id_DESC) {
      id
      title
      design_img {
        url
      }
    }
  }     
    `)
  return data.designs
}
