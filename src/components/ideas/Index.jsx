import React, { useState } from "react";
import UqbarCard from "../utils/UqbarCard.js"
import UqbarCardGrid from "../utils/UqbarCardGrid.js"
import { chunk } from "../utils/list.js"
import ideasES from './ideas_es.js'
import ideasEN from './ideas_en.js'
import IdeaModal from "./Idea.jsx"
import styles from "./Index.module.css"

export default function Ideas() {
  const [lang, setLang] = useState('ES')
  const [openModal, setOpenModal] = useState(false)
  const [selectedIdea, setSelectedIdea] = useState({})

  function i18n() {
    switch (lang) {
      case 'ES':
        return { ideas: ideasES, Description: desciptionES, translations: translationsES }
      case 'EN':
        return { ideas: ideasEN, Description: desciptionEN, translations: translationsEN }
      default:
        return { ideas: ideasES, Description: desciptionES, translations: translationsES }
    }
  }

  function openIdea(idea) {
    setSelectedIdea(idea)
    setOpenModal(true)
  }

  const { ideas, Description, translations } = i18n()

  return (
    <div className="container" id="Ideas">
      <div className={styles['lang-buttons']}>
        <button onClick={() => setLang('ES')}><span role="img" aria-label="español">🇦🇷</span> ES</button>
        <button onClick={() => setLang('EN')}><span role="img" aria-label="english">🇬🇧</span> EN</button>
      </div>

      <Description />

      {
        chunk(ideas, 5).map((chunk, i) =>
          <UqbarCardGrid key={i}>
            {
              chunk.map((idea, i) =>
                <UqbarCard
                  key={i}
                  projectLogo={idea.img}
                  projectName={idea.name}
                  projectDescription={idea.goal}
                  onClick={() => openIdea(idea)}
                />
              )
            }
          </UqbarCardGrid>
        )
      }
      <IdeaModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        idea={selectedIdea}
        translations={translations}
      />
    </div>
  );
}

function desciptionES() {
  return (<>
    <h2>Ideas de Proyectos</h2>

    <p>
      Aquí se presentan algunas ideas relacionadas con los proyectos que queremos impulsar dentro de la fundación. Todos nuestros proyectos son <code>open source</code>.
    </p>
    <p>
      Si te interesa <strong>colaborar</strong> con alguno de ellos no dudes en ponerte en contacto con los mentores vía mail o a través de nuestro <a href="https://discord.gg/5wVEwse">canal de Discord</a>.
    </p>
    <p>
      ¡También estamos abiertos a escuchar otras propuestas que no se encuentren aquí listadas! Si tenés alguna seguro queremos escucharla.
    </p>
  </>)
}

function desciptionEN() {
  return (<>
    <h2>Project Ideas</h2>

    <p>
      Here we expose some ideas related to the projects we want to promote. All our projects are <code>open source</code>.
    </p>
    <p>
      If you are interested in <strong>collaborating</strong> in any of them, do not hesitate to contact the mentors via mail or join to our <a href="https://discord.gg/5wVEwse">Discord server</a>.
    </p>
    <p>
      We are also open to listen others ideas not listed here! If you have something in mind we want to listen it.
    </p>
  </>)
}

const translationsES = {
  'context': 'Contexto',
  'goal': 'Objetivo',
  'mentors': 'Mentores',
  'look': 'Echale un vistazo al proyecto en',
}
const translationsEN = {
  'context': 'Context',
  'goal': 'Goal',
  'mentors': 'Mentors',
  'look': 'Look this project in',
}