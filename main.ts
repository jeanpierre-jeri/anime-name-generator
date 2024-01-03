import generate from 'npm:japanese-name-generator'
import { Hono } from 'https://deno.land/x/hono/mod.ts'

const app = new Hono()

app.get('/', (c) => {
  const japanesePerson = generate()
  return c.json(japanesePerson)
})

Deno.serve(app.fetch)
