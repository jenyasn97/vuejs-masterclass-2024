/* eslint-env node */

import { fakerEN_US as faker } from '@faker-js/faker'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)

const seedProjects = async (numEntries) => {
  const projects = []

  for (let i = 0; i < numEntries; i++) {
    const name = faker.lorem.words(3)

    projects.push({
      name: name,
      slug: name.toLowerCase().replace(/ /g, '-'),
      status: faker.helpers.arrayElement(['in-progress', 'completed']),
      collaborators: [faker.helpers.arrayElement([1, 2, 3])],
    })
  }

  const { data, error } = await supabase.from('projects').insert(projects).select()

  if (error) {
    console.error('Error inserting data:', error)
  } else {
    console.log('Inserted data:', data)
  }
}
;(async () => {
  await seedProjects(10)
})()
