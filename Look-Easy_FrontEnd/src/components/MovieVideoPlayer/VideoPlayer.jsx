import React, { useEffect, useState } from 'react';

const VideoPlayer = ({ movieId }) => {
    const [videoKey, setVideoKey] = useState(null);

    useEffect(() => {
        const fetchVideo = async () => {
            try {
                const videoResponse = await fetch(
                    `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=0e239e659ae4c0579b4593c035642123&language=es-MX`
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
    }, [movieId]);

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
