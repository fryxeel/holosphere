import React, { useState, useRef, useEffect } from 'react'
import Title from '../Text/Title'
import Body from '../Text/Body'
import Icon from '../Icon'

const MusicAmbience = () => {
    const musicAmbiences = [
        {
            src: '/songs/eternity.mp3',
            title: 'Eternity',
            author: 'Lemonmusicstudio',
            image: '/songs/cover/eternity.webp',
        },
        {
            src: '/songs/happyBirthday.mp3',
            title: 'Joyeux Anniversaire',
            author: 'White_Records',
            image: '/songs/cover/happyBirthday.webp',
        },
        {
            src: '/songs/cowboy.mp3',
            title: 'Cowboy',
            author: 'Fresh_Morning',
            image: '/songs/cover/cowboy.jpg',
        },
    ]

    const [selectedMusic, setSelectedMusic] = useState(null)
    const [isPlaying, setIsPlaying] = useState(false)
    const audioRef = useRef(null)

    useEffect(() => {
        audioRef.current = new Audio()
        return () => {
            if (audioRef.current) {
                audioRef.current.pause()
                audioRef.current = null
            }
        }
    }, [])

    const handleSelect = async (music) => {
        try {
            {
                audioRef.current.src = music.src
                await audioRef.current.play()
                setSelectedMusic(music)
                setIsPlaying(true)
            }
        } catch (error) {
            console.error('Error playing audio:', error)
            setIsPlaying(false)
        }
    }

    const handlePauseAll = () => {
        if (audioRef.current) {
            audioRef.current.pause()
            setIsPlaying(false)
        }
        setSelectedMusic(null)
    }

    return (
        <div className="space-y-3">
            <Title hierarchy={3}>Musique d'ambiance</Title>

            <div className="flex gap-2">
                <button
                    onClick={handlePauseAll}
                    className="relative w-16 h-16 rounded-xl p-0.5 border-2 border-[#0c0f1e7e] cursor-pointer"
                >
                    <div className="absolute bottom-4 left-4 p-0.5">
                        <Icon name={'mute'} height={24} color={'black'}></Icon>
                    </div>
                </button>

                {musicAmbiences.map((music) => (
                    <button
                        key={music.src}
                        className={`relative w-16 h-16 rounded-[10px] p-0.5 border-2 overflow-hidden cursor-pointer ${
                            selectedMusic?.src === music.src
                                ? 'border-black'
                                : 'border-transparent'
                        }`}
                        onClick={() => handleSelect(music)}
                    >
                        <img
                            src={music.image}
                            alt={music.title}
                            className="w-full h-full rounded-lg"
                        />
                        {selectedMusic?.src === music.src && (
                            <div className="absolute bottom-0 left-0 z-10">
                                <div className="bg-black rounded-lg border-2 border-white">
                                    <Icon
                                        color={'white'}
                                        name={'check'}
                                        height={24}
                                    />
                                </div>
                                {isPlaying && (
                                    <div className="absolute top-0 right-0"></div>
                                )}
                            </div>
                        )}
                    </button>
                ))}
            </div>

            {selectedMusic && (
                <Body hierarchy={3}>
                    <span>{selectedMusic.title}</span> - {selectedMusic.author}
                </Body>
            )}
        </div>
    )
}

export default MusicAmbience
