import React from "react"
import { Modal } from "@material-ui/core"
import styles from "./Index.module.css"

export default function IdeaModal({ open, onClose, idea, translations }) {
  const { name, context, img, goal, url, mentors, } = idea
  const t = buildTranslate(translations)

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby={name}
      aria-describedby={context + goal}
    >
      <div className={styles["modal"]}>
        <h2>
          {name}
          <img
            src={img}
            alt={name}
          />
        </h2>

        <h3>{t('context')}</h3>
        <p>{context}</p>
        <h3>{t('goal')}</h3>
        <p>{goal}</p>
        <h3>{t('mentors')}</h3>
        {mentors?.map((mentor, i) => <p key={i}>{mentor}</p>)}
        <br /><br />
        <span>
        <span role="img" aria-label="arrow">➡️</span>&nbsp;
          {t('look')} &nbsp;
          <a href={url} target="_blank" rel="noopener noreferrer">{url}</a>
          &nbsp;<span role="img" aria-label="arrow">⬅️</span>
        </span>
      </div>
    </Modal>
  )
}

function buildTranslate(translations) {
  return (key) => translations[key]
}