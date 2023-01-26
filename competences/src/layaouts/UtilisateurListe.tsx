import React, { useState } from 'react'
import EditeUtilisateur from '../components/EditeUtilisateur'
import Utilisateur from '../components/Utilisateur'
import { UtilisateurType } from '../service/utilisateur.type'

export type UtilisateurListeProps = {
    utilisateurs: UtilisateurType[],
    ModifUtilisateur: Function,
    supprimerUtilisateur: Function
}

const UtilisateurListe = (props: UtilisateurListeProps) => {
    const [selecId, setSelectId] = useState<Number>()

    const modisierUtilisateur =(utilisateur: UtilisateurType) => {
        props.ModifUtilisateur(utilisateur)
        setSelectId(0)
    }

    return (
        <>
{props.utilisateurs && props.utilisateurs.map((utilisateur: UtilisateurType,
index: number) => {
    if (utilisateur.id === selecId) {
        return <EditeUtilisateur utilisateur={utilisateur}
        key={index} modifUtilisateur={modisierUtilisateur} />
    } else {
        return <Utilisateur key={index} 
        utilisateur={utilisateur} 
        suprrimUtilisateur={props.supprimerUtilisateur}
        handleClickEdit={setSelectId} />
    }
})}
        </>
    )
}

export default UtilisateurListe