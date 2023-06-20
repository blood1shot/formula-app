import { defineStore } from "pinia";
import { ref } from "vue";
import type { INewsInfo } from "@/types/entities/INewsInfo";

export const useNewsStore = defineStore(
  "news",
  () => {
    const newsList = ref<INewsInfo[]>([
      {
        id: 1,
        imgSource: "https://res.cloudinary.com/prod-f2f3/ar_16:9,c_fill,dpr_1.0,f_auto,g_auto,h_563,w_1000/v1/f2/global/articles/2023/03_March/GettyImages-1239784539",
        type: "Preview",
        title: "Melbourne Preview: Making history in Australia",
        subtitle: "THE CHAMPIONSHIP STANDINGS",
        description: "After an exhilarating second race weekend of the season, the action continues as FIA Formula 2 heads to Melbourne, Australia for its debut in the Southern Hemisphere. The Albert Park circuit will be a brand new venue for all of the drivers on the grid, including home hero Jack Doohan, who will be racing a car for the first time on home soil. Will home comforts help the Aussie onto his first victory of the 2023 campaign? Or will someone else win big down under? Here is all you need to know ahead of Round 3 of the FIA F2 season.",
        createdAt: "2023-04-20",
        author: "Oleksay",
        tags: ["MELBOURNE", "2023"]
      },
      {
        id: 2,
        imgSource: "https://res.cloudinary.com/prod-f2f3/image/upload/v1680792345/f2/global/articles/2023/04_April/2303_-_AUS_-_Road_TO_F1_Thumb.png",
        videoSource: "https://www.fiaformula2.com/videos/f2/2023/Road+to+F1/WIDE+-+2303+-+AUS+-+F2+%2BF3+-+ROAD+TO+F1+-+JS.mp4",
        type: "Video",
        title: "WATCH: Melbourne Road to F1 Round-up",
        subtitle: "WATCH THIS",
        description: "Watch highlights from the third round of the 2023 FIA Formula 2 season from Melbourne, Australia.",
        createdAt: "2023-04-23",
        author: "Oleksay",
        tags: ["Baku", "2023"]
      },
      {
        id: 3,
        imgSource: "https://res.cloudinary.com/prod-f2f3/image/upload/v1663077887/f2/global/articles/2022/09_September/F2_BrunoDebrief022-Rd13ITA.jpg",
        type: "Guest Column",
        title: "Drama down under: Bruno Michel’s Debrief",
        subtitle: "DAMS MAKES A MARK IN ROUND 3",
        description: "With a huge attendance across the weekend and our first repeat winner of the 2023 season, CEO Bruno Michel reflects on a special weekend for the Championship. Ever since their Teams’ Title in 2019, DAMS have been working hard to return to the top of the Standings. Last year, they signed a young and promising rookie, Ayumu Iwasa, who impressed with a total of two wins, six podiums and two pole positions in 2022. The Red Bull junior stayed with DAMS for a second season, with the goal of fighting for the Championship. Round 1 was a bit of a hit and a miss, but a Sprint Race victory in Jeddah, followed by P4 in the Feature Race, proved that Iwasa and DAMS were on the right track. Last weekend in Melbourne, the Japanese ace claimed pole position and dominated the rest of the field in the Feature Race. He’s the first driver this season to take more than one win, and he scored enough points to jump from third to first in the Standings. Meanwhile, Arthur Leclerc pocketed a maiden podium finish on Sunday in P3, becoming the fifth rookie to feature on a rostrum in 2023. His 20-points haul in Melbourne helped DAMS shoot to P1 in the Teams’ Championship. The French squad amassed a total of 47 points in Round 3 to lead ART Grand Prix by 24 points.",
        createdAt: "2023-03-27",
        author: "Oleksay",
        tags: ["Baku", "2023"]
      },
      {
        id: 4,
        imgSource: "https://res.cloudinary.com/prod-f2f3/ar_16:9,c_fill,dpr_1.0,f_auto,g_auto,h_563,w_1000/v1/f2/global/articles/2023/03_March/JP1_2281_SoagwqIl",
        type: "Feature",
        title: "Pizza, lucky charms and becoming a Ferrari junior: Getting to know the real Oliver Bearman",
        subtitle: "ROOKIE DRIVER MAKES IMPRESSION",
        description: "One of nine rookie drivers on the Formula 2 grid this season, Oliver ‘Ollie’ Bearman has already set out to make an impression across the opening two rounds of the 2023 campaign. As the Championship heads to the Land Down Under this weekend, we got to find out a bit more about the PREMA Racing driver – from his excitement at venturing over to Australia for the first time, why he’s all about keeping things simple and his request for a secret Ferrari recipe.",
        createdAt: "2023-01-12",
        author: "Oleksay",
        tags: ["PREMA RACING", "2023", "OLIVER BEARMAN"]
      },
      {
        id: 5,
        imgSource: [
          "https://res.cloudinary.com/prod-f2f3/image/upload/ar_16:9,dpr_1.0,c_fill,f_auto,g_auto,q_auto,w_1200/v1679577781/f2/global/articles/2023/03_March/Jeddah%20Photo%20Gallery/JP2_5789",
          "https://res.cloudinary.com/prod-f2f3/image/upload/ar_16:9,dpr_1.0,c_fill,f_auto,g_auto,q_auto,w_1200/v1680702557/f2/global/articles/2023/04_April/Melbourne%20Photo%20Gallery/GettyImages-1478303424",
          "https://res.cloudinary.com/prod-f2f3/image/upload/ar_16:9,dpr_1.0,c_fill,f_auto,g_auto,q_auto,w_1200/v1680702696/f2/global/articles/2023/04_April/Melbourne%20Photo%20Gallery/GettyImages-1478221286",
          "https://res.cloudinary.com/prod-f2f3/image/upload/ar_16:9,dpr_1.0,c_fill,f_auto,g_auto,q_auto,w_1200/v1680701726/f2/global/articles/2023/04_April/Melbourne%20Photo%20Gallery/GettyImages-1478603974",
          "https://res.cloudinary.com/prod-f2f3/image/upload/ar_16:9,dpr_1.0,c_fill,f_auto,g_auto,q_auto,w_1200/v1680702251/f2/global/articles/2023/04_April/Melbourne%20Photo%20Gallery/GettyImages-1478921524",
          "https://res.cloudinary.com/prod-f2f3/image/upload/ar_16:9,dpr_1.0,c_fill,f_auto,g_auto,q_auto,w_1200/v1680702062/f2/global/articles/2023/04_April/Melbourne%20Photo%20Gallery/GettyImages-1478632683"
        ],
        imgGallery: true,
        type: "Image Gallery",
        title: "GALLERY: The moments you might have missed from Round 2, Jeddah",
        subtitle: "CHECK THIS",
        description: "Battling it out on the fastest street circuit in the world, look back on some of the best shots from Round 2 of the 2023 Formula 2 season in Jeddah, Saudi Arabia.",
        createdAt: "2023-05-3",
        author: "Oleksay",
        tags: ["JEDDAH", "2023"]
      },
      {
        id: 6,
        imgSource: "https://res.cloudinary.com/prod-f2f3/ar_16:9,c_fill,dpr_1.0,f_auto,g_auto,h_563,w_1000/v1/f2/global/articles/2023/04_April/F2_ChasingTheDream-Main_s05e04",
        type: "News",
        title: "Chasing the Dream Season 5, Episode 4 – Out Today",
        subtitle: "ALREADY AVAILABLE",
        description: "While we all eagerly await the next round of the 2023 campaign, a bonus episode of this year’s Chasing the Dream series releases later today to keep you busy. Fresh from his first ever home race weekend, the episode follows Jack Doohan after his Melbourne exploits. The Invicta Virtuosi Racing driver fought back from P15 to P8 on home soil in the Feature Race. A much stronger showing could have been within his grasp but for a poorly timed Red Flag in Qualifying. With time to reflect on the weekend and season overall before Baku, Doohan regroups and invites the cameras along for the ride. Surf's up as the Alpine junior takes us back to his home and racing roots, alongside hitting the track with long-time friend and 2020 F2 Champion Mick Schumacher. Keep an eye out every Wednesday following a race weekend for the latest instalment of Season 5 and the chance to get closer to Formula 2 than ever before. Available on F1 YouTube and F1TV today.",
        createdAt: "2023-04-27",
        author: "Oleksay",
        tags: ["CHASING THE DREAM", "2023"]
      }
    ]);

    const latestNews = newsList.value.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0, 3);

    return { newsList, latestNews };
  }
);
