        // Prevent right-click on all images and videos
        document.addEventListener('contextmenu', function(e) {
            if (e.target.tagName === 'IMG' || e.target.tagName === 'VIDEO') {
                e.preventDefault();
                return false;
            }
        });

        function openLightbox(element) {
            const lightbox = document.getElementById('lightbox');
            const mediaContainer = document.getElementById('lightbox-media');
            const media = element.querySelector('img, video');
            
            mediaContainer.innerHTML = '';
            
            if (media.tagName === 'VIDEO') {
                const video = document.createElement('video');
                video.src = media.querySelector('source').src;
                video.autoplay = true;
                video.loop = true;
                video.muted = true;
                video.playsInline = true;
                video.controls = false;
                video.setAttribute('controlslist', 'nodownload');
                video.setAttribute('disablepictureinpicture', '');
                video.oncontextmenu = () => false;
                mediaContainer.appendChild(video);
            } else {
                const img = document.createElement('img');
                img.src = media.src;
                img.alt = media.alt;
                img.oncontextmenu = () => false;
                img.ondragstart = () => false;
                mediaContainer.appendChild(img);
            }
            
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeLightbox(event) {
            if (event.target.id === 'lightbox' || event.target.classList.contains('close-btn') || event.target.textContent === '×') {
                const lightbox = document.getElementById('lightbox');
                lightbox.classList.remove('active');
                document.body.style.overflow = 'auto';
                
                // Stop video playback
                const video = document.querySelector('#lightbox-media video');
                if (video) {
                    video.pause();
                    video.currentTime = 0;
                }
            }
        }

        // Close lightbox with Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                const lightbox = document.getElementById('lightbox');
                if (lightbox.classList.contains('active')) {
                    lightbox.classList.remove('active');
                    document.body.style.overflow = 'auto';
                }
            }
        });