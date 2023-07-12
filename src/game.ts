import { addDoc, collection } from 'firebase/firestore'
import { Map, map1 } from './createMap'
import { db } from './firebase'

type Player = {
  id: string
  colour: string
  positions: { pieceId: string; circleId: string }[]
}

export type GameState = {
  map: Map
  players: Player[]
}

export async function createGame() {
  const newGame: GameState = {
    map: map1,
    players: [
      {
        id: '1',
        colour: 'red',
        positions: [
          {
            pieceId: '1',
            circleId: '1',
          },
        ],
      },
    ],
  }
  const gameId = await addDoc(collection(db, 'games'), newGame)
  window.location.search = `?game=${gameId.id}`
}