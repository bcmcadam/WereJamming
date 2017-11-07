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
        return  this.getAccessToken().then( accessToken => {
        return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {headers: {Authorization:`Bearer ${accessToken}`}});
        }).then(response => {return response.json();}).then(response => { 
                return response.tracks.items.map(track => {
                    return {
                        ID: track.id,
                        Name: track.name,
                        Artist: track.artists[0].name,
                        Album: track.album.name,
                        URI: track.uri
                    }
                })
            
        })
    },
    savePlaylist: function (name, trackUris) {
        if (!name, !trackUris) {
            return
        }        
        var headers= {Authorization:`Bearer ${accessToken}`};
        var userId;
        var playlistID;
        return fetch('https://api.spotify.com/v1/me', {headers: headers})
        .then(response => 
            {return response.json();})
            .then(jsonResponse=> 
                {return userId = jsonResponse.id})
                .then(userId => 
                    {
            return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {headers:headers, method: 'POST', body: JSON.stringify({'name': name})})
            .then(response => 
                {return response.json()})
                .then(jsonResponse=> 
                    { return playlistID=jsonResponse.id});})
                    .then(playlistID=> 
                        {console.log(trackUris); fetch (`https://api.spotify.com/v1/users/${userId}/playlists/${playlistID}/tracks`, {headers: headers, method: 'POST', body: JSON.stringify({'uris': trackUris})});
                });
    }





        // if (!name && !trackUris) {
        //     return;
        // }
        // var headers;
        // return  this.getAccessToken().then( accessToken => {headers ={headers: {Authorization:`Bearer ${accessToken}`}};})
        
          
        //   var userId;
        //   var playlistID;
        //   fetch (`https://api.spotify.com/v1/me`, {headers: headers}).then(response => {return response.json();}).then(jsonResponse => {return userId = jsonResponse.id }).then(userID => { fetch (`https://api.spotify.com/v1/users/${userId}/playlists/`, {headers: headers, method: 'POST', body: { 
        //     "description": "Created by Jammming",
        //     "public": false,
        //     "name": `"${name}"` }}).then(response => {return response.json();}).then(jsonResponse => {return playlistID = jsonResponse.id});}).then(playlistID => {fetch (`https://api.spotify.com/v1/users/${userId}/playlists/${playlistID}/tracks`, {headers: headers, method: 'POST', body: {uris: trackUris}});})
        // }

    }


export default Spotify;