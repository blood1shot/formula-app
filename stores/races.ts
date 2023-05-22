import { defineStore } from "pinia";
import { ref } from "vue";
import type { raceInfo } from "../types/entities/raceInfo";

export const useRacesStore = defineStore(
  "races",
  () => {
    const racesList = ref<raceInfo[]>([
      {
        id: 1,
        title: "🏎 FORMULA 1 CRYPTO.COM MIAMI GRAND PRIX 2023 - Practice 1",
        country: "United States",
        time: "21:00-22:00",
        date: "05-05-2023",
        locale: "US",
        description: {
          text: "Follow all the action on F1 TV and F1.com",
          links: [{
            name: "F1.com",
            href: "https://www.formula1.com/"
          }]
        }
      },
      {
        id: 2,
        title: "🏎 FORMULA 1 CRYPTO.COM MIAMI GRAND PRIX 2023 - Practice 2",
        country: "United States",
        time: "00:30-01:30",
        date: "05-06-2023",
        locale: "US",
        description: {
          text: "Follow all the action on F1 TV and F1.com",
          links: [{
            name: "F1.com",
            href: "https://www.formula1.com/"
          }]
        }
      },
      {
        id: 3,
        title: "🏎 FORMULA 1 CRYPTO.COM MIAMI GRAND PRIX 2023 - Practice 3",
        country: "United States",
        time: "19:30-20:30",
        date: "05-06-2023",
        locale: "US",
        description: {
          text: "Follow all the action on F1 TV and F1.com",
          links: [{
            name: "F1.com",
            href: "https://www.formula1.com/"
          }]
        }
      },
      {
        id: 4,
        title: "⏱️ FORMULA 1 CRYPTO.COM MIAMI GRAND PRIX 2023 - Qualifying",
        country: "United States",
        time: "23:00-00:00",
        date: "05-06-2023",
        locale: "US",
        description: {
          text: "Follow all the action on F1 TV and F1.com",
          links: [{
            name: "F1.com",
            href: "https://www.formula1.com/"
          }]
        }
      },
      {
        id: 5,
        title: "🏁 FORMULA 1 CRYPTO.COM MIAMI GRAND PRIX 2023 - Race",
        country: "United States",
        time: "22:30-00:30",
        date: "05-07-2023",
        locale: "US",
        description: {
          text: "Follow all the action on F1 TV and F1.com",
          links: [{
            name: "F1.com",
            href: "https://www.formula1.com/"
          }]
        }
      },
      {
        id: 6,
        title: "🏎 FORMULA 1 QATAR AIRWAYS GRAN PREMIO DEL MADE IN ITALY E DELL'EMILIA-ROMAGNA 2023 - Practice 1",
        country: "Italy",
        time: "14:30-15:30",
        date: "05-19-2023",
        locale: "EU",
        description: {
          text: "Follow all the action on F1 TV and F1.com",
          links: [{
            name: "F1.com",
            href: "https://www.formula1.com/"
          }]
        }
      }
    ]);

    return { racesList };
  }
);
