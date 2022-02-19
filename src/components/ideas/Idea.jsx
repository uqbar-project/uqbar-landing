import React from "react"
import { Modal } from "@material-ui/core"
import styles from "./Index.module.css"

export default function IdeaModal({ open, onClose, idea }) {
    const { name, context, img, goal, url, mentors, } = idea
  
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
  
          <h3>Contexto</h3>
          <p>{context}</p>
          <h3>Objetivo</h3>
          <p>{goal}</p>
          <h3>Mentores</h3>
          {mentors?.map((mentor, i) => <p key={i}>{mentor}</p>)}
          <br/><br/>
          <span>
            Echale un vistazo al proyecto en &nbsp;
            <a href={url} target="_blank" rel="noopener noreferrer">{url}</a>
          </span>
        </div>
      </Modal>
    )
  }