# Video Files

This folder contains video files for the SPIIN music platform.

## File Structure
- Format: MP4 (H.264 codec for web compatibility)
- Quality: 1080p recommended, 720p minimum
- Naming convention: `[artist]-[song-title].mp4`

## Current Files
Add your video files here with the following names to match the app:

### Davido
- `davido-unavailable.mp4`
- `davido-kante.mp4`

### Burna Boy
- `burna-city-boys.mp4`

## For Production
When deploying to Vercel:
1. Compress videos to reduce file size while maintaining quality
2. Consider using adaptive streaming for better performance
3. Use a dedicated video hosting service (Vimeo, YouTube, etc.) for large files
4. Add proper video thumbnails/posters
5. Test video playback on mobile devices

## Optimization Tips
- Use tools like FFmpeg to compress videos
- Consider multiple quality options (360p, 720p, 1080p)
- Add captions/subtitles for accessibility
- Ensure proper aspect ratios (16:9 recommended)

## Notes
- For demo purposes, you can use short sample videos
- Ensure all video content has proper licensing for production use
- Consider bandwidth limitations for mobile users