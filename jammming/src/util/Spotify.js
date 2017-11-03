var accessToken='';
var clientId = '24f19ddac3c840b79516c8bf1396f8f5';
var redirectUri = 'http://localhost:3000/';

const Spotify= {
    getAccessToken: function(){
        if (accessToken !== ""){
            return accessToken;
            
        }

       

        if (window.location.href.includes('access_token')){
            const accessTokenMatch = window.location.href.match(/\#(?:access_token)\=([\S\s]*?)\&/)[1];
            const expirationMatch = window.location.href.match(/expires_in=([^&]*)/)[1];
            alert(expirationMatch);
            alert(accessTokenMatch);
        if (accessTokenMatch && expirationMatch) 
        {

            accessToken= accessTokenMatch;
            var expiresIn= expirationMatch;

            window.setTimeout(() => accessToken = '', expiresIn * 1000);
             window.history.pushState('Access Token', null, '/');
        }

       
    }
    else{
        window.location.href= `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
    
     }
        return new Promise((resolve) => {return resolve(accessToken);});
    },
    search: function (term) {
         Spotify.getAccessToken().then( accessToken => {
        fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {headers: {Authorization:`Bearer ${accessToken}`}});
        }).then(response => {return response.json();}).then(jsonResponse => {
            if(jsonResponse.tracks) {
                return jsonResponse.tracks.map(track => {
                    return {
                        ID: track.id,
                        Name: track.name,
                        Artist: track.artist[0].name,
                        Album: track.ablum.name,
                        URI: track.uri
                    }
                })
            }
        })
    },
    savePlaylist: function (name, trackUris) {
        if (!name && !trackUris) {
            return;
        }
            Spotify.getAccessToken()
          let headers ={headers: {Authorization:`Bearer ${accessToken}`}};
          var userId;
          var playlistID;
          fetch (`https://api.spotify.com/v1/me`, {headers: headers}).then(response => {return response.json();}).then(jsonResponse => {return userId = jsonResponse.id });

            fetch (`https://api.spotify.com/v1/users/${userId}/playlists/`, {headers: headers, method: 'POST', body: { 
            "description": "Created by Jammming",
            "public": false,
            "name": `"${name}"` }}).then(response => {return response.json();}).then(jsonResponse => {return playlistID = jsonResponse.id});

           fetch (`https://api.spotify.com/v1/users/${userId}/playlists/${playlistID}/tracks`, {headers: headers, method: 'POST', body: {uris: trackUris}});
        }

    }


export default Spotify;