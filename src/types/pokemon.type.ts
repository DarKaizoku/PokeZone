import { TType } from "./Ttype.type"
import { TDefEvol } from "./defEvol.type"
import { TName } from "./name.type"
import { TResistance } from "./resistance.type"
import { TSprite } from "./sprites.type"
import { TStats } from "./stats.type"
import { TTalent } from "./talent.type"

export type TPokemon =
    {
        "pokedexId": number,
        "generation": number | null,
        "category": string | null,
        "name": TName,
        "sprites": TSprite,
        "types": TType[],
        "talents": TTalent[],
        "stats": TStats,
        "resistances": TResistance[],
        "evolution": {
            "pre": TDefEvol[] | null,
            "next": TDefEvol[] | null,
            "mega": null
        },
        "height": string,
        "weight": string,
        "egg_groups": string[],
        "sexe": {
            "male": number,
            "female": number
        },
        "catch_rate": number | null,
        "level_100": number | null,
        "forme": null
    }

