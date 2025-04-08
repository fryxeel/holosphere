import React, { useState, useRef, useEffect } from 'react'

const MusicAmbience = () => {
    const musicAmbiences = [
        {
            src: '/songs/End_of_Line.mp3',
            title: 'End of Line',
            author: 'Daft Punk',
            image: 'https://upload.wikimedia.org/wikipedia/en/3/39/Tron_Legacy_Soundtrack.jpg',
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
    const [isMuted, setIsMuted] = useState(false)
    const [isPlaying, setIsPlaying] = useState(false) // Nouvel état pour suivre la lecture
    const audioRef = useRef(null)

    useEffect(() => {
        // Initialize audio
        audioRef.current = new Audio()
        audioRef.current.muted = isMuted

        return () => {
            if (audioRef.current) {
                audioRef.current.pause()
                audioRef.current = null
            }
        }
    }, [])

    const handleSelect = async (music) => {
        setSelectedMusic(music)

        if (audioRef.current) {
            try {
                // Si une musique est déjà en cours, on l'arrête
                if (isPlaying) {
                    audioRef.current.pause()
                    setIsPlaying(false)
                }

                // Change la source et lance la lecture
                audioRef.current.src = music.src
                await audioRef.current.play()
                setIsPlaying(true)
            } catch (error) {
                console.error('Error playing audio:', error)
                setIsPlaying(false)
            }
        }
    }

    const handleMute = () => {
        setIsMuted((prev) => {
            const newMutedState = !prev
            if (audioRef.current) {
                audioRef.current.muted = newMutedState
            }
            return newMutedState
        })
    }

    return (
        <div className="space-y-3">
            <h3 className="font-semibold font-manrope text-span3">
                Musique d'ambiance
            </h3>

            <div className="flex gap-2">
                <button
                    onClick={handleMute}
                    className={`relative w-16 h-16 rounded-xl p-0.5 border-2 border-[#0c0f1e7e]`}
                >
                    <img
                        src={
                            isMuted ? 'images/muted.svg' : '/images/NoMuted.svg'
                        }
                        alt={
                            isMuted ? 'Désactiver sourdine' : 'Activer sourdine'
                        }
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
                                {/* {isPlaying &&
                                    selectedMusic.src === music.src && (
                                        <div className="absolute top-0 right-0 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                    )} */}
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
