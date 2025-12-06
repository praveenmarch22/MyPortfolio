import React, { useState, useRef, useEffect } from 'react';

export default function Music() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
    const [progress, setProgress] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(0.7);
    const [shuffle, setShuffle] = useState(false);
    const [repeat, setRepeat] = useState(false);
    const [dragOverIndex, setDragOverIndex] = useState(null);

    const [tracks, setTracks] = useState([
        {
            id: 1,
            title: "Acoustic Breeze",
            artist: "Bensound",
            cover: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=400&q=80",
            url: "https://www.bensound.com/bensound-music/bensound-acousticbreeze.mp3"
        },
        {
            id: 2,
            title: "Sunny",
            artist: "Bensound",
            cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=400&q=80",
            url: "https://www.bensound.com/bensound-music/bensound-sunny.mp3"
        },
        {
            id: 3,
            title: "Creative Minds",
            artist: "Bensound",
            cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=80",
            url: "https://www.bensound.com/bensound-music/bensound-creativeminds.mp3"
        },
        {
            id: 4,
            title: "Jazzy Frenchy",
            artist: "Bensound",
            cover: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?auto=format&fit=crop&w=400&q=80",
            url: "https://www.bensound.com/bensound-music/bensound-jazzyfrenchy.mp3"
        },
        {
            id: 5,
            title: "Happy Rock",
            artist: "Bensound",
            cover: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=400&q=80",
            url: "https://www.bensound.com/bensound-music/bensound-happyrock.mp3"
        },
        {
            id: 6,
            title: "Ukulele",
            artist: "Bensound",
            cover: "https://images.unsplash.com/photo-1504898770365-14faca6a7320?auto=format&fit=crop&w=400&q=80",
            url: "https://www.bensound.com/bensound-music/bensound-ukulele.mp3"
        },
        {
            id: 7,
            title: "Energy",
            artist: "Bensound",
            cover: "https://images.unsplash.com/photo-1446057032654-9d8885db76c6?auto=format&fit=crop&w=400&q=80",
            url: "https://www.bensound.com/bensound-music/bensound-energy.mp3"
        },
        {
            id: 8,
            title: "Downtown",
            artist: "Bensound",
            cover: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=400&q=80",
            url: "https://www.bensound.com/bensound-music/bensound-downtown.mp3"
        }
    ]);

    const audioRef = useRef(null);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = volume;
        }
    }, [volume]);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        audio.pause();
        audio.load();

        if (isPlaying) {
            const playPromise = audio.play();
            if (playPromise !== undefined) {
                playPromise.catch(e => console.log("Audio play failed:", e));
            }
        }
    }, [currentTrackIndex]);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        if (isPlaying) {
            audio.play().catch(e => console.log("Audio play failed:", e));
        } else {
            audio.pause();
        }
    }, [isPlaying]);

    const handleTimeUpdate = () => {
        if (audioRef.current) {
            const current = audioRef.current.currentTime;
            const dur = audioRef.current.duration;
            setCurrentTime(current);
            setDuration(dur);
            setProgress((current / dur) * 100);
        }
    };

    const handleLoadedMetadata = () => {
        if (audioRef.current) {
            setDuration(audioRef.current.duration);
        }
    };

    const handleTrackChange = (index) => {
        setCurrentTrackIndex(index);
        setIsPlaying(true);
        setProgress(0);
    };

    const togglePlay = () => {
        setIsPlaying(!isPlaying);
    };

    const nextTrack = () => {
        if (shuffle) {
            const randomIndex = Math.floor(Math.random() * tracks.length);
            setCurrentTrackIndex(randomIndex);
        } else {
            setCurrentTrackIndex((prev) => (prev + 1) % tracks.length);
        }
        setIsPlaying(true);
    };

    const prevTrack = () => {
        if (audioRef.current && audioRef.current.currentTime > 3) {
            audioRef.current.currentTime = 0;
        } else {
            setCurrentTrackIndex((prev) => (prev - 1 + tracks.length) % tracks.length);
        }
        setIsPlaying(true);
    };

    const handleEnded = () => {
        if (repeat) {
            audioRef.current.currentTime = 0;
            audioRef.current.play();
        } else {
            nextTrack();
        }
    };

    const formatTime = (time) => {
        if (isNaN(time)) return "0:00";
        const mins = Math.floor(time / 60);
        const secs = Math.floor(time % 60);
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    const handleSeek = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const percent = (e.clientX - rect.left) / rect.width;
        if (audioRef.current && audioRef.current.duration) {
            audioRef.current.currentTime = percent * audioRef.current.duration;
        }
    };

    // Drag and Drop handlers
    const handleDragStart = (e, index) => {
        e.dataTransfer.setData('text/plain', index);
        e.currentTarget.style.opacity = '0.5';
    };

    const handleDragEnd = (e) => {
        e.currentTarget.style.opacity = '1';
        setDragOverIndex(null);
    };

    const handleDragOver = (e, index) => {
        e.preventDefault();
        setDragOverIndex(index);
    };

    const handleDrop = (e, dropIndex) => {
        e.preventDefault();
        const dragIndex = parseInt(e.dataTransfer.getData('text/plain'));

        if (dragIndex === dropIndex) return;

        const newTracks = [...tracks];
        const [draggedTrack] = newTracks.splice(dragIndex, 1);
        newTracks.splice(dropIndex, 0, draggedTrack);

        setTracks(newTracks);

        // Adjust current track index if needed
        if (currentTrackIndex === dragIndex) {
            setCurrentTrackIndex(dropIndex);
        } else if (dragIndex < currentTrackIndex && dropIndex >= currentTrackIndex) {
            setCurrentTrackIndex(currentTrackIndex - 1);
        } else if (dragIndex > currentTrackIndex && dropIndex <= currentTrackIndex) {
            setCurrentTrackIndex(currentTrackIndex + 1);
        }

        setDragOverIndex(null);
    };

    const currentTrack = tracks[currentTrackIndex];

    return (
        <div className="h-full w-full bg-gradient-to-b from-[#1a1a2e] via-[#16213e] to-[#0f0f1a] text-white flex flex-col overflow-hidden">
            <audio
                ref={audioRef}
                src={currentTrack.url}
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
                onEnded={handleEnded}
                preload="auto"
            />

            {/* Main Content */}
            <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
                {/* Now Playing - Left Panel */}
                <div className="md:w-1/2 flex flex-col items-center justify-center p-4 md:p-6 md:border-r border-white/5">
                    {/* Album Art */}
                    <div className={`w-48 h-48 rounded-lg overflow-hidden shadow-2xl mb-6 relative ${isPlaying ? 'animate-pulse' : ''}`}
                        style={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8)' }}>
                        <img
                            src={currentTrack.cover}
                            alt={currentTrack.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    </div>

                    {/* Track Info */}
                    <h2 className="text-xl font-bold mb-1 text-center">{currentTrack.title}</h2>
                    <p className="text-gray-400 text-sm mb-6">{currentTrack.artist}</p>

                    {/* Progress Bar */}
                    <div className="w-full max-w-xs mb-2">
                        <div
                            className="h-1 bg-gray-700 rounded-full overflow-hidden cursor-pointer group"
                            onClick={handleSeek}
                        >
                            <div
                                className="h-full bg-[#1DB954] group-hover:bg-[#1ed760] transition-all duration-100 relative"
                                style={{ width: `${progress}%` }}
                            >
                                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                        </div>
                        <div className="flex justify-between text-xs text-gray-400 mt-1">
                            <span>{formatTime(currentTime)}</span>
                            <span>{formatTime(duration)}</span>
                        </div>
                    </div>

                    {/* Controls */}
                    <div className="flex items-center gap-6 mt-4">
                        {/* Shuffle */}
                        <button
                            onClick={() => setShuffle(!shuffle)}
                            className={`transition-colors ${shuffle ? 'text-[#1DB954]' : 'text-gray-400 hover:text-white'}`}
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M10.59 9.17L5.41 4 4 5.41l5.17 5.17 1.42-1.41zM14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4h-5.5zm.33 9.41l-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04-3.13-3.13z" />
                            </svg>
                        </button>

                        {/* Previous */}
                        <button
                            onClick={prevTrack}
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" />
                            </svg>
                        </button>

                        {/* Play/Pause */}
                        <button
                            onClick={togglePlay}
                            className="w-14 h-14 bg-white rounded-full flex items-center justify-center hover:scale-105 transition-transform shadow-lg"
                        >
                            {isPlaying ? (
                                <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                                </svg>
                            ) : (
                                <svg className="w-6 h-6 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            )}
                        </button>

                        {/* Next */}
                        <button
                            onClick={nextTrack}
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
                            </svg>
                        </button>

                        {/* Repeat */}
                        <button
                            onClick={() => setRepeat(!repeat)}
                            className={`transition-colors ${repeat ? 'text-[#1DB954]' : 'text-gray-400 hover:text-white'}`}
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z" />
                            </svg>
                        </button>
                    </div>

                    {/* Volume */}
                    <div className="flex items-center gap-2 mt-6 w-full max-w-xs">
                        <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
                        </svg>
                        <input
                            type="range"
                            min="0"
                            max="1"
                            step="0.01"
                            value={volume}
                            onChange={(e) => setVolume(parseFloat(e.target.value))}
                            className="w-full h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-[#1DB954]"
                        />
                        <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                        </svg>
                    </div>
                </div>

                {/* Playlist - Right Panel */}
                <div className="md:w-1/2 flex flex-col overflow-hidden flex-1">
                    <div className="p-4 border-b border-white/5">
                        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider">Queue</h3>
                        <p className="text-xs text-gray-500 mt-1">Drag to reorder</p>
                    </div>
                    <div className="flex-1 overflow-y-auto p-2">
                        {tracks.map((track, index) => (
                            <div
                                key={track.id}
                                draggable
                                onDragStart={(e) => handleDragStart(e, index)}
                                onDragEnd={handleDragEnd}
                                onDragOver={(e) => handleDragOver(e, index)}
                                onDrop={(e) => handleDrop(e, index)}
                                onClick={() => handleTrackChange(index)}
                                className={`
                                    flex items-center gap-3 p-2 rounded-md cursor-pointer transition-all
                                    ${currentTrackIndex === index ? 'bg-white/10' : 'hover:bg-white/5'}
                                    ${dragOverIndex === index ? 'border-t-2 border-[#1DB954]' : ''}
                                `}
                            >
                                {/* Track Number / Playing Indicator */}
                                <div className="w-6 text-center">
                                    {currentTrackIndex === index && isPlaying ? (
                                        <div className="flex items-end justify-center gap-0.5 h-4">
                                            <div className="w-1 bg-[#1DB954] animate-bounce" style={{ height: '60%', animationDelay: '0ms' }} />
                                            <div className="w-1 bg-[#1DB954] animate-bounce" style={{ height: '100%', animationDelay: '150ms' }} />
                                            <div className="w-1 bg-[#1DB954] animate-bounce" style={{ height: '40%', animationDelay: '300ms' }} />
                                        </div>
                                    ) : (
                                        <span className="text-sm text-gray-400">{index + 1}</span>
                                    )}
                                </div>

                                {/* Cover */}
                                <div className="w-10 h-10 rounded overflow-hidden flex-shrink-0">
                                    <img src={track.cover} alt={track.title} className="w-full h-full object-cover" />
                                </div>

                                {/* Info */}
                                <div className="flex-1 min-w-0">
                                    <p className={`text-sm font-medium truncate ${currentTrackIndex === index ? 'text-[#1DB954]' : 'text-white'}`}>
                                        {track.title}
                                    </p>
                                    <p className="text-xs text-gray-400 truncate">{track.artist}</p>
                                </div>

                                {/* Drag Handle */}
                                <div className="text-gray-600 hover:text-gray-400 cursor-grab active:cursor-grabbing">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                                    </svg>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
