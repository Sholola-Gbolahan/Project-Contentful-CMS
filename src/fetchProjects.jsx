import { createClient } from "contentful"

const client = createClient({
  space: "21mr5uy6q5fg",
  environment: "master",
  accessToken: "A_IhglAGIOuJg4gT8wUCBM0c018ZsQkgWwFbl7bVqQo",
})

client
  .getEntries({
    content_type: "projects",
  })
  .then((response) => console.log(response))
  .catch(console.error)
