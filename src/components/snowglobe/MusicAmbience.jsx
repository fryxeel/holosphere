import React, { useState, useRef } from 'react'

const MusicAmbience = () => {
    const musicAmbiences = [
        {
            src: '/songs/End_of_Line.mp3',
            title: 'End of Line',
            author: 'Daft Punk',
            image: 'https://upload.wikimedia.org/wikipedia/en/3/39/Tron_Legacy_Soundtrack.jpg', // Image de la musique
        },
        {
            src: '/songs/TRON_Legacy_(End Titles).mp3',
            title: 'TRON Legacy',
            author: 'Daft Punk',
            image: 'https://upload.wikimedia.org/wikipedia/en/3/39/Tron_Legacy_Soundtrack.jpg',
        },
        {
            src: '/songs/The_Game_Has_Changed.mp3',
            title: 'The Game Has Changed',
            author: 'Daft Punk',
            image: 'https://upload.wikimedia.org/wikipedia/en/3/39/Tron_Legacy_Soundtrack.jpg',
        },
    ]

    const [selectedMusic, setSelectedMusic] = useState(musicAmbiences[0])
    const [isMuted, setIsMuted] = useState(false) // Etat pour gérer la sourdine
    const audioRef = useRef(new Audio(selectedMusic.src)) // 🔥 Crée l'instance audio

    const handleSelect = (music) => {
        setSelectedMusic(music)

        // Mettre à jour la source et lire la musique
        if (audioRef.current) {
            audioRef.current.pause()
            audioRef.current.src = music.src
            audioRef.current.load()
            audioRef.current.play()
        }
    }

    const handleMute = () => {
        setIsMuted((prev) => {
            const newMutedState = !prev
            audioRef.current.muted = newMutedState // Appliquer la sourdine
            return newMutedState
        })
    }

    return (
        <div className="space-y-3">
            <h3 className="font-semibold font-manrope text-span3">
                Musique d'ambiance
            </h3>

            <div className="flex gap-3 ">
                <button
                    onClick={handleMute}
                    className={`relative w-16 h-16 rounded-xl p-0.5 border-2 border-gray-500`}
                >
                    <img
                        src={
                            isMuted ? 'images/NoMuted.svg' : '/images/muted.svg'
                        }
                        alt=""
                        className="absolute bottom-4 left-4 p-0.5"
                    />
                </button>
                {musicAmbiences.map((music) => (
                    <button
                        key={music.src}
                        className={`relative w-16 h-16 rounded-xl overflow-hidden p-0.5 box-border border-2 ${
                            selectedMusic.src === music.src
                                ? 'border-black'
                                : 'border-transparent'
                        }`}
                        onClick={() => handleSelect(music)}
                    >
                        <img
                            src={music.image}
                            alt={music.title}
                            className="w-14 h-14 object-cover rounded-lg"
                        />
                        {selectedMusic.src === music.src && (
                            <div className="absolute bottom-0 left-0 rounded-full p-0.5">
                                <img
                                    src="/images/Checked.svg"
                                    alt="icone check"
                                    className="h-5 w-5"
                                />
                            </div>
                        )}
                    </button>
                ))}
            </div>
            <p>
                <span>{selectedMusic.title} </span>- {selectedMusic.author}.
            </p>
        </div>
    )
}

export default MusicAmbience
