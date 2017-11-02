var accessToken;
var clientId = '24f19ddac3c840b79516c8bf1396f8f5';
var redirectUri = 'http://localhost:3000/';

const Spotify= {
    getAccessToken: function(){
        if (accessToken){
            return accessToken
        }else if (!accessToken){
            const accessTokenMatch = window.location.href.match('/access_token=([^&]*)/');
            const expirationMatch = window.location.href.match('/access_token=([^&]*)/');
       
        if (accessTokenMatch && expirationMatch) {
            accessToken= accessTokenMatch;
            var expiresIn= expirationMatch;

            window.setTimeout(() => accessToken = '', expiresIn * 1000);
            window.history.pushState('Access Token', null, '/');
        }

        }else {
            window.location.href= `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
        }
        return new Promise((resolve) => {return resolve(accessToken);});
    },
    search: function (term) {
        return Spotify.getAccessToken().then( () => {
          return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {headers: {Authorization:`Bearer ${accessToken}`}});
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
            } return [];
        })
    },
    savePlaylist: function (name, trackUris) {
        if (!name && !trackUris) {
            return;
        }else{
            let accessToken= accessToken;
          let headers ={headers: {Authorization:`Bearer ${accessToken}`}};
          var userId;
          var playlistID;
          return fetch (`https://api.spotify.com/v1/me`, {headers: headers}).then(response => {return response.json();}).then(jsonResponse => {return userId = jsonResponse.id });

           return fetch (`https://api.spotify.com/v1/users/${userId}/playlists/`, {headers: headers, method: 'POST', body: { 
            "description": "Created by Jammming",
            "public": false,
            "name": `"${name}"` }}).then(response => {return response.json();}).then(jsonResponse => {return playlistID = jsonResponse.id});

          return fetch (`https://api.spotify.com/v1/users/${userId}/playlists/${playlistID}/tracks`, {headers: headers, method: 'POST', body: {uris: trackUris}});
        }

    }
}

export default Spotify;