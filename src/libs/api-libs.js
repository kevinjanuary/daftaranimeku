export const getAnimeResponse = async (resource, query) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`)
    const data = await response.json()
    return data
}

export const getNestedAnimeResponse = async (resource, objectProperty) => {
    const response = await getAnimeResponse(resource)
    return response.data.flatMap(item => item[objectProperty])
}

export const randomData = (data, range) => {
    const random = ~~(Math.floor(Math.random() * (data.length - range) + 1))
    return { data: data.slice(random, random + range) }
}