---
layout: default
title: Shake Rattle Strain
prev_label: Audio
prev_url: /audio/
noindex: true
---
# Audio Library
## Albums
### Shake, Rattle, and Strain 

<audio id="player" controls controlsList="nodownload" preload="none" style="width:100%;"></audio>


<ul id="playlist">
    <li data-src="01 Perfidia.mp3">Perfidia</li>
    <li data-src="02 SurfNouveau.mp3">Surf Nouveau</li>    
    <li data-src="03 GhostRiders.mp3">Ghost Riders</li>
    <li data-src="04 Malaguena.mp3">Malaguena</li>
    <li data-src="05 Surfbilly.mp3">Surfbilly</li>    
    <li data-src="06 Sleepwalk.mp3">Sleepwalk</li>  
    <li data-src="07 ShesNotThere.mp3">Shes Not There</li>   
    <li data-src="08 TheQuietSurf.mp3">The Quiet Surf</li>    
    <li data-src="09 Stoked.mp3">Stoked</li>
    <li data-src="10 TheGoodTheBadAndTheUgly.mp3">The Good, The Bad, and The Ugly</li>    
    <li data-src="11 ReefBreak.mp3">Reef Break</li>    
    <li data-src="12 Apache.mp3">Apache</li>   
    <li data-src="13 Theme For The Champions.mp3">Theme for the Champions</li>    
    <li data-src="14 HavingAnAverageWeekend.mp3">Having an Average Weekend</li>    
    <li data-src="15 Tequila.mp3">Tequila</li> 
</ul>

<script>
  const player = document.getElementById('player');
  const tracks = document.querySelectorAll('#playlist li');
  let currentTrack = 0;

  function loadTrack(index) {
    tracks.forEach(t => t.classList.remove('playing'));
    tracks[index].classList.add('playing');
    player.src = tracks[index].dataset.src;
    player.play();
  }

  tracks.forEach((track, index) => {
    track.addEventListener('click', () => {
      currentTrack = index;
      loadTrack(index);
    });
  });

  player.addEventListener('ended', () => {
    currentTrack = (currentTrack + 1) % tracks.length;
    loadTrack(currentTrack);
  });

  // Start playing track 0 on page load
  loadTrack(0);
</script>