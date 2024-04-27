"use client";

import TopicCard from "@/components/Cards/TopicCard/TopicCard";
import type { TopicProps } from "@/types";
import React, { useEffect, useState } from "react";

export default function Topics() {

  const [topics, setTopics] = useState<TopicProps[]>([])

  const getAllTopics = async () => {
    try {
      const requisition = await fetch('http://localhost:3030/data', {
        method: "GET"
      })
      const response = await requisition.json()
      if (response) {
        setTopics(response)
      } else return
    } catch (error) {
      throw new Error("Não foi possível pegar o tópicos em alta")
    }
  }

  useEffect(() => {
      getAllTopics()
  }, [])

  return (
    <section className="w-full py-12 lg:py-20 flex flex-col items-center">
      <div className="w-full max-w-6xl flex flex-col items-center">
        <article className="w-full flex flex-col items-center max-w-xl">
          <h2 className="font-semibold text-xl lg:text-3xl">
            Veja o que está{" "}
            <span className="text-principal font-semibold text-xl lg:text-3xl">
              em alta
            </span>
            {" "}por aí
          </h2>
          <p className="mt-2 text-sm text-center">
            Não perca tempo, e{" "}
            <span className="font-semibold text-sm">saia na frente</span> dos
            seus concorrentes com as mais novas tendências do mercado
          </p>
        </article>
        <div className="mt-12 flex justify-center flex-wrap gap-12">
          {topics.map((topic: TopicProps, index: number) => (
            <TopicCard topic={topic} key={`${topic.title}-${index}`} />
          ))}
        </div>
      </div>
    </section>
  );
};
