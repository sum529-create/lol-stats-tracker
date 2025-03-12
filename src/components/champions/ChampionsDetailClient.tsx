import { RIOT_GAMES_API_URL } from "@/constants/constants";
import { ChampionDetail } from "@/types/Champion";
import { getLatestVersion } from "@/utils/serverApi";
import Image from "next/image";
import React from "react";

const ChampionDetailClient = async ({ data }: { data: ChampionDetail }) => {
  const version = await getLatestVersion();
  const DEFAULT_CHAMPION_IMG_URL = `${RIOT_GAMES_API_URL}/cdn/${version}/img`;

  return (
    <div className="container mx-auto p-4 max-w-6xl">
      {data && (
        <>
          {/* Hero Section */}
          <div className="rounded-lg overflow-hidden mb-8 relative">
            <div className="w-full h-64 bg-gradient-to-r from-[#ea6a64] to-[#ffcec3c3] relative">
              {/* Champion name overlay */}
              <div className="absolute bottom-0 left-0 p-6 z-10">
                <h1 className="text-4xl font-bold text-white">{data.name}</h1>
                <p className="text-xl text-[#4A4E4D]">{data.title}</p>
              </div>
            </div>

            {/* Basic Info */}
            <div className="bg-[#dedede] p-6 flex flex-wrap md:flex-nowrap gap-6 text-[#333333]">
              <div className="w-full md:w-1/4">
                <Image
                  width={80}
                  height={80}
                  src={`${DEFAULT_CHAMPION_IMG_URL}/champion/${data.image.full}`}
                  alt={data.name}
                  className="w-32 h-32 bg-gray-700 rounded-lg mx-auto border-2 border-blue-500"
                />
              </div>

              <div className="w-full md:w-3/4">
                <div className="mb-4">
                  <h2 className="text-2xl font-semibold mb-2">Lore</h2>
                  <p className="text-[#444]">{data.lore}</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                  <div className="bg-[#F2BAC9] p-3 rounded-lg text-center">
                    <span className="text-[#8e5c6a] block">Attack</span>
                    <div className="mt-1 w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-red-500 h-2 rounded-full"
                        style={{ width: `${data.info.attack * 10}%` }}
                      ></div>
                    </div>
                    <span className="font-bold">{data.info.attack}</span>
                  </div>

                  <div className="bg-[#F2BAC9] p-3 rounded-lg text-center">
                    <span className="text-[#8e5c6a] block">Defense</span>
                    <div className="mt-1 w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-green-500 h-2 rounded-full"
                        style={{ width: `${data.info.defense * 10}%` }}
                      ></div>
                    </div>
                    <span className="font-bold">{data.info.defense}</span>
                  </div>

                  <div className="bg-[#F2BAC9] p-3 rounded-lg text-center">
                    <span className="text-[#8e5c6a] block">Magic</span>
                    <div className="mt-1 w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-blue-500 h-2 rounded-full"
                        style={{ width: `${data.info.magic * 10}%` }}
                      ></div>
                    </div>
                    <span className="font-bold">{data.info.magic}</span>
                  </div>

                  <div className="bg-[#F2BAC9] p-3 rounded-lg text-center">
                    <span className="text-[#8e5c6a] block">Difficulty</span>
                    <div className="mt-1 w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-yellow-500 h-2 rounded-full"
                        style={{ width: `${data.info.difficulty * 10}%` }}
                      ></div>
                    </div>
                    <span className="font-bold">{data.info.difficulty}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-[#dedede] rounded-lg p-6">
              <h2 className="text-xl font-semibold text-[#222] mb-4">
                Combat Statistics
              </h2>
              <div className="grid gap-4">
                <div className="text-[#4A4E4D]">
                  <p className="flex justify-between">
                    <span>Health:</span>
                    <span className="font-medium text-green-800">
                      {data.stats.hp} (+{data.stats.hpperlevel})
                    </span>
                  </p>
                  <p className="flex justify-between">
                    <span>HP Regen:</span>
                    <span className="font-medium text-green-700">
                      {data.stats.hpregen} (+{data.stats.hpregenperlevel})
                    </span>
                  </p>
                  <p className="flex justify-between">
                    <span>Attack Damage:</span>
                    <span className="font-medium text-red-700">
                      {data.stats.attackdamage} (+
                      {data.stats.attackdamageperlevel})
                    </span>
                  </p>
                  <p className="flex justify-between">
                    <span>Attack Speed:</span>
                    <span className="font-medium text-yellow-700">
                      {data.stats.attackspeed} (+
                      {data.stats.attackspeedperlevel}%)
                    </span>
                  </p>
                </div>
                <div className="text-[#4A4E4D]">
                  <p className="flex justify-between">
                    <span>Armor:</span>
                    <span className="font-medium text-blue-700">
                      {data.stats.armor} (+{data.stats.armorperlevel})
                    </span>
                  </p>
                  <p className="flex justify-between">
                    <span>Magic Resist:</span>
                    <span className="font-medium text-purple-700">
                      {data.stats.spellblock} (+{data.stats.spellblockperlevel})
                    </span>
                  </p>
                  <p className="flex justify-between">
                    <span>Move Speed:</span>
                    <span className="font-medium text-blue-700">
                      {data.stats.movespeed}
                    </span>
                  </p>
                  <p className="flex justify-between">
                    <span>Range:</span>
                    <span className="font-medium text-yellow-700">
                      {data.stats.attackrange}
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#dedede] rounded-lg p-6">
              <h2 className="text-xl font-semibold text-[#222] mb-4">Tips</h2>
              <div className="mb-4">
                <h3 className="text-green-700 font-medium mb-2">
                  Playing as {data.name}
                </h3>
                <ul className="list-disc pl-5 text-[#4A4E4D] space-y-1">
                  {data.allytips.map((tip, index) => (
                    <li key={index}>{tip}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-red-700 font-medium mb-2">
                  Playing against {data.name}
                </h3>
                <ul className="list-disc pl-5 text-[#4A4E4D] space-y-1">
                  {data.enemytips.map((tip, index) => (
                    <li key={index}>{tip}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Abilities */}
          <div className="bg-[#dedede] rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-[#222] mb-6">
              Abilities
            </h2>

            {/* Passive */}
            <div className="border-b border-gray-700 pb-4 mb-4">
              <div className="flex items-start gap-4">
                <Image
                  width={50}
                  height={50}
                  src={`${DEFAULT_CHAMPION_IMG_URL}/passive/${data.passive.image.full}`}
                  alt={data.passive.name}
                  className="w-12 h-12 bg-gray-700 rounded-md border"
                />
                <div>
                  <h3 className="text-[#B33A3A] font-bold">
                    Passive: {data.passive.name}
                  </h3>
                  <p className="text-[#4A4E4D] mt-1">
                    {data.passive.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Spells */}
            {data.spells.map((spell, index) => (
              <div
                key={index}
                className={`${
                  index < data.spells.length - 1
                    ? "border-b border-gray-700"
                    : ""
                } pb-4 mb-4`}
              >
                <div className="flex items-start gap-4">
                  <Image
                    src={`${DEFAULT_CHAMPION_IMG_URL}/spell/${spell.image.full}`}
                    alt={spell.name}
                    width={50}
                    height={50}
                    className="w-12 h-12 bg-gray-700 rounded-md border"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-[#444] font-medium">
                        {getAbilityKey(index)}: {spell.name}
                      </h3>
                      <span className="text-xs text-[#fefefe] bg-[#8e5c6a] px-2 py-1 rounded">
                        Cooldown: {spell.cooldownBurn}s
                      </span>
                      <span className="text-xs text-[#fefefe] bg-[#8e5c6a] px-2 py-1 rounded">
                        Cost: {spell.costBurn} {data.partype}
                      </span>
                    </div>
                    <p className="text-[#4A4E4D] mt-1">{spell.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );

  // Helper function to convert spell index to keyboard key
  function getAbilityKey(index: number) {
    switch (index) {
      case 0:
        return "Q";
      case 1:
        return "W";
      case 2:
        return "E";
      case 3:
        return "R";
      default:
        return "";
    }
  }
};

export default ChampionDetailClient;
