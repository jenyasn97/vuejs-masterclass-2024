/*eslint-env node*/

import { fakerEN_US as faker } from '@faker-js/faker'
import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
process.env.NODE_OPTIONS = '--no-warnings'

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)

const seedProjects = async () => {
  const name = faker.lorem.words(3)
  await supabase.from('projects').insert({
    name: name,
    slug: name.toLocaleLowerCase().replace(/ /g, '-'),
    status: faker.helpers.arrayElement(['in-progress', 'comleted']),
    collaborators: [faker.helpers.arrayElement([1, 2, 3])],
  })
}

await seedProjects()
