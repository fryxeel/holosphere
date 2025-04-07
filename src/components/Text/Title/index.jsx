/**
 * Composant `Title`
 *
 * Ce composant rend un titre (h1, h2, ou h3) avec une hiérarchie de style configurable. Il permet de choisir parmi trois niveaux de hiérarchie pour afficher un titre avec un style CSS différent. Le comportement est différent en fonction de l'utilisation sur la page d'accueil ou non.
 *
 * Props :
 * - `children` (node) : Le contenu texte ou élément à afficher dans le titre.
 * - `hierarchy` (integer) : Le niveau de hiérarchie à appliquer au titre. Valeurs possibles : 1, 2, 3 (par défaut 3).
 * - `homePage` (boolean) : Indique si le composant est utilisé sur la page d'accueil. (par défaut `false`)
 * - `cssClass` (string) : Classe CSS personnalisée à ajouter au titre.
 *
 * Exemple d'utilisation :
 * ```jsx
 * <Title hierarchy="1" cssClass="my-custom-class">
 *   Titre de niveau 1 avec une classe CSS personnalisée.
 * </Title>
 * ```
 */

import React from 'react'
import '../styles.css'

const Title = ({
    children,
    hierarchy = 3,
    homePage = false,
    cssClass = '',
}) => {
    if (homePage) {
        switch (hierarchy) {
            case 1:
                return <h1 className={'homeH1 ' + cssClass}>{children}</h1>
            case 2:
                return <h2 className={'homeH2 ' + cssClass}>{children}</h2>
            case 3:
                return <h3 className={'homeH3 ' + cssClass}>{children}</h3>
        }
    } else {
        switch (hierarchy) {
            case 1:
                return <h1 className={'otherH1 ' + cssClass}>{children}</h1>
            case 2:
                return <h2 className={'otherH2 ' + cssClass}>{children}</h2>
            case 3:
                return <h3 className={'otherH3 ' + cssClass}>{children}</h3>
        }
    }
}

export default Title
