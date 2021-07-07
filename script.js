function initmap()
        {
            var location = {lat:28.669081,lng:77.430412};
            var map = new google.maps.Map(document.getElementById("map"),
            {
                zoom:4,
                center: location
            });
            var marker  = new google.maps.Marker(
                {
                    position : location,
                    map : map
                })
        }