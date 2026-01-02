import { useState } from 'react'

function MusicPlayer() {
  const [isOpen, setIsOpen] = useState(false)

  const youtubeVideoId = 'GZXHBgjQjNM'

  return (
    <div className="fixed bottom-8 left-8 z-50">
      {isOpen && (
        <div className="mb-3 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg border-2 border-gray-300 overflow-hidden">
          <iframe
            width="300"
            height="170"
            src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&loop=1&playlist=${youtubeVideoId}&controls=1`}
            title="YouTube Music Player"
            style={{ border: 0 }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-white/90 backdrop-blur-sm px-4 py-3 rounded-lg shadow-lg border-2 border-gray-300 hover:bg-white transition-all flex items-center gap-2"
      >
        <span className="text-lg">🎵</span>
        <span className="text-sm text-gray-700 font-mono">
          {isOpen ? 'Hide' : 'Music'}
        </span>
      </button>
    </div>
  )
}

export default MusicPlayer
