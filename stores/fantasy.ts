import { defineStore } from "pinia";
import { ref } from "vue";
import type { IPlayerInfo } from "@/types/entities/fantasy/IPlayerInfo";
import type { IConstructorInfo } from "@/types/entities/fantasy/IConstructorInfo";
import { Constructors } from "@/utils/enum/Constructors";

export const useFantasyStore = defineStore(
  "fantasy",
  () => {
    const playersList = ref<IPlayerInfo[]>([
      {
        id: 0,
        imgSource: "https://res.cloudinary.com/drlr8epdj/image/upload/v1684939990/formula-fantasy/Screenshot_%D0%BA%D0%BE%D0%BF%D1%96%D1%8F_linmnd.png",
        team: Constructors.RED_BULL_RACING,
        name: "Max Verstappen",
        picked: 68.00,
        value: 27.4,
        season_points: 233
      },
      {
        id: 1,
        imgSource: "https://res.cloudinary.com/drlr8epdj/image/upload/v1684939990/formula-fantasy/Screenshot-2_%D0%BA%D0%BE%D0%BF%D1%96%D1%8F_rxahaj.png",
        team: Constructors.RED_BULL_RACING,
        name: "Sergio Perez",
        picked: 47.00,
        value: 18.4,
        season_points: 205
      },
      {
        id: 2,
        imgSource: "https://res.cloudinary.com/drlr8epdj/image/upload/v1684939990/formula-fantasy/Screenshot-3_%D0%BA%D0%BE%D0%BF%D1%96%D1%8F_a1abrw.png",
        team: Constructors.ASTON_MARTIN,
        name: "Fernando Alonso",
        picked: 82.00,
        value: 9.2,
        season_points: 137
      },
      {
        id: 3,
        imgSource: "https://res.cloudinary.com/drlr8epdj/image/upload/v1684940451/formula-fantasy/Screenshot_yrczlp.png",
        team: Constructors.MERCEDES,
        name: "Lewis Hamilton",
        picked: 17.00,
        value: 23.8,
        season_points: 107
      },
      {
        id: 4,
        imgSource: "https://res.cloudinary.com/drlr8epdj/image/upload/v1684940564/formula-fantasy/Screenshot_zmirrb.png",
        team: Constructors.FERRARI,
        name: "Carlos Sainz",
        picked: 23.00,
        value: 17.2,
        season_points: 80
      },
      {
        id: 5,
        imgSource: "https://res.cloudinary.com/drlr8epdj/image/upload/v1684940753/formula-fantasy/Screenshot_1_bqsvwq.png",
        team: Constructors.ALPINE,
        name: "Pierre Gasly",
        picked: 30.00,
        value: 8.1,
        season_points: 54
      },
      {
        id: 6,
        imgSource: "https://res.cloudinary.com/drlr8epdj/image/upload/v1684940906/formula-fantasy/Screenshot_2_aapx0n.png",
        team: Constructors.HAAS,
        name: "Kevin Magnussen",
        picked: 15.00,
        value: 6.5,
        season_points: 41
      },
      {
        id: 6,
        imgSource: "https://res.cloudinary.com/drlr8epdj/image/upload/v1684941070/formula-fantasy/Screenshot_4_vjxhgf.png",
        team: Constructors.ALPHATAURI,
        name: "Yuki Tsunoda",
        picked: 11.00,
        value: 4.7,
        season_points: 27
      },
      {
        id: 7,
        imgSource: "https://res.cloudinary.com/drlr8epdj/image/upload/v1684941321/formula-fantasy/Screenshot_6_irew0q.png",
        team: Constructors.MCLAREN,
        name: "Lando Norris",
        picked: 17.00,
        value: 11.0,
        season_points: 26
      },
      {
        id: 8,
        imgSource: "https://res.cloudinary.com/drlr8epdj/image/upload/v1684941425/formula-fantasy/Screenshot_7_wzb0mr.png",
        team: Constructors.WILLIAMS,
        name: "Logan Sargeant",
        picked: 9.00,
        value: 3.6,
        season_points: -1
      },
      {
        id: 9,
        imgSource: "https://res.cloudinary.com/drlr8epdj/image/upload/v1684941158/formula-fantasy/Screenshot_5_kqmdgo.png",
        team: Constructors.ALFA_ROMEO,
        name: "Zhou Guanyu",
        picked: 16.00,
        value: 4.7,
        season_points: 38
      }
    ]);

    const constructorsList = ref<IConstructorInfo[]>([
      {
        id: 0,
        imgSource: "https://res.cloudinary.com/drlr8epdj/image/upload/v1687253077/formula-fantasy/red_bull_hna6pu.png",
        name: Constructors.RED_BULL_RACING,
        picked: 57.00,
        value: 27.7,
        season_points: 476
      },
      {
        id: 1,
        imgSource: "https://res.cloudinary.com/drlr8epdj/image/upload/v1687253077/formula-fantasy/mercedes_vipa9a.png",
        name: Constructors.MERCEDES,
        picked: 13.00,
        value: 25.1,
        season_points: 227
      },
      {
        id: 2,
        imgSource: "https://res.cloudinary.com/drlr8epdj/image/upload/v1687253077/formula-fantasy/aston_martin_vyisph.png",
        name: Constructors.ASTON_MARTIN,
        picked: 75.00,
        value: 7.0,
        season_points: 226
      },
      {
        id: 3,
        imgSource: "https://res.cloudinary.com/drlr8epdj/image/upload/v1687253077/formula-fantasy/ferrari_ttu0w0.png",
        name: Constructors.FERRARI,
        picked: 24.00,
        value: 22.2,
        season_points: 212
      },
      {
        id: 4,
        imgSource: "https://res.cloudinary.com/drlr8epdj/image/upload/v1687253077/formula-fantasy/alpine_zydwyi.png",
        name: Constructors.ALPINE,
        picked: 10.00,
        value: 9.9,
        season_points: 100
      },
      {
        id: 5,
        imgSource: "https://res.cloudinary.com/drlr8epdj/image/upload/v1687253077/formula-fantasy/haas_qatkzm.png",
        name: Constructors.HAAS,
        picked: 5.00,
        value: 5.1,
        season_points: 75
      },
      {
        id: 6,
        imgSource: "https://res.cloudinary.com/drlr8epdj/image/upload/v1687253077/formula-fantasy/mclaren_xbp9sy.png",
        name: Constructors.MCLAREN,
        picked: 7.00,
        value: 8.9,
        season_points: 65
      },
      {
        id: 7,
        imgSource: "https://res.cloudinary.com/drlr8epdj/image/upload/v1687253077/formula-fantasy/alfa_romeo_ipckzw.png",
        name: Constructors.ALFA_ROMEO,
        picked: 5.00,
        value: 5.9,
        season_points: 62
      },
      {
        id: 8,
        imgSource: "https://res.cloudinary.com/drlr8epdj/image/upload/v1687253077/formula-fantasy/alphatauri_plue2i.png",
        name: Constructors.ALPHATAURI,
        picked: 2.00,
        value: 6.1,
        season_points: 39
      },
      {
        id: 9,
        imgSource: "https://res.cloudinary.com/drlr8epdj/image/upload/v1687253077/formula-fantasy/williams_kb6dvq.png",
        name: Constructors.WILLIAMS,
        picked: 2.00,
        value: 4.7,
        season_points: -10
      }
    ]);

    return { playersList, constructorsList };
  }, {
    persist: true
  }
);
