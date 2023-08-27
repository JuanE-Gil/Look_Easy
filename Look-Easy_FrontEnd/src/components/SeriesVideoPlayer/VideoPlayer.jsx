import React, { useEffect, useState } from 'react';

const VideoPlayer = ({ SerieId }) => {
    const [videoKey, setVideoKey] = useState(null);

    useEffect(() => {
        const fetchVideo = async () => {
            try {
                const videoResponse = await fetch(
                    `https://api.themoviedb.org/3/tv/${SerieId}/videos?api_key=&language=es-MX`
                );

                if (videoResponse.status === 200) {
                    const videoData = await videoResponse.json();

                    // Obtener el primer video de la lista (puedes ajustar la lógica según tus necesidades)
                    const video = videoData.results[0];

                    if (video) {
                        setVideoKey(video.key);
                    }
                }
            } catch (error) {
                console.error('Error al cargar el video:', error);
            }
        };

        fetchVideo();
    }, [SerieId]);

    return (
        <div id='videoPlayer'>
            {videoKey && (
                <iframe
                    src={`https://www.youtube.com/embed/${videoKey}`}
                    width='1224px'
                    height='550px'
                    allowFullScreen
                    title='Video Player'></iframe>
            )}
        </div>
    );
};

export default VideoPlayer;
