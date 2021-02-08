import { PokemonListModel } from "./pokemon-list"

test("can be created", () => {
  const instance = PokemonListModel.create({})

  expect(instance).toBeTruthy()
})
