import { createClient } from "contentful"
import { useEffect, useState } from "react"

const client = createClient({
  space: "21mr5uy6q5fg",
  environment: "master",
  accessToken: "A_IhglAGIOuJg4gT8wUCBM0c018ZsQkgWwFbl7bVqQo",
})

export const useFetchProjects = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [projects, setProjects] = useState([])

  const getData = async () => {
    try {
      const response = await client.getEntries({ content_type: "projects" })
      const projects = response.items.map((item) => {
        const { title, url, image } = item.fields
        const id = item.sys.id
        const img = image?.fields?.file?.url
        return { id, title, img, url }
      })
      setProjects(projects)

      setIsLoading(false)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getData()
  }, [])

  return { isLoading, projects }
}
