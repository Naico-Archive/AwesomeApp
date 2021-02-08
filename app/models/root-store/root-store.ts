import { cast, Instance, SnapshotOut, types } from "mobx-state-tree"
import { Pokemon, PokemonModel } from "../pokemon/pokemon"

/**
 * A RootStore model.
 */
// prettier-ignore
export const RootStoreModel = types.model("RootStore").props({
  pokemonList: types.array(PokemonModel)
}).actions(self => ({
  afterCreate() {
    const pokemon1:Pokemon = { name: "Pokemon 1", url: "Pokemon 1 url" }
    const pokemon2:Pokemon = { name: "Pokemon 2", url: "Pokemon 2 url" }
    const pokemon3:Pokemon = { name: "Pokemon 3", url: "Pokemon 3 url" }
    const pokemon4:Pokemon = { name: "Pokemon 4", url: "Pokemon 4 url" }
    const pokemon5:Pokemon = { name: "Pokemon 5", url: "Pokemon 5 url" }

    self.pokemonList = cast([pokemon1, pokemon2, pokemon3, pokemon4, pokemon5])
  },
}))

/**
 * The RootStore instance.
 */
export interface RootStore extends Instance<typeof RootStoreModel> {}

/**
 * The data of a RootStore.
 */
export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> {}
