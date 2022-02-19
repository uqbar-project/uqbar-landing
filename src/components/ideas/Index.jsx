import React, { useState } from "react";
import UqbarCard from "../utils/UqbarCard.js"
import UqbarCardGrid from "../utils/UqbarCardGrid.js"
import { chunk } from "../utils/list.js"
import ideas from './ideas.js'
import IdeaModal from "./Idea.jsx"

export default function Ideas() {
  const [openModal, setOpenModal] = useState(false)
  const [selectedIdea, setSelectedIdea] = useState({})

  function openIdea(idea) {
    setSelectedIdea(idea)
    setOpenModal(true)
  }

  return (
    <div className="container" id="Ideas">
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
      />
    </div>
  );
}
