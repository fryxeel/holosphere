/**
 * Composant texte `Body`
 *
 * Ce composant rend un paragraphe avec une hiérarchie de style configurable. Il permet de choisir parmi trois niveaux de hiérarchie pour afficher du texte avec un style CSS différent. Si tu utilises un élément `<span>`, la taille du texte sera automatiquement ajustée en fonction de la hiérarchie choisie, ce qui permet de mettre en avant le contenu de manière cohérente.
 *
 * Props :
 * - `children` (node) : Le contenu texte ou élément à afficher dans le paragraphe. Peut inclure des balises HTML comme `<span>`.
 * - `hierarchy` (integer) : Le niveau de hiérarchie à appliquer au texte. Valeurs possibles : 1, 2, 3 (par défaut 3).
 * - `cssClass` (string) : Classe CSS personnalisée à ajouter au paragraphe.
 *
 * Exemple d'utilisation :
 * ```jsx
 * <Body hierarchy="1" cssClass="my-custom-class">
 *   Texte pour la hiérarchie 1 avec un <span>élément mis en avant</span>.
 * </Body>
 * ```
 */

import React from 'react'
import '../styles.css'

const Body = ({ children, hierarchy = 3, cssClass = '' }) => {
    switch (hierarchy) {
        case 1:
            return <p className={'body1  ' + cssClass}>{children}</p>
        case 2:
            return <p className={'body2  ' + cssClass}>{children}</p>
        case 3:
            return <p className={'body3 ' + cssClass}>{children}</p>
        case 4:
            return <p className={'body4 ' + cssClass}>{children}</p>
        default:
            return (
                <p className={'body3 ' + cssClass}>
                    Error: Select a higher hierarchy!
                </p>
            )
    }
}

export default Body
