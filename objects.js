var playlist = new Object({
  artistName:"songTitle"
  
})

function updatePlaylist(playlist, artistName, songTitle){
  playlist[songTitle]=artistName;
  return playlist
}

function removeFromPlaylist(playlist,artistName){
  delete playlist.artistName;
 
}