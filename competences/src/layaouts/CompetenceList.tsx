import React, { useState } from 'react'
import Competence from '../components/Competence'
import EditeCompetence from '../components/EditeCompetence'


import { CompetenceType } from '../service/competence.type'

export type CompetenceListProps = {
    comps: CompetenceType[],
    supprimeComp: Function,
    modifComp: Function
}

const CompetenceList = (props: CompetenceListProps) => {
    const [selecId, setSelectId] = useState<Number>()

    /**
     * Fonction qui utilise les props pour modifier une competence
     * @param competence CompetenceType, competence à modifier
     */
    const modifierComp = (competence: CompetenceType) => {
        props.modifComp(competence)
        setSelectId(0)
    }

    return (
        <>
            {props.comps && props.comps.map((comp: CompetenceType,
                index: number) => {
                if (comp.id === selecId) {
                    return <EditeCompetence comp={comp} key={index}
                        modifComp={modifierComp} />
                } else {
                    return <Competence key={index} comp={comp} supprimerComp={props.supprimeComp} handleClickEdit={setSelectId} />
                }
            })}
        </>
    )
}

export default CompetenceList